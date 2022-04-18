import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import colors from "./Colors";

const sharedProps = {
    color: colors.primary,
    borderColor: colors.primary,
    "&:hover": {
        borderColor: colors.secondary,
        color: colors.secondary
    }
}

export const CustomButton = styled(Button)(
    sharedProps
);