"use server";
import { IUser } from "@/types";
import axios from "axios";

const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});


export const login = async (userData: {
    email: string;
    password: string;
}) => {
    try {
        const response = await axiosApiBack.post("/users/login", userData)  
            return response.data;
        
    } catch (e: any) {
        console.log("Error al loguearse", e?.message);
        throw Error('ERROR_LOGIN');
    }
};


export const register = async (userData: Partial<IUser>) => {
    try {
        await axiosApiBack.post("/users/register", userData);
        return "Registro exitoso";
    } catch (e: any) {
        console.error("Error al registrarse:", e.response?.data || e.message);
        throw new Error(e.response?.data?.message || "ERROR_REGISTER");
    }

};

export const getUsersOrders = async (token: string) => {
    try {
        const response = await axiosApiBack.get("/users/orders", {
            headers:{
                authorization: `${token}`,
            }
        });
        
        if (response) {
            return response.data;
        }

    } catch (e:any) {
        console.log("Error al obtener orders", e?.message);
        throw Error("ERROR_GET_ORDERS")
       }
};