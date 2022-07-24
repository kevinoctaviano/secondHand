import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://second-hand-backend.herokuapp.com/';

export async function updateStatusProduct(id, payload) {
    return axios.put(`${API_URL}Product-status/${id}`, payload, {
        headers: authHeader()
    })
}