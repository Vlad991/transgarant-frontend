import * as axios from "axios";
import {apiBaseUrl} from "../deployment";

const instance = axios.create({
    baseURL: apiBaseUrl,
});

export const categoryAPI = {
    getCategories() {
        return instance.get('/car-types');
    }
};

export const vehicleAPI = {
    getBodyTypes(categoryId) {
        return instance.get('/body-types' + (categoryId ? '/' + categoryId : ''));
    },
    getBodyOptions(bodyTypeId, categoryId) {
        return instance.get('/body-options/' + bodyTypeId + (categoryId ? '/' + categoryId : ''));
    },
    getBodyOptionChs(bodyOptionId, bodyTypeId, categoryId) {
        return instance.get('/body-option-characteristics/' + bodyOptionId + '/' + bodyTypeId + (categoryId ? '/' + categoryId : ''));
    },
    getBodyOptionChValues(bodyOptionChId, categoryId) {
        return instance.get('/body-option-characteristics-values/' + bodyOptionChId + (categoryId ? '/' + categoryId : ''));
    }
};

export const dopAPI = {
    getDop() {
        return instance.get('/additional-requirements');
    }
};

export const fileAPI = {
    addFile(name, data) {
        let requestData = {name, data};
        return instance.post('/order-files', requestData)
            .then(response => response)
            .catch(error => error);
    }
};

export const cargoAPI = {
    getPalletTypes() {
        return instance.get('/pallet-types');
    },
    getPackageTypes() {
        return instance.get('/package-types');
    },
    addCargo(name, price, places, pallets, packages, body_option_id, body_option_characteristics) {
        let data = {
            cargo: {
                name: name,
                price: price,
                places: places,
                pallets: pallets,
                packages: packages
            },
            body_option_id,
            body_option_characteristics,
        }
        return instance.post('/pack', data)
            .then(response => response)
            .catch(error => error);
    }
};

export const orderAPI = {
    calc(date, body_type_id, body_option_id, body_option_characteristics, additional_requirements, routes, name, price, places, pallets, packages, tariff_type_id, full_name, phone, phone_ext, email, payment_type, car_type_id) {
        let data = {
            date: date,
            body_type_id: body_type_id,
            body_option_id: body_option_id,
            body_option_characteristics: body_option_characteristics,
            additional_requirements: additional_requirements,
            routes: routes,
            cargo: {
                name: name,
                price: price,
                places: places,
                pallets: pallets,
                packages: packages
            },
            tariff_type_id: tariff_type_id,
            contacts: {
                full_name: full_name,
                phone: phone,
                phone_ext: phone_ext,
                email: email
            },
            payment_type: payment_type
        }
        if (places.length === 0 && pallets.length === 0 && packages.length === 0) {
            data.car_type_id = car_type_id;
        }
        return instance.post('/calc', data, {timeout: 5000000})
            .then(response => response)
            .catch(error => error);
    },
    orders(date, body_type_id, body_option_id, body_option_characteristics, additional_requirements, routes, name, price, places, pallets, packages, tariff_type_id, full_name, phone, phone_ext, email, payment_type, car_type_id) {
        let data = {
            date: date,
            body_type_id: body_type_id,
            body_option_id: body_option_id,
            body_option_characteristics: body_option_characteristics,
            additional_requirements: additional_requirements,
            routes: routes,
            cargo: {
                name: name,
                price: price,
                places: places,
                pallets: pallets,
                packages: packages
            },
            tariff_type_id: tariff_type_id,
            contacts: {
                full_name: full_name,
                phone: phone,
                phone_ext: phone_ext,
                email: email
            },
            payment_type: payment_type
        }
        if (places.length === 0 && pallets.length === 0 && packages.length === 0) {
            data.car_type_id = car_type_id;
        }
        return instance.post('/orders', data)
            .then(response => response)
            .catch(error => error);
    }
};

export const phoneAPI = {
    sendSms(phone) {
        let requestData = {phone};
        return instance.post('/send-sms', requestData)
            .then(response => response)
            .catch(error => error);
    },
    checkSms(phone, code) {
        return instance.get('/check-sms/' + phone + '/' + code);
    },
    checkTinPhone(phone, tin) {
        return instance.get('/check-tin-phone/' + phone + '/' + tin);
    },
    checkPhone(phone) {
        return instance.get('/check-tin-phone/' + phone);
    }
};