import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Paper, useMediaQuery } from "@material-ui/core";
import { products } from "../../data/data";
import { Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import {Typography} from "@material-ui/core";
import { Image, ShoppingIconContainer, FavIconContainer, ShareIconContainer, ShoppingButton, ShareButton, DescriptionBox } from "./ProductComponents";
import { FavButton } from "./ProductComponents";
import { IconLayer } from "./ProductComponents";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
        // position: 'relative',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        // width:"100%",
        // height:"100%",
        padding: theme.spacing(2),
        textAlign: 'center',
        // background: Colors.light_gray,

    }
}));




export default function Products() {
    const classes= useStyles();

    const theme= useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));

    // Shopping Button Hover -->

    const [showShoppingOptions, setShowShoppingOptions] = useState(false);

    const handleShoppingMouseEnter= () => {
        setShowShoppingOptions(true);
    }

    const handleShoppingMouseLeave = () => {
        setShowShoppingOptions(false);
    }

    // <-- Shopping Button Hover ends here


    // Favorite Button Hover -->

    const [showFavOptions, setShowFavOptions] = useState(false);

    const handleFavMouseEnter= () => {
        setShowFavOptions(true);
    }

    const handleFavMouseLeave = () => {
        setShowFavOptions(false);
    }

    // <-- Favorite Button Hover ends here


    // Share Button Hover -->

    const [showShareOptions, setShowShareOptions] = useState(false);

    const handleShareMouseEnter= () => {
        setShowShareOptions(true);
    }

    const handleShareMouseLeave = () => {
        setShowShareOptions(false);
    }

    // <-- Share Hover ends here

    const renderProducts= products.map((product) => (
        <Grid item
        key={product.id}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        xs={12}
        sm={6}
        md={4}>
            <Box position="relative" display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"}>
                <Box padding="5px 5px">
                    <Image src={product.img} />
                    <IconLayer>
                        <ShoppingIconContainer onMouseEnter= {handleShoppingMouseEnter} onMouseLeave= {handleShoppingMouseLeave} enter={showShoppingOptions}>
                            <ShoppingButton enter={showShoppingOptions} isAdded={1} />
                        </ShoppingIconContainer>
                        <FavIconContainer onMouseEnter= {handleFavMouseEnter} onMouseLeave= {handleFavMouseLeave} enter={showFavOptions}>
                            <FavButton enter={showFavOptions} isFav= {1} />
                        </FavIconContainer>
                        <ShareIconContainer onMouseEnter= {handleShareMouseEnter} onMouseLeave= {handleShareMouseLeave} enter={showShareOptions}>
                            <ShareButton enter={showShareOptions} />
                        </ShareIconContainer>
                    </IconLayer>
                </Box>
                <DescriptionBox>
                    <p style={{fontSize: "14px", fontWeight: 700, margin: "5px 0px"}}>
                        {product.name}
                    </p>
                    <Typography variant="p">
                        Rs {product.price}
                    </Typography>
                </DescriptionBox>
            </Box>
         </Grid>
    ));

    return (
        <Container style={{margin: "20px auto"}} display="flex"
        alignItems="center"
        justifyContent={"center"}>
            <Grid container rowSpacing={3} columnSpacing={{xs: 2, sm: 4, md: 8}} className= {classes.grid}>
                {renderProducts}
            </Grid>
        </Container>
    );
}

