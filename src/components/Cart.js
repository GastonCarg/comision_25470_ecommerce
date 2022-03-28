import { Box, IconButton, Typography, Button } from "@mui/material";
import { useContext } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

import { cartContext } from "./CartContext";

const Cart = () => {

    const { removeItem, cart, quantity, total, clear } = useContext(cartContext);

    const deleteItem = (id) => {
        removeItem(id);
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
                        <Typography variant="h6" className="">Total: $ {total}</Typography>
                        <Typography variant="h6">Cantidad de productos: {quantity}</Typography>
                        <Button onClick={clear} startIcon={<DeleteOutlinedIcon style={{ color: "#659c4b" }} />}>
                            <Typography className="delete-all">Eliminar todos</Typography>
                        </Button>
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