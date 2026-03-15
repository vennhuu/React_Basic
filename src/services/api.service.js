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

const updateUserAPI = (id, fullName , email, phoneNumber) => {
    const URL_BACKEND = "/api/v1/users"
    const data = {
        id: id ,
        name: fullName ,
        email: email ,
        phoneNumber: phoneNumber
    }
    return axios.put(URL_BACKEND,data);
}

const fetchAllUserAPI = (current = 1, pageSize = 10) => {
    const URL_BACKEND = `/api/v1/users?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND);
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/users/${id}`;
    return axios.delete(URL_BACKEND);
}

const uploadAvatarAPI = (file, folder) => {

    const URL_BACKEND = "/api/v1/files"

    const bodyFormData = new FormData()

    bodyFormData.append("file", file)
    bodyFormData.append("folder", folder)

    return axios.post(URL_BACKEND, bodyFormData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const updateUserAvatarAPI = (id, avatar) => {

    const URL_BACKEND = "/api/v1/users/avatar"

    const params = new URLSearchParams()

    params.append("userId", id)
    params.append("avatar", avatar)

    return axios.put(URL_BACKEND, params)
}

const registerUserAPI = (fullName , email, password, phoneNumber) => {
    const URL_BACKEND = "/api/v1/register"
    const data = {
        name: fullName ,
        email: email ,
        password: password,
        phoneNumber: phoneNumber
    }
    return axios.post(URL_BACKEND,data);
}

const loginUserAPI = ( email, password) => {
    const URL_BACKEND = "/api/v1/login"
    const data = {
        username: email ,
        password: password
        // delay: 5000
    }
    return axios.post(URL_BACKEND,data);
}

const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/account"
    return axios.get(URL_BACKEND);
}

const logoutAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout"
    return axios.post(URL_BACKEND);
}

const fetchAllBookAPI = (current = 1, pageSize = 10) => {
    const URL_BACKEND =  `/api/v1/books?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

export {
    createUserAPI , updateUserAPI , fetchAllUserAPI , deleteUserAPI , 
    uploadAvatarAPI , updateUserAvatarAPI , registerUserAPI , loginUserAPI , 
    getAccountAPI , logoutAccountAPI , fetchAllBookAPI
}