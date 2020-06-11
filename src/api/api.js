import * as axios from "axios";

const token = '2ea1d8d4-d8b7-49ff-96f4-7fe4b3d91cbd';

const instance = axios.create({
    baseURL: 'http://185.47.204.186:44981/API/hs/PublicOrdersAPI',
    headers: {
        Authorization: `Bearer 2ea1d8d4-d8b7-49ff-96f4-7fe4b3d91cbd`
    }
});

export const vehicleAPI = {
    getBodyTypes() {
        return instance.get('/body-types');
    }
};

export const cargoAPI = {
    getPalletTypes() {
        return instance.get('/pallet-types');
    }
};