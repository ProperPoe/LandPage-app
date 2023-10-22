import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9001/api' })


API.interceptors.request.use((req) => {
    if(localStorage.getItem("userID")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("userID")).token}`
    }

    return req;
});

export const create = () => API.post('/')
export const likes = (id) => API.put(`/${id}/likePost`);
export const deleted = (id) => API.delete(`/${id}/delete`);

export const login = () => API.post('/login')
export const signup = () => API.post('/createUser')