import { AppBar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <AppBar position="static" color="inherit">
            <Box className="main-header">
                <Link to="/" className="link">
                    <Typography variant="h5" component="div" className="brand-text">Tienda Deportiva</Typography>
                </Link>
                <Box className="header-links-container">
                    <Link to="/category/costume" className="link">Indumentaria</Link>
                    <Link to="/category/footwear" className="link">Calzado</Link>
                    <Link to="/category/accessory" className="link">Accesorios</Link>
                    <CartWidget />
                </Box>
            </Box>
        </AppBar>
    )
}

export default NavBar