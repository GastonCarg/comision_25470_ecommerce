import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import CartContext from "./components/CartContext";
import { ProfileProvider } from "./components/ProfileProvider";

const App = () => {
    return (
        <CartContext>
            <ProfileProvider>
                <BrowserRouter>
                    <NavBar />
                    <Main />
                    <ToastContainer />
                </BrowserRouter>
            </ProfileProvider>
        </CartContext>
    )
}

export default App;