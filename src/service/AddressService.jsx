import axios from "axios";

const ADDRESS_API_BASE_URL = "http://localhost:8080/api/address";
const PAYMENT_API_BASE_URL = "http://localhost:8080/api/payment";

class AddressService {

    postCalculateAddress(a) {
        return axios.post(ADDRESS_API_BASE_URL + '/calculate', a)
            .then((data)=>{
                return data.data;
            });
    }

    postAddress(a) {
        return axios.post(ADDRESS_API_BASE_URL, a);
    }

    getAddress(userid) {
        return axios.get(ADDRESS_API_BASE_URL + '/user/' + userid);
    }

    postTotalPrice(price) {
        return axios.post(PAYMENT_API_BASE_URL, price)
    }
}

export default new AddressService();