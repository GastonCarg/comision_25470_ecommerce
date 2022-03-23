import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const itemId = useParams();

    const items = [
        {
            id: 1,
            title: "Zapatillas Adidas Talle 40",
            stock: 10,
            price: 15000,
            description: "Zapatillas marca Adidas de hombre talle 40",
            pictureURL: "https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/g/2/g28971_ftw_photo_front-lateral-top_white.jpg",
            category: 2
        },
        {
            id: 2,
            title: "Camiseta Instituto ACC",
            stock: 7,
            price: 8200,
            description: "Camiseta de fútbol de Instituto Atlético Central Córdoba",
            pictureURL: "https://http2.mlstatic.com/D_NQ_NP_731887-MLA31041981982_062019-O.jpg",
            category: 1
        },
        {
            id: 3,
            title: "Camiseta deportiva Nike",
            stock: 4,
            price: 6500,
            description: "Camiseta deportiva marca Nike",
            pictureURL: "https://www.thefutbolstore.com.ar/uploads/v2/product/thumb/725891_657_A.jpg",
            category: 1
        },
        {
            id: 4,
            title: "Zapatillas Hombre Urbana Deportiva",
            stock: 4,
            price: 3690,
            description: "Zapatilla deportiva de hombre art 18: De deporte, informales con un estilo urbano especial para estar vestido a la moda, muy cómodas, antideslizantes y livianas",
            pictureURL: "https://http2.mlstatic.com/D_NQ_NP_914528-MLA49083858774_022022-O.webp",
            category: 2
        }
    ];

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                const item = items.find(elem => elem.id === +itemId.id);
                res(item);
            }, 2000)
        });

        getItem
            .then((res) => {
                setDetail(res);
            })
            .catch((err) => {
                toast.error('No se ha podido cargar el detalle');
            })
            .finally(() => {
                setLoading(false);
            })

    }, [itemId])

    return (
        <>
            {loading ?
                <Box className="loader-container">
                    <CircularProgress />
                </Box>
                :
                <ItemDetail id={detail.id} title={detail.title} description={detail.description} image={detail.pictureURL} price={detail.price} stock={detail.stock} />
            }
        </>
    )
}

export default ItemDetailContainer;