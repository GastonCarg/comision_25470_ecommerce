import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "./Firebase";
import { getDoc, collection, doc } from "firebase/firestore";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const itemId = useParams();

    useEffect(() => {
        setLoading(true);

        const productsCollection = collection(db, 'products');
        const productRequest = getDoc(doc(productsCollection, itemId.id));

        productRequest
            .then((resp) => {
                const productDetail = resp.data();
                productDetail.id = resp.id;
                setDetail(productDetail);
            })
            .catch((err) => {
                toast.error('No se ha podido cargar el producto');
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