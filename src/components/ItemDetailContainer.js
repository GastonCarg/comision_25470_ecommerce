import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const itemDetail = {
        id: 2,
        title: "Camiseta Instituto ACC",
        stock: 7,
        price: 8200,
        description: "Camiseta de fútbol de Instituto Atlético Central Córdoba",
        pictureURL: "https://http2.mlstatic.com/D_NQ_NP_731887-MLA31041981982_062019-O.jpg"
    }

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(itemDetail);
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

    }, [])

    return (
        <>
            {loading ?
                <Box className="loader-container">
                    <CircularProgress />
                </Box>
                :
                <ItemDetail title={detail.title} description={detail.description} image={detail.pictureURL} price={detail.price} />
            }
        </>
    )
}

export default ItemDetailContainer;