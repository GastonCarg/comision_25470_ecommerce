import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <main id="main-body">
                <ItemListContainer greeting='Bienvenido a la tienda de deportes!' />
            </main>
        </>
    )
}

export default App;