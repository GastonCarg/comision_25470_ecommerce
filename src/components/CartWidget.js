import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { cartContext } from "./CartContext"
import { Typography } from "@mui/material";
import colors from "./Colors";

const CartWidget = () => {
    const { cart, quantity } = useContext(cartContext);

    return (
        <Link to="/cart" className={cart.length > 0 ? "cart-widget-content" : "no-show-link"}>
            <ShoppingCartOutlined style={{ color: colors.primary }} />
            <Typography variant="subtitle2" className="cart-widget-quantity">{quantity}</Typography>
        </Link>
    )
}

export default CartWidget