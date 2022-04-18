import {Box, Typography, IconButton} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import colors from "./Colors";

const CartItems = ({id, title, price, quantity, image, deleteItem}) => {
    return (
        <Box key={id} className="item-cart-container">
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 200
                }}
                src={image}
                className="item-cart-image"
            />
            <Box className="info-cart-container">
                <Box className="product-info-container">
                    <Link to={`/item/${id}`} className="link-to-product">
                        <Typography variant="h5" className="item-title-info">{title}</Typography>
                    </Link>
                    <Typography variant="subtitle1">Precio unitario: $ {price}</Typography>
                    <Typography variant="subtitle2">Cantidad: {quantity}</Typography>
                </Box>
                <Box className="delete-product-container">
                    <IconButton aria-label="delete" onClick={() => deleteItem(id)}>
                        <DeleteOutlinedIcon style={{ color: colors.primary }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default CartItems;