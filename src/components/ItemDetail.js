import { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

import ItemCount from "./ItemCount";
import { cartContext } from "./CartContext";

const ItemDetail = ({ id, title, description, image, price, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const { addItem } = useContext(cartContext);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd);
    }

    const addItemToCart = () => {

        const item = {
            id,
            title,
            description,
            image,
            price
        }

        addItem(item, quantity);
        toast.success("Producto agregado al carrito de compras", { autoClose: 2000 });
    }

    return (
        <Box className="item-detail-container">
            <Box className="item-detail-image-container">
                <Box
                    component="img"
                    sx={{
                        height: 500,
                        width: 350,
                    }}
                    src={image}
                    className="item-detail-image"
                />
            </Box>
            <Box className="item-detail-info">
                <Typography variant="h5" className="item-detail-title">
                    {title}
                </Typography>
                <Typography variant="h5" className="item-detail-price">
                    $ {price}
                </Typography>
                <Typography variant="subtitle1" className="item-detail-description">
                    {description}
                </Typography>
                <ItemCount stock={stock} initial={stock > 0 ? 1 : 0} onAdd={onAdd} addItemToCart={addItemToCart} />
            </Box>
        </Box>
    )
}

export default ItemDetail