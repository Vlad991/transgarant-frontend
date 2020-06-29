import * as axios from "axios";
import polyline from '@mapbox/polyline';

import { swap } from './utils';
import { RoutesEndpoint } from '../config';

class RoutesApi {
	constructor() {
		this.axios = axios.create({
			baseURL: RoutesEndpoint
		});
	}

	async getRoute(from, to, exclude) {
		let url = `/route/v1/car/${from[0]},${from[1]};${to[0]},${to[1]}?steps=true&continue_straight=false`;

		if (exclude) {
			url += "&exclude=" + exclude;
		}

		let result = null;
		try {
			const resp = await this.axios.get(url);
			if (resp.status === 200 && resp.data.routes.length) {
				const geometry = [];

				resp.data.routes[0].legs.forEach(l => {
					l.steps.forEach(s => {
						geometry.push(...swap(polyline.decode(s.geometry)));
					});
				});

				result = {
					distance: resp.data.routes[0].distance,
					geometry
				}
			}
		}
		catch (err) {
			console.log("router error", err);
		}

		return result;
	}
}


export default new RoutesApi();