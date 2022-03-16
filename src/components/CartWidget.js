import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/" className="link">
        <ShoppingCartOutlined style={{ color:"#659c4b" }}/>
    </Link>
  )
}

export default CartWidget