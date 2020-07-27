import * as axios from "axios";

export const token = "4907ed3e0ba286c611e621c3db1588fe3ce7f53c";

const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate',
    headers: {
        Authorization: "Token " + token
    }
});

export const addressAPI = {
    getAddressByCoords(lat, lon) {
        let requestData = {lat, lon};
        return instance.post('/address', requestData)
            .then(response => response)
            .catch(error => error);
    }
};