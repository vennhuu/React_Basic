// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName , email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/users"
    const data = {
        name: fullName ,
        email: email ,
        password: password,
        phoneNumber: phoneNumber
    }
    return axios.post(URL_BACKEND,data);
}

const updateUserAPI = () => {

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/users"
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI , updateUserAPI , fetchAllUserAPI
}