import axios from 'axios';

// Definimos la interfaz User
export interface User {
    id: number;
    nombre: string;
    email: string;
}

const API_URL = 'http://localhost:3001/usuarios';

export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createUser = async (user: { nombre: string; email: string }) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

export const updateUser = async (id: number, user: { nombre: string; email: string }) => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
};

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
