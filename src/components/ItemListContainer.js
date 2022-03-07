import { Box } from "@mui/material";

import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const onAdd = (counter) => {console.log('Add products ' + counter)}
    return (
        <Box className="item-list-container">
            <ItemCount stock={6} initial={1} onAdd={onAdd} />
        </Box>
    )
}

export default ItemListContainer