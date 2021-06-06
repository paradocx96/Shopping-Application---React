import axios from "axios";

// TODO: Declare url for rest api
const ADDRESS_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";
const POSTMAN_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";

const ADDRESS_API_BASE_URL_REST_API = "http://localhost:8083/api/address";
const POSTMAN_API_BASE_URL_REST_API = "http://localhost:8083/api/postman";

class AddressService {

    // TODO: Getting calculated value for address
    postCalculateAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL_WSO2 + '/calculatedelivery', address)
            .then((data)=>{
                return data.data;
            });
    }

    // TODO: Add new address to database
    postAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL_WSO2 + '/newaddress', address);
    }

    // TODO: Add order from checkout process
    postCheckoutOrder(postman) {
        return axios.post(POSTMAN_API_BASE_URL_WSO2 + '/add', postman);
    }

    // TODO: Get last added order from database
    getLastOrder() {
        return axios.get(POSTMAN_API_BASE_URL_WSO2 + '/last');
    }
}

export default new AddressService();