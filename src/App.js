import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <main id="main-body">
                <ItemListContainer />
            </main>
        </>
    )
}

export default App;