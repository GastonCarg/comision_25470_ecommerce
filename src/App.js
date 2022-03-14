import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Box } from "@mui/material";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <Box component="main">
                <ItemListContainer />
                <ItemDetailContainer />
                <ToastContainer />
            </Box>
        </>
    )
}

export default App;