import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const SubmitButton = styled(Button)({
    color: "#659c4b",
    margin: "0.5em",
    borderColor: "#659c4b",
    '&:hover': {
        borderColor: "#1b1b1b",
        color: "#1b1b1b"
    },
    width: "60%"
});

const CounterButton = styled(Button)({
    color: "#659c4b",
    borderColor: "#659c4b",
    '&:hover': {
        borderColor: "#1b1b1b",
        color: "#1b1b1b"
    },
});

const ItemCount = ({ stock, initial, onAdd, addItemToCart }) => {
    const [quantity, setCounter] = useState(initial);
    const [itShows, setItShows] = useState("");

    const addCounter = () => {
        if (quantity < stock) setCounter(quantity + 1);
    }

    const subtractCounter = () => {
        if (quantity > 0) setCounter(quantity - 1);
    }

    const addProducts = (quantity) => {
        onAdd(quantity);
        setItShows("none");
    }

    return (
        <Box className="counter-container">
            <Box display={itShows} className="counter-buttons-container">
                <Box className="counter-buttons">
                    <CounterButton variant="outlined" onClick={subtractCounter} disabled={(stock === 0) ? true : false}>-</CounterButton>
                    <Typography variant="subtitle1">{quantity}</Typography>
                    <CounterButton variant="outlined" onClick={addCounter} disabled={(stock === 0) ? true : false}>+</CounterButton>
                </Box>
                <SubmitButton variant="outlined" onClick={() => addProducts(quantity)} disabled={(stock === 0 || quantity === 0) ? true : false}>Confirmar</SubmitButton>
            </Box>
            <Box className="submit-buttons">
                <Link className={itShows === "none" ? "checkout-purchase" : "disable-link"} to="/cart" onClick={addItemToCart}>Terminar la compra</Link>
            </Box>
        </Box>
    )
}

export default ItemCount;