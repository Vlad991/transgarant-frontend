import * as axios from "axios";
import {apiBaseUrl} from "../deployment";

const instance = axios.create({
    baseURL: apiBaseUrl,
});

export const numberAPI = {
    sendSms(phone) {
        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve({status: 200, data: {}});
            }, 1000);
        });
    },
    verifyPhone(phone, code) {
        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve({status: 200, data: {valid: true}});
            }, 1000);
        });
    }
};