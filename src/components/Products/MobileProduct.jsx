import { Typography } from "@material-ui/core";
import { Image } from "./ProductComponents";
import { styled } from "@mui/system";
import { Box } from "@material-ui/core";
import { Colors } from "../../styles/theme/theme";

const productContainer = styled("div")(({theme}) => ({
    height: "50px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: Colors.danger,
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        position: "relative"
    },
}));
export  const productWrapper= styled("div")(({theme}) => ({
    padding: 4,
    background: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.danger,
}));
export default function MobileProduct({product}) {

    return (

        <productContainer>
            <productWrapper>
                <Typography variant="h6" lineHeight={2}>
                    {product.name}
                </Typography>
                <Typography variant="caption">
                    Rs {product.price}
                </Typography>
            </productWrapper>
        </productContainer>
    )
}