import { createContext, useState } from "react";
import { useNotification } from '../notification/notification'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { setNotification } = useNotification();
    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        if (quantity > 0) {
            if (productInCart(product.id)) {
                increaseQuantityId(product.id, quantity);
            } else {
                setCart([...cart, objItemCart])
            }
        }

    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    const productInCart = (id) => {
        var exists = false;
        cart.forEach(prod => {
            if (prod.id === id) {
                exists = true;
            }
        });
        return exists
    }

    const increaseQuantityId = (id, qty) => {
        setCart((preValue) =>
            preValue.map((data) => {
                if (data.id === id) {
                    if (data.quantity < data.stock) {
                        return {
                            ...data,
                            quantity: data.quantity + qty
                        };
                    } else {
                        setNotification('error', 'Supera el stock disponible...');
                    }                    
                }
                return data;
            })
        );
    }

    const increaseQuantity = (i) => {
        setCart((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    if (data.quantity < data.stock) {
                        return {
                            ...data,
                            quantity: data.quantity + 1
                        };
                    } else {
                        setNotification('error', 'Supera el stock disponible...');
                    }
                }
                return data;
            })
        );
    };

    const decreaseQuantity = (i) => {
        setCart((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    if (data.quantity > 1) {
                        return { ...data, quantity: data.quantity - 1 };
                    } else {
                        return data;
                    }
                }
                return data;
            })
        );
    };

    const removeProduct = (i) => {
        if (window.confirm("borrar del carrito?")) {
            setCart(prevCart =>
                prevCart.filter((item, o) => {
                    return i !== o;
                })
            );

        }
    };

    const getCartTotal = cart.reduce((acc, data) => acc + data.price * data.quantity, 0);

    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity,
            getCartTotal,
            increaseQuantity,
            decreaseQuantity,
            removeProduct
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context