import { AppBar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import CartWidget from "./CartWidget";
import Form from "./Form";
import colors from "./Colors";

const NavBar = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    }

    const clickOpenModal = () => {
        setOpenModal(true);
    }

    return (
        <AppBar position="static" color="inherit">
            <Box className="main-header">
                <NavLink to="/" className="link">
                    <Typography variant="h5" component="div" className="brand-text">Tienda Deportiva</Typography>
                </NavLink>
                <Box className="header-links-container">
                    <NavLink to="/category/costume" className="link nav-link">Indumentaria</NavLink>
                    <NavLink to="/category/footwear" className="link nav-link">Calzado</NavLink>
                    <NavLink to="/category/accessory" className="link nav-link">Accesorios</NavLink>
                    <Button onClick={clickOpenModal}>
                        <AccountCircleOutlinedIcon style={{ color: colors.primary }} />
                    </Button>
                    <CartWidget />
                    <Form openModal={openModal} closeModal={closeModal}></Form>
                </Box>
            </Box>
        </AppBar>
    )
}

export default NavBar