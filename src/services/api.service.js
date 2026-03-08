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

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/users"
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
export {
    createUserAPI , updateUserAPI , fetchAllUserAPI , deleteUserAPI , uploadAvatarAPI , updateUserAvatarAPI
}