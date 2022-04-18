import { Box, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { toast } from "react-toastify";

import { cartContext } from "./CartContext";
import { profileContext } from "./ProfileProvider";
import { CustomButton } from "./CustomButton";
import CartItems from "./CartItems";
import colors from "./Colors";
import LoadingCustom from "./LoadingCustom";

const Cart = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const { removeItem, cart, quantity, total, clear } = useContext(cartContext);
    const { profile } = useContext(profileContext);
    const navigate = useNavigate();

    const deleteItem = (id) => {
        removeItem(id);
    }

    const deleteAllItems = () => {
        clear();
    }

    const checkout = () => {
        setButtonLoading(true);

        if (typeof profile.name === "undefined" || typeof profile.email === "undefined" || typeof profile.phone === "undefined") {
            toast.error("Debes cargar los datos de tu perfil para poder comprar (El icono a la izquierda del carrito de compras)", { autoClose: 4000 });
            setButtonLoading(false);
            return;
        }

        const data = {
            buyer: {
                name: profile.name,
                phone: profile.phone,
                email: profile.email
            },
            items: cart,
            date: serverTimestamp(),
            total: total
        }

        const salesCollection = collection(db, "sales");
        const saleRequest = addDoc(salesCollection, data);

        saleRequest
            .then((resp) => {
                clear(true);
                toast.success("La compra fue realizada correctamente! El ID de la compra es: " + resp.id);
                navigate("/");
            })
            .catch((err) => {
                toast.error("Oops! Ha ocurrido un error");
            })
            .finally(() => {
                setButtonLoading(false);
            })
    }

    return (
        <>
            {
                buttonLoading ?
                    <LoadingCustom isCart={true} />
                    :
                    <Box className="cart-container">
                        {
                            cart.map(item => { return (<CartItems key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity} image={item.image} deleteItem={deleteItem} />) })
                        }
                        {
                            cart.length > 0 ?
                                <Box className={cart.length > 0 ? "total-info" : "total-info-no-display"}>
                                    <Button onClick={deleteAllItems} startIcon={<DeleteOutlinedIcon style={{ color: colors.primary }} />}>
                                        <Typography className="delete-all">Eliminar todos</Typography>
                                    </Button>
                                    <Typography variant="h6" className="total-quantity-text">Total: $ {total}</Typography>
                                    <Typography variant="h6" className="total-quantity-text">Cantidad de productos: {quantity}</Typography>
                                    <CustomButton onClick={checkout} variant="outlined">
                                        <Typography>Confirmar compra</Typography>
                                    </CustomButton>
                                </Box>
                                :
                                <Box className="no-products-in-cart">
                                    <Typography variant="h6">No hay productos en su carrito de compras</Typography>
                                    <Link to="/" className="link">Volver al inicio</Link>
                                </Box>
                        }
                    </Box>
            }
        </>
    )
}

export default Cart;
