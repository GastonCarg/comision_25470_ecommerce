import { useState } from "react";
import { Box, Button, FormLabel } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const addCounter = () => {
        if (counter < stock) setCounter(counter + 1);
    }

    const subtractCounter = () => {
        if (counter > 0) setCounter(counter - 1);
    }

    const addProducts = (counter) => {
        onAdd(counter);
    }

    return (
        <Box className="counter-container">
            <FormLabel className="item-counter-text">Zapatillas Adidas talle 40</FormLabel>
            <Box className="counter-buttons">
                <Button variant="outlined" onClick={subtractCounter}>-</Button>
                <FormLabel>{counter}</FormLabel>
                <Button variant="outlined" onClick={addCounter}>+</Button>
            </Box>
            <Button className="add-product-button color-button" variant="outlined" onClick={()=>addProducts(counter)} disabled={(stock === 0 || counter === 0) ? true : false}>Agregar Productos</Button>
        </Box>
    )
}

export default ItemCount;