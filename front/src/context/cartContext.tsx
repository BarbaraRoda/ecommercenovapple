'use client';
import { createContext, useContext, 
useState, ReactNode, 
useEffect} from 'react';


interface CartContextType {
    total:number;
    cart:any[];
    addToCart:(product:any)=>void;
    removeFromCart:(product:any)=>void;
    updateQuantity:(productId:string)=>void;
    resetCart: ()=>void;
}

const CartContext=
createContext<CartContextType |
undefined>(undefined);

export const CartProvider = ({children} : {
    children:ReactNode
}) =>{
    const [cart, setCart] = useState<CartContextType['cart']>();
    const [total, setTotal] = useState<CartContextType['total']>();

    const addToCart = (product: any) => {
        setCart((statePrev) => [...(statePrev || []), product]);
        setTotal((prevTotal)=>(prevTotal || 0) + 1);
    };
    
    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart?.filter((p) => p.id !== id));
        setTotal((prevTotal)=>{
            if(prevTotal === 0 || !prevTotal){
                return 0;
            }
            return prevTotal - 1;
        });
    };
    
    const updateQuantity = () => {};

    const resetCart = () => setTimeout(()=> {setCart([]); setTotal(0)}, 2800) ;


    useEffect(()=>{
        if (!cart) {
            return;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total',total?.toString() || "0")
    }, [cart, total])

    useEffect(()=>{
        const localCart = localStorage.getItem("cart");
        const localTotal = localStorage.getItem("total")
        if (!localCart) {
            return setCart([]);
        }

        setCart(JSON.parse(localCart));
        setTotal((Number(localTotal)))
    }, [])

    return<CartContext.Provider 
    value={{
        cart: cart || [], 
        total: total || 0, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        resetCart
    }}>
        {children}
    </CartContext.Provider>
}

export const useCart = ()=>{
    const context = useContext(CartContext);
    if (!context){
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
}