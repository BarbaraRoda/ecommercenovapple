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
        <div className="bg-[var(--background)] min-h-screen flex flex-col items-center py-10">
            {/* Información del Usuario */}
            <div className="w-11/12 md:w-1/2 p-6 bg-[var(--colorPrimario)] text-[var(--texto2)] rounded-lg shadow-lg">
                <h3 className="text-center text-xl font-bold mb-6">Usuario</h3>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-3">
                        <span className="block text-sn font-medium py-1 px-2 w-fit">
                            Nombre:
                        </span>
                        <p>{user?.name}</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="block text-sn font-medium py-1 px-2">
                            Email:
                        </span>
                        <p>{user?.email}</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="block text-sn font-medium py-1 px-2">
                            Dirección:
                        </span>
                        <p>{user?.address}</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="block text-sn font-medium py-1 px-2">
                            Teléfono:
                        </span>
                        <p>{user?.phone}</p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-1/2 p-6 mt-10 bg-colorTerciario text-texto2 rounded-lg shadow-lg">
                <h3 className="text-center text-xl font-bold mb-6">Órdenes de compra</h3>
                {orders?.map((order) => {
                    const totalPrice = order.products.reduce((acc, item) => acc + item.price, 0);

                    return (
                        <div key={order.id} className="mb-6 p-4 border rounded-lg shadow-lg bg-colorPrimario text-texto2">
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold">ID de la Orden:</span>
                                <p>{order.id}</p>
                            </div>
                            
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold">Productos:</span>
                                <p>{order.products.length}</p>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span className="font-semibold">Total:</span>
                                <p className="text-colorTerciario font-bold">${totalPrice.toFixed(2)}</p>
                            </div>

                            <div className="mt-3">
                                <span className="font-semibold text-lg">Nombres de los productos:</span>
                                <ul className="list-disc ml-6">
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
