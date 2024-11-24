import axios from 'axios';
import axiosInstance, { deleteToken, setToken } from './axiosInstance';
import i18n from '../i18n';

const baseURL = 'https://easylife.runasp.net/api';
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
            localStorage.setItem('Name' , response.data.userName);
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
            const response = await axiosApi.post(`/auth/registerWithConfirm`, data);
            return response.data; 
        } catch (error) {
            // console.log('f',error.response.data[0].description)
            throw new Error(error.response.data.description); 

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

var langObj = {
    headers: {
        'Accept-Language': i18n.language
    }
}
const ServicesService = {
    List: async () => {
        try {
            const response = await axiosInstance.get(`/services/`,langObj);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },  
    GetById: async (id) => {
        try {
            const response = await axiosInstance.get(`/services/${id}`,langObj);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message);
        }
    },
}
const NewsService = {
    List: async () => {
        try {
            const response = await axiosInstance.get(`/news`,langObj);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    GetById: async (id) => {
        try {
            const response = await axiosInstance.get(`/news/${id}`,langObj);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message);
        }
    },
}
const NotificationService = {
    List: async () => {
        try {
            const response = await axiosInstance.get(`/notifications`,langObj);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    GetById: async (id) => {
        try {
            const response = await axiosInstance.get(`/notifications/${id}`,langObj);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message);
        }
    },
}
const ReservationsService = {
    List: async () => {
        try {
            const response = await axiosInstance.get(`/reservations/MyReservations`,langObj);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    Add:async (userName,location , details , phoneNumber , reservationTime , reservationStatusId , ServiceId) => {
        try {
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('location', location);
            formData.append('details', details);
            formData.append('phoneNumber', phoneNumber);
            formData.append('reservationTime', reservationTime);
            formData.append('reservationStatusId', reservationStatusId);
            formData.append('ServiceId', ServiceId);
            const response = await axiosInstance.post(`/reservations`,formData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    
    
}


export {
    AuthService,
    ServicesService,
    NewsService,
    NotificationService,
    ReservationsService
}
