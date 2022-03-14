import { Box } from "@mui/material"
import { Typography } from '@mui/material';

const ItemDetail = ({ title, description, image, price }) => {
    return (
        <Box className="item-detail-container">
            <Box className="item-detail-image-container">
                <Box
                    component="img"
                    sx={{
                        height: 500,
                        width: 350,
                    }}
                    src={image}
                    className="item-detail-image"
                />
            </Box>
            <Box className="item-detail-info">
                <Typography variant="h5" className="item-detail-title">
                    {title}
                </Typography>
                <Typography variant="h5" className="item-detail-price">
                    $ {price}
                </Typography>
                <Typography variant="subtitle1" className="item-detail-description">
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}

export default ItemDetail