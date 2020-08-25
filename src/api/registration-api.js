import * as axios from "axios";
import {apiBaseUrl} from "../deployment";

const instance = axios.create({
    baseURL: apiBaseUrl,
});

export const numberAPI = {
    checkPhone(phone) {
        return null;
    }
};