import axios from "axios";

const API_BACKEND_URL = "http://localhost:8080/api/auth/";

class UserService {
  login(username, password, authType) {
    return axios.post(API_BACKEND_URL + "signin", {
        username,
        password,
        authType
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          //localStorage.setItem("userType", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  register(username, contactNo, email, password, userType, authType) {
    return axios.post(API_BACKEND_URL + "signup", {
      username,
      contactNo,
      email,
      password,
      userType,
      authType
    });
  }

  logout() {
    localStorage.removeItem("user");
    //localStorage.removeItem("userType");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // getCurrentUserType(){
  //   return JSON.parse(localStorage.getItem("userType"));
  // }
}

export default new UserService();
