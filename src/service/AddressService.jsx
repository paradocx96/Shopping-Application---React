import axios from "axios";

const ADDRESS_API_BASE_URL = "http://localhost:8080/api/address";
const PAYMENT_API_BASE_URL = "http://localhost:8080/api/payment";
const CHECKOUT_BASE_URL = "http://localhost:8080/api/checkout";

class AddressService {

    postCalculateAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL + '/calculate', address)
            .then((data)=>{
                return data.data;
            });
    }

    postAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL + '/add', address);
    }

    postTotalPrice(price) {
        return axios.post(PAYMENT_API_BASE_URL, price)
    }

    getOrderPrice() {
        return axios.get(CHECKOUT_BASE_URL);
    }
}

export default new AddressService();