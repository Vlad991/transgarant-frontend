import RoutesApi from './routesApi';
import { bbox, lineString, polygon, booleanContains, point, length } from "@turf/turf";
import RouteToMkad from './routeToMkad';
import data from '../data';

class MapModel {
	waypoints = [];
	segments = [];
	mkadRoutes = {};
	bounds = [[38.05389404296876, 55.93958683374666], [37.179794311523445, 55.5616508394963]];

	constructor() {
		this.bkPoly = polygon([data.bkPoly]);
		this.skPoly = polygon([data.skPoly]);
		this.ttkPoly = polygon([data.ttkPoly]);
		this.mkad = polygon([data.poly]);
		this.mkadOut = polygon([data.outPoly]);
	}

	setWaypoints(coords, exclude) {
		this.segments = [];
		this.mkadRoutes = {};

		this.exclude = exclude;
		const points = coords.split(";");
		this.waypoints = points.map(item => item.split(",").map(num => +num));

		if (this.waypoints.length <= 1) {
			return;
		}

		const box = bbox(lineString(this.waypoints));
		this.bounds = [[box[0], box[1]], [box[2], box[3]]];
		this.getRoutes();
	}

	async getRoutes() {
		const segments = [];
		for (let i = 0; i < this.waypoints.length - 1; i++) {
			const route = await RoutesApi.getRoute(this.waypoints[i], this.waypoints[i + 1], this.exclude);
			if (route) {
				segments.push(route);
			}
		}

		if (!this.isInMkad(this.waypoints[0])) {
			this.mkadRoutes.start = await RouteToMkad.getRouteTo(this.waypoints[0]);
		}

		if (!this.isInMkad(this.waypoints[this.waypoints.length - 1])) {
			this.mkadRoutes.end = await RouteToMkad.getRouteFrom(this.waypoints[this.waypoints.length - 1]);
		}

		this.segments = segments;
	}

	isInMkad(waypoint, poly) {
		if (!poly) {
			poly = this.mkad;
		}
		return booleanContains(poly, point(waypoint));
	}

	isInRegion(item) {
		if (booleanContains(this.bkPoly, point(item))) {
			return "bk";
		}

		if (booleanContains(this.skPoly, point(item))) {
			return "sk";
		}

		if (booleanContains(this.ttkPoly, point(item))) {
			return "ttk";
		}

		return;
	}

	simplifyResult(input) {
		// console.log(input);

		if (input.length <= 3) {
			return input;
		}

		if (input[0].inside !== input[input.length - 1].inside) {
			const result = [];
			if (input[0].inside) {
				const distance = input.slice(0, input.length - 1).reduce((acc, c) => acc + c.distance, 0);
				result.push({ inside: input[0].inside, distance });
				result.push(input[input.length - 1]);
			} else {
				result.push(input[0]);
				const distance = input.slice(1).reduce((acc, c) => acc + c.distance, 0);
				result.push({ distance, inside: input[1].inside });
			}
			return result;
		}

		if (input[0].inside === input[input.length - 1].inside) {
			const result = input.slice(0, 1);
			const distance = input.slice(1, input.length - 1).reduce((acc, c) => acc + c.distance, 0);
			result.push({ inside: input[1].inside, distance });
			result.push(input[input.length - 1]);
			return result;
		}

		return input;
	}

	get distanceTable() {
		if (!this.segments.length) {
			return;
		}

		let counter = 0;
		const label = (increment) => {
			if (increment) { counter++ };
			return String.fromCharCode('A'.charCodeAt(0) + counter);
		};

		const table = [];

		if (this.mkadRoutes.start) {
			table.push({ from: "МКАД старт", to: label(), distance: this.mkadRoutes.start.distance, fromReg: null, toReg: this.waypoints[0], inside: false });
		}

		for (let i = 0; i < this.waypoints.length - 1; i++) {
			const segment = this.segments[i];
			let parts = RouteToMkad.splitByMkad(lineString(segment.geometry), this.mkadOut);

			if (!parts.features.length) {
				table.push({ from: label(), to: label(true), distance: this.segments[i].distance, fromReg: this.isInRegion(this.waypoints[i]), toReg: this.isInRegion(this.waypoints[i + 1]), inside: this.isInMkad(this.waypoints[i], this.mkadOut) });
			} else {
				parts = this.simplifyResult(parts.features.map(item => {
					return {
						inside: this.isInMkad(item.geometry.coordinates[1], this.mkadOut),
						distance: length(item) * 1000,
						geometry: JSON.stringify(item.geometry.coordinates)
					}
				}));

				
				table.push({ from: label(), to: "МКАД", distance: parts[0].distance, fromReg: this.isInRegion(this.waypoints[i]), toReg: null, inside: parts[0].inside });
				for (let j = 1; j < parts.length - 1; j++) {
					table.push({ from: "МКАД", to: "МКАД", distance: parts[j].distance, fromReg: null, toReg: null, inside: parts[j].inside });
				}
				table.push({ from: "МКАД", to: label(true), distance: parts[parts.length - 1].distance, fromReg: this.isInRegion(this.waypoints[i + 1]), toReg: null, inside: parts[parts.length - 1].inside });
			}
		}

		if (this.mkadRoutes.end) {
			table.push({ from: label(), to: "МКАД финиш", distance: this.mkadRoutes.end.distance, fromReg: this.isInRegion(this.waypoints[this.waypoints.length - 1]), toReg: null, inside: false });
		}

		// 

		let outsideCount = 0;
		let insideState = true;		
		let inside = 0;
		let outside = [[]];
		let outsideLength = 0;

		table.forEach(item => {
			if (item.inside) {
				insideState = true;
				outside.push([]);
				inside += item.distance;
			} else {
				if (insideState) {
					outsideCount++;
					insideState = false;
				}
				outsideLength += item.distance;
				outside[outside.length - 1].push(item.distance);
			}			
		});

		let outsideLengthMinus = 0;
		let outsideSegments = outside.filter(item => item.length)
			.map(item => {
				return item.reduce((sum, curr) => {
					return sum += curr;
				});
			});
		
		outsideSegments.forEach(item => {
			outsideLengthMinus += Math.max(item - 30, 0);
		});

		return { table, outsideCount, inside, outsideLength, outsideLengthMinus };
	}
}

export default new MapModel();