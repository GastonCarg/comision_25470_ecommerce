import { Box, Typography } from "@mui/material"

const Item = ({ title, price, description, image }) => {
    return (
        <a className="item-container">
            <Box className="item-content">
                <Typography variant="h6" className="item-title">{title}</Typography>
                <Box
                    component="img"
                    sx={{
                        height: 250,
                        width: 200,
                    }}
                    src={image}
                />
                <Typography variant="h6" className="item-price">$ {price}</Typography>
                <Typography className="item-description">{description}</Typography>
            </Box>
        </a>
    )
}

export default Item