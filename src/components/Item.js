import { Box } from "@mui/material"

const Item = ({ title, price, description, image }) => {
    return (
        <a className="item-container" onClick={() => console.log(title)}>
            <Box className="item-content">
                <h2 className="item-title">{title}</h2>
                <Box
                    component="img"
                    sx={{
                        height: 250,
                        width: 200,
                    }}
                    src={image}
                />
                <h3 className="item-price">$ {price}</h3>
                <p className="item-description">{description}</p>
            </Box>
        </a>
    )
}

export default Item