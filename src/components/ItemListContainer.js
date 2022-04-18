import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

import ItemList from "./ItemList";
import LoadingCustom from "./LoadingCustom";

const ItemListContainer = () => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const category = useParams();

    useEffect(() => {
        setLoading(true);

        const productsCollection = collection(db, "products");
        let productsRequest = null;
        if (typeof (category.id) === "undefined") productsRequest = getDocs(productsCollection);
        else {
            const filter = query(productsCollection, where("category", "==", category.id));
            productsRequest = getDocs(filter);
        }

        productsRequest
            .then((resp) => {
                const products = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });

                setProducts(products);
            })
            .catch((err) => {
                toast.error("No se han podido cargar los productos");
            })
            .finally(() => {
                setLoading(false);
            })

    }, [category.id])

    return (
        <Box className="item-list-container">
            {loading ?
                <LoadingCustom />
                :
                products.length > 0 ?
                    <ItemList items={products} />
                    :
                    <Box className="loader-container">No hay items disponibles</Box>
            }
        </Box>
    )
}

export default ItemListContainer