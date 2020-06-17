import * as axios from "axios";

const token = '2ea1d8d4-d8b7-49ff-96f4-7fe4b3d91cbd';

const instance = axios.create({
    baseURL: 'http://185.47.204.186:44981/API/hs/PublicOrdersAPI',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const vehicleAPI = {
    getBodyTypes() {
        return instance.get('/body-types');
    },
    getBodyOptions(bodyTypeId) {
        return instance.get('/body-options?body_type_id=' + bodyTypeId);
    },
    getBodyOptionChs(bodyOptionId, bodyTypeId) {
        return instance.get('/body-option-characteristics?body_option_id=' + bodyOptionId + '&body_type_id=' + bodyTypeId);
    },
    getBodyOptionChValues(bodyOptionChId) {
        return instance.get('/body-option-characteristics-values?body_option_characteristics_id=' + bodyOptionChId);
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

export const dopAPI = {
    getDop() {
        return instance.get('/additional-requirements');
    }
};

export const orderAPI = {
    calc(date, body_type_id, body_option_id, body_option_characteristics, additional_requirements, routes, name, price, places, pallets, packages, tariff_type_id, full_name, phone, phone_ext, email, payment_type) {
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
                full_name: name,
                phone: phone,
                phone_ext: phone_ext,
                email: email
            },
            payment_type: payment_type
        }
        return instance.post('/calc', data)
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