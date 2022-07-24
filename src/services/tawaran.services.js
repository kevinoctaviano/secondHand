import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://second-hand-backend.herokuapp.com/';

export async function getTawaranBuyer() {
    return await axios.get(`${API_URL}tawaran-buyer`, {
        headers: authHeader()
    })
}