'use client'
import { useAuth } from "@/context/authContext";
import { getUsersOrders } from "@/services/auth";
import { IOrder } from "@/types";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [orders, setOrders] = useState<IOrder[]>();
    const { user, token } = useAuth();

    useEffect(() => {
        if (orders?.length) return;

        const request = async () => {
            const newOrders = await getUsersOrders(token!);
            setOrders(newOrders);
        };

        if (token) {
            request();
        }
    }, [token]);

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-background">
  
            {/* Sección de usuario */}
            <div className="w-full max-w-2xl mb-8 p-6 border rounded-lg shadow-lg bg-colorPrimario">
                <h3 className="text-center font-bold text-xl text-texto2 mb-4">Usuario</h3>
                <div className="flex flex-col gap-3 text-texto2 mb-6">
                    <div className="flex justify-between p-2 rounded-lg">
                        <span className="font-medium">Nombre:</span>
                        <p>{user?.name}</p>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg">
                        <span className="font-medium">Email:</span>
                        <p>{user?.email}</p>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg">
                        <span className="font-medium">Dirección:</span>
                        <p>{user?.address}</p>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg">
                        <span className="font-medium">Teléfono:</span>
                        <p>{user?.phone}</p>
                    </div>
                </div>
            </div>

            {/* Sección de órdenes de compra */}
            <div className="w-full max-w-2xl bg-background">
                <h3 className="text-center font-bold text-xl text-texto1 mb-4">Órdenes de compra</h3>
                {orders?.map((order) => {
                    const totalPrice = order.products.reduce((acc, item) => acc + item.price, 0);

                    return (
                        <div key={order.id} className="mb-6 p-6 border rounded-lg shadow-lg bg-colorPrimario">
                            <div className="flex justify-between text-texto2">
                                <span className="font-semibold">ID Orden:</span>
                                <p>{order.id}</p>
                            </div>
                            <div className="flex justify-between text-texto2 bg-colorPrimario p-2 rounded-lg">
                                <span className="font-semibold">Productos:</span>
                                <p>{order.products.length}</p>
                            </div>
                            <div className="flex justify-between text-texto2 bg-colorPrimario p-2 rounded-lg">
                                <span className="font-semibold">Total:</span>
                                <p className="text-colorTerciario font-bold">${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className="mt-4">
                                <span className="font-semibold text-texto2">Nombres de los productos:</span>
                                <ul className="list-disc ml-6 text-texto2">
                                    {order.products.map((product) => (
                                        <li key={product.id}>{product.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
