import { PropsWithChildren, createContext, useContext, useState } from "react"
import { CartItem, Product } from "../types";
import {randomUUID} from "expo-crypto";
type cartType = {
    items: CartItem[],
    addItem: (product : Product, size: CartItem['size']) => void
    updateQuantity:(itemId: string, amount: -1 | 1) => void;
    totalPrice: number,
}
const CartContext = createContext<cartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () =>{},
    totalPrice: 0,
});
export const useCart = () => useContext(CartContext);
const CartProvider = ({children}: PropsWithChildren) => {
  
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product : Product, size: CartItem['size']) => {
        const exsitingPizza = items.find(item => item.product == product && item.size == size);

        if(exsitingPizza){
            updateQuantity(exsitingPizza.id,1);
            return;
        }

        const newCartItem:CartItem = {
            id:randomUUID(),
            product_id: product.id,
            product,
            size,
            quantity: 1
        }
        setItems([newCartItem, ...items]);
    }
    
    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems(items.map(
            (item) => item.id !== itemId ? item : {...item, quantity: item.quantity + amount})
            .filter( item => item.quantity > 0)
        );
    }
    const totalPrice = items.reduce((acc, item) => acc += item.product.price * item.quantity, 0);
    return (
        <CartContext.Provider value={{items, addItem, updateQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

