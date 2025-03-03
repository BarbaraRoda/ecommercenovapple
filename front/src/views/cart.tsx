'use client';
import { routes } from "@/app/routes/routes";
import Button from "@/components/Button";
import CartItem from "@/components/cartItem";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import { DtoOrder, postOrder } from "@/services/orders";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const CartView = () => {
    const router = useRouter();
    const {cart, removeFromCart, total, resetCart} = useCart();
    const {user, token} = useAuth();
    
    const onTrashClick = (id: number) => () => {
        return removeFromCart(id);
    };

    const onBuyClick = async () => {
        try {
            if (!user) {
            return;
        }
        const data: DtoOrder = {
            userId: user.id,
            products: cart.map((product) => product.id),
        };

        const response= await postOrder(data, token || "");
        const order = response.data;
        toast.success(`Se creó la orden de compra: #${order.id}`)

        resetCart();

        setTimeout(()=>{
            router.push(routes.dashboard)
        },2500)

        } catch (e) {
            console.warn('Ocurrio un error al crear la orden de compra')
            toast.error('Ocurrio un error al registrar la orden de compra')
        } 
    };
    

    return (
        <div>
            <div className="flex justify-between w-full items-center">
                <h2>Carrito de compras</h2>
                <Button 
                    variant="primary"
                    disabled={!cart.length} 
                    onClick={onBuyClick}
                >
                    Comprar
                </Button>
            </div>
            {cart.map((p, idx) => (
                <CartItem {...p} key={idx} onTrashClick={onTrashClick(p.id)} />
            ))}
            {!cart?.length && <p>Todavía no hay nada en tu carrito</p>}
        </div>
    );
};

export default CartView;
