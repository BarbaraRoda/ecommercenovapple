import axios from "axios";

const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export interface DtoOrder{
    userId: number;
    products: number[];
}

export const postOrder = async (orderData: DtoOrder, token: string) => {
   try {
    const response = await axiosApiBack.post("/orders", orderData, {
        headers:{
            authorization: `${token}`,
        }
    });
    return response
   } catch (e:any) {
    console.log("Error en order post", e?.message);
    throw Error("ERROR_POST_ORDER")
   }
};

