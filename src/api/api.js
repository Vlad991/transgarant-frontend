import * as axios from "axios";
import {apiBaseUrl} from "../deployment";

const instance = axios.create({
    baseURL: apiBaseUrl,
});

export const categoryAPI = {
    getCategories() {
        return instance.get('/car-types')
            .then(response => response)
            .catch(error => error);
    }
};

export const vehicleAPI = {
    getBodyTypes(categoryId) {
        return instance.get('/body-types' + (categoryId ? '/' + categoryId : ''))
            .then(response => response)
            .catch(error => error);
    },
    getBodyOptions(bodyTypeId, categoryId) {
        return instance.get('/body-options/' + bodyTypeId + (categoryId ? '/' + categoryId : ''))
            .then(response => response)
            .catch(error => error);
    },
    getBodyOptionChs(bodyOptionId, bodyTypeId, categoryId) {
        return instance.get('/body-option-characteristics/' + bodyOptionId + '/' + bodyTypeId + (categoryId ? '/' + categoryId : ''))
            .then(response => response)
            .catch(error => error);
    },
    getBodyOptionChValues(bodyOptionChId, categoryId) {
        return instance.get('/body-option-characteristics-values/' + bodyOptionChId + (categoryId ? '/' + categoryId : ''))
            .then(response => response)
            .catch(error => error);
    }
};

export const dopAPI = {
    getDop() {
        return instance.get('/additional-requirements')
            .then(response => response)
            .catch(error => error);
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
        return instance.get('/pallet-types')
            .then(response => response)
            .catch(error => error);
    },
    getPackageTypes() {
        return instance.get('/package-types')
            .then(response => response)
            .catch(error => error);
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
        return instance.post('/pack', data, {timeout: 10000})
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
        return instance.get('/check-sms/' + phone + '/' + code)
            .then(response => response)
            .catch(error => error);
    },
    checkTinPhone(phone, tin) {
        return instance.get('/check-tin-phone/' + phone + '/' + tin)
            .then(response => response)
            .catch(error => error);
    },
    checkPhone(phone) {
        return instance.get('/check-tin-phone/' + phone)
            .then(response => response)
            .catch(error => error);
    }
};