import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/material";

import colors from "./Colors";

const loadingStyle = {
    color: colors.primary,
}

const LoadingCustom = ({isCart}) => {
    return (
        <Box className="loader-container">
            {isCart && <Typography variant="h6">Se está procesando su compra...</Typography>}
            <CircularProgress sx={loadingStyle}/>
        </Box>
    )
}

export default LoadingCustom;