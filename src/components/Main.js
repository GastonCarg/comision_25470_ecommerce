import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom';

import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Main = () => {
    return (
        <Box component="main">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </Box>
    )
}

export default Main;