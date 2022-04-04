import { Box, IconButton, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab"
import { useContext, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";

import { cartContext } from "./CartContext";

const primaryColor = "#659c4b";
const secondaryColor = "#1b1b1b";
const SubmitButton = styled(LoadingButton)({
    color: primaryColor,
    borderColor: primaryColor,
    '&:hover': {
        borderColor: secondaryColor,
        color: secondaryColor
    }
});

const Cart = () => {
    const [buttonLoading, setButtonLoading ] = useState(false);
    const { removeItem, cart, quantity, total, clear } = useContext(cartContext);
    const navigate = useNavigate();

    const deleteItem = (id) => {
        removeItem(id);
    }

    const checkout = () => {
        setButtonLoading(true);

        const data = {
            buyer: {
                name: "Gaston Cargnelutti",
                phone: "3515123158",
                email: "gaston@example.com"
            },
            items: cart,
            date: serverTimestamp(),
            total: total
        }

        const salesCollection = collection(db, "sales");
        const salesRequest = addDoc(salesCollection, data);

        salesRequest
            .then((resp) => {
                clear(true);
                navigate("/");
                toast.success("La compra fue realizada correctamente! El ID de la compra es: " + resp.id);
            })
            .catch((err) => {
                toast.error("Oops! Ha ocurrido un error");
            })
            .finally(()=>{
                setButtonLoading(false);
            })
    }

    return (
        <Box className="cart-container">
            {
                cart.map(item => {
                    return (
                        <Box key={item.id} className="item-cart-container">
                            <Box
                                component="img"
                                sx={{
                                    height: 250,
                                    width: 200
                                }}
                                src={item.image}
                                className="item-cart-image"
                            />
                            <Box className="info-cart-container">
                                <Box className="product-info-container">
                                    <Link to={`/item/${item.id}`} className="link-to-product">
                                        <Typography variant="h5" className="item-title-info">{item.title}</Typography>
                                    </Link>
                                    <Typography variant="subtitle1">Precio unitario: $ {item.price}</Typography>
                                    <Typography variant="subtitle2">Cantidad: {item.quantity}</Typography>
                                </Box>
                                <Box className="delete-product-container">
                                    <IconButton aria-label="delete" onClick={() => deleteItem(item.id)}>
                                        <DeleteOutlinedIcon style={{ color: "#659c4b" }} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
            {
                cart.length > 0 ?
                    <Box className={cart.length > 0 ? "total-info" : "total-info-no-display"}>
                        <Button onClick={clear} startIcon={<DeleteOutlinedIcon style={{ color: "#659c4b" }} />}>
                            <Typography className="delete-all">Eliminar todos</Typography>
                        </Button>
                        <Typography variant="h6" className="total-quantity-text">Total: $ {total}</Typography>
                        <Typography variant="h6" className="total-quantity-text">Cantidad de productos: {quantity}</Typography>
                        <SubmitButton onClick={checkout} loading={buttonLoading} variant="outlined">
                            <Typography>Confirmar compra</Typography>
                        </SubmitButton>
                    </Box>
                    :
                    <Box className="no-products-in-cart">
                        <Typography variant="h6">No hay productos en su carrito de compras</Typography>
                        <Link to="/" className="link">Volver al inicio</Link>
                    </Box>
            }
        </Box>
    )
}

export default Cart;