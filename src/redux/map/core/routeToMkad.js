import RoutesApi from './routesApi';
import {lineSplit, lineString, polygon, distance} from "@turf/turf";
import data from '../data';

class RouteToMkad {
    constructor() {
        this.mkad = polygon([data.poly]);
        this.mkad = polygon([data.poly]);
        this.b_junctions = data.b_junctions;
        this.s_junctions = [...data.b_junctions, ...data.s_junctions];
    }

    async getRouteTo(waypoint) {
        const nearest_coords = [];
        const fromCenter = await this.routeFromCenter(waypoint);
        nearest_coords.push(fromCenter);

        const dist_j = this.findNearest(this.s_junctions, waypoint, 1)[0];
        const dist = dist_j.distance;

        let nearest_j = [];
        if (dist < 3500) {
            nearest_j = this.findNearest(this.s_junctions, waypoint, 7);
        } else {
            nearest_j = this.findNearest(this.b_junctions, waypoint, 5);
        }

        nearest_j.forEach(item => {
            if (item.coords[0] !== fromCenter[0][0] || item.coords[1] !== fromCenter[0][1]) {
                nearest_coords.push(item.coords);
            }
        });

        const routesFn = nearest_coords.map(item => {
            return RoutesApi.getRoute(item, waypoint);
        });

        const routes = await Promise.all(routesFn);
        routes.sort((a, b) => {
            return a.distance - b.distance;
        });

        return routes[0];
    }

    async getRouteFrom(waypoint) {
        const nearest_coords = [];
        const toCenter = await this.routeToCenter(waypoint);
        nearest_coords.push(toCenter);

        const dist_j = this.findNearest(this.s_junctions, waypoint, 1)[0];
        const dist = dist_j.distance;

        let nearest_j = [];
        if (dist < 3500) {
            nearest_j = this.findNearest(this.s_junctions, waypoint, 7);
        } else {
            nearest_j = this.findNearest(this.b_junctions, waypoint, 5);
        }

        nearest_j.forEach(item => {
            if (item.coords[0] !== toCenter[0][0] || item.coords[1] !== toCenter[0][1]) {
                nearest_coords.push(item.coords);
            }
        });

        const routesFn = nearest_coords.map(item => {
            return RoutesApi.getRoute(waypoint, item);
        });

        const routes = await Promise.all(routesFn);
        routes.sort((a, b) => {
            return a.distance - b.distance;
        });

        return routes[0];
    }


    async routeFromCenter(waypoint) {
        const j = [37.61699737548825, 55.75119082121071]; // center

        const route = await RoutesApi.getRoute(j, waypoint, false);
        const splited = this.splitByMkad(lineString(route.geometry));

        const coords = splited.features[0].geometry.coordinates
        return coords[coords.length - 1];
    }

    async routeToCenter(waypoint) {
        const j = [37.61699737548825, 55.75119082121071]; // center

        const route = await RoutesApi.getRoute(waypoint, j, false);
        const splited = this.splitByMkad(lineString(route.geometry));

        const coords = splited.features[0].geometry.coordinates
        return coords[coords.length - 1];
    }

    splitByMkad(line, poly) {
        if (!poly) {
            poly = this.mkad;
        }
        return lineSplit(line, poly);
    }

    findNearest(input, waypoint, count) {
        const arr = input.map((item, i) => {
            return [distance(item, waypoint), i];
        });

        arr.sort((a, b) => {
            return a[0] - b[0];
        });

        const result = [];
        for (let i = 0, l = Math.min(count, input.length); i < l; i++) {
            result.push({coords: input[arr[i][1]], distance: arr[i][0] * 1000});
        }

        return result;
    }

}

export default new RouteToMkad();