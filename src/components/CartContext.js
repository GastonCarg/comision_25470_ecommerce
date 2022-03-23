import { createContext, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    let itemsOnCart = [];

    const addItem = (item, quantity) => {
        itemsOnCart = [...cart];
        const productInCart = isInCart(item.id);

        if (!productInCart) {
            item.quantity = quantity;
            itemsOnCart.push(item);
        }
        else {
            const itemToChange = cart.find(it => it.id === item.id);
            itemToChange.quantity += quantity;
        }

        calculateQuantity(itemsOnCart);
        calculateTotal(itemsOnCart);
        setCart(itemsOnCart);
    }

    const removeItem = (itemId) => {
        itemsOnCart = [...cart];
        const productInCart = isInCart(itemId);

        if (productInCart) {
            itemsOnCart.forEach((item, index)=>{
                if (item.id === itemId) itemsOnCart.splice(index, 1);
            })
        }

        calculateQuantity(itemsOnCart);
        calculateTotal(itemsOnCart);
        setCart(itemsOnCart);
    }

    const clear = () => {
        setCart([]);
        setTotal(0);
        setQuantity(0);
    }

    const isInCart = (id) => {
        const isInCart = cart.find(item => id === item.id);
        if (isInCart) return true;
        return false;
    }

    const calculateTotal = (items) => {
        let totalPrice = 0;

        items.forEach((item) => {
            totalPrice += item.price * item.quantity;
        })

        setTotal(totalPrice);
    }

    const calculateQuantity = (items) => {
        let totalQuantity = 0;

        items.forEach((item) => {
            totalQuantity += item.quantity;
        })

        setQuantity(totalQuantity);
    }

    const providerValue = {
        cart,
        total,
        quantity,
        addItem,
        removeItem,
        clear
    }

    return (
        <Provider value={providerValue}>
            {children}
        </Provider>
    )
}

export default CartContext;