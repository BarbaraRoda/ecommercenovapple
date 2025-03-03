import { IProduct } from "@/types";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await axiosApiBack.get("/products");
    return response?.data || [];
  } catch (e) {
    console.error("No se pudo obtener los productos", e);
    return [];
  }
};


export const getProduct = async (id: number): Promise<IProduct | null> => {
  try {
    const response = await axiosApiBack.get(`/products/${id}`);
   return response?.data || null;
 } catch (e) {
   console.error("No se pudo obtener el producto", e);
   return null;
 }
};
