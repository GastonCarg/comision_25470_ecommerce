import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./CartContext"

const CartWidget = () => {
    const { cart } = useContext(cartContext);

    return (
        <Link to="/cart" className={cart.length > 0 ? "link" : "no-show-link"}>
            <ShoppingCartOutlined style={{ color: "#659c4b" }} />
        </Link>
    )
}

export default CartWidget