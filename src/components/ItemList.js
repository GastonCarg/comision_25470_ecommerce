import { Box } from "@mui/material";

import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <Box className="container-item-list">
            {
                items.map((item, index) => {
                    return <Item id={item.id} title={item.title} price={item.price} description={item.description} image={item.pictureURL} category={item.category} />
                })
            }
        </Box>
    )
}

export default ItemList;