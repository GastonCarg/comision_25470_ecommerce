import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const items = [
        {
            id: 1,
            title: "Zapatillas Adidas Talle 40",
            stock: 10,
            price: 15000,
            description: "Zapatillas marca Adidas de hombre talle 40",
            pictureURL: "https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/g/2/g28971_ftw_photo_front-lateral-top_white.jpg"
        },
        {
            id: 2,
            title: "Camiseta Instituto ACC",
            stock: 7,
            price: 8200,
            description: "Camiseta de fútbol de Instituto Atlético Central Córdoba",
            pictureURL: "https://http2.mlstatic.com/D_NQ_NP_731887-MLA31041981982_062019-O.jpg"
        },
        {
            id: 3,
            title: "Camiseta deportiva Nike",
            stock: 4,
            price: 6500,
            description: "Camiseta deportiva marca Nike",
            pictureURL: "https://www.thefutbolstore.com.ar/uploads/v2/product/thumb/725891_657_A.jpg"
        },
        {
            id: 4,
            title: "Zapatillas Hombre Urbana Deportiva",
            stock: 4,
            price: 3690,
            description: "Zapatilla deportiva de hombre art 18: De deporte, informales con un estilo urbano especial para estar vestido a la moda, muy cómodas, antideslizantes y livianas",
            pictureURL: "https://http2.mlstatic.com/D_NQ_NP_914528-MLA49083858774_022022-O.webp"
        }
    ];

    useEffect(() => {
        const mockRequest = new Promise((res, rej) => {
            setTimeout(() => {
                res(items);
            }, 2000);
        })

        mockRequest
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                toast.error('No se han podido cargar los productos');
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <Box className="item-list-container">
            {loading ?
                <Box className="loader-container">
                    <CircularProgress />
                </Box>
                :
                <ItemList items={products} />
            }
        </Box>
    )
}

export default ItemListContainer