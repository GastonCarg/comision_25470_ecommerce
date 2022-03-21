import { useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import ItemCount from "./ItemCount";

const ItemDetail = ({ title, description, image, price, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantityToAdd) =>{
        setQuantity(quantityToAdd);
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
                <ItemCount stock={stock} initial={stock > 0 ? 1 : 0} onAdd={onAdd} />
            </Box>
        </Box>
    )
}

export default ItemDetail