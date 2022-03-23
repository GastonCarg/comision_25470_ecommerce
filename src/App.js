import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import CartContext from "./components/CartContext";

const App = () => {
    return (
        <CartContext>
            <BrowserRouter>
                <NavBar />
                <Main />
                <ToastContainer />
            </BrowserRouter>
        </CartContext>
    )
}

export default App;