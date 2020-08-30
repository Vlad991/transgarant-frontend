import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://statusnpd.nalog.ru:443/api/v1/tracker/taxpayer_status'
});

export const innAPI = {
    checkInn(inn) {
        let date = new Date();
        date = date.getFullYear() + '-'
            + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-'
            + (date.getDate() > 9 ? date.getDate() : ('0' + date.getDate()));
        let requestData = {
            inn: inn,
            requestDate: date
        };
        return instance.post('/', requestData)
            .then(response => response)
            .catch(error => error);
    }
};