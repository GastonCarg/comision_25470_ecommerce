import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header id='main-header'>
            <h1>Tienda de deportes</h1>
            <nav>
                <a href='#'>Indumentaria</a>
                <a href='#'>Calzado</a>
                <a href='#'>Accesorios</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar