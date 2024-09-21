import axios from 'axios';
import axiosInstance, { deleteToken, setToken } from './axiosInstance';

const baseURL = 'https://localhost:7201/api';
const axiosApi = axios.create({
    baseURL: baseURL,
    Accept:'application/json',
    "Content-Type": 'application/json'


});
const AuthService = {

    Login: async (email , password) =>{
        try {
            const data = {
                email:email,
                password:password
            }
            const response = await axiosApi.post(`/auth/login`, data);
            setToken(response.data.token);
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data); 
        }
    },
    Register: async (username , email , password) =>{
        try {
            const data = {
                username:username,
                email:email,
                password:password
            }
            const response = await axiosApi.post(`/auth/register`, data);
            return response.data; 
        } catch (error) {
            // console.log('f',error.response.data[0].description)
            throw new Error(error.response.data[0].description); 

        }
    },
    Logout: async () =>{
        try {
        const response = await axiosInstance.post(`/auth/logout`);
        deleteToken();
        localStorage.clear();
        return response.data;
        } catch (error) {
        throw new Error(error.response.data); 
        }
    },


}
export {
    AuthService
}
