import axios from "axios";

// TODO: Declare url for rest api
const ADDRESS_API_BASE_URL = "http://localhost:8280/delivery";
const POSTMAN_API_BASE_URL = "http://localhost:8280/delivery/last";

class AddressService {

    // TODO: Getting calculated value for address
    postCalculateAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL + '/calculatedelivery', address)
            .then((data)=>{
                return data.data;
            });
    }

    // TODO: Add new address to database
    postAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL + '/newaddress', address);
    }

    // TODO: Get last added order from database
    getLastOrder() {
        return axios.get(POSTMAN_API_BASE_URL);
    }
}

export default new AddressService();