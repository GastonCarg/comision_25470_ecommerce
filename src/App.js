import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Main />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App;