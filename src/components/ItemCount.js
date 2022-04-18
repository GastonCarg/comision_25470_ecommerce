import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CustomButton } from "./CustomButton";

const submitButtonStyle = {
    width: "60%",
    margin: "0.5em",
}

const ItemCount = ({ stock, initial, onAdd, addItemToCart }) => {
    const [quantity, setQuantity] = useState(initial);
    const [itShows, setItShows] = useState("");

    const addCounter = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    }

    const subtractCounter = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    }

    const addProducts = (quantity) => {
        onAdd(quantity);
        setItShows("none");
    }

    return (
        <Box className="counter-container">
            <Box display={itShows} className="counter-buttons-container">
                <Box className="counter-buttons">
                    <CustomButton variant="outlined" onClick={subtractCounter} disabled={(stock === 0) ? true : false}>-</CustomButton>
                    <Typography variant="subtitle1">{quantity}</Typography>
                    <CustomButton variant="outlined" onClick={addCounter} disabled={(stock === 0) ? true : false}>+</CustomButton>
                </Box>
                <CustomButton variant="outlined" onClick={() => addProducts(quantity)} disabled={(stock === 0 || quantity === 0) ? true : false} sx={submitButtonStyle}>Confirmar</CustomButton>
            </Box>
            { itShows === "none" &&
                <Box className="submit-buttons">
                    <Link className="checkout-purchase" to="/cart" onClick={addItemToCart}>Terminar la compra</Link>
                </Box>
            }
        </Box>
    )
}

export default ItemCount;