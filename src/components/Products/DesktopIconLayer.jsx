import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Paper, useMediaQuery } from "@material-ui/core";
import { products } from "../../data/data";
import { Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import {Typography} from "@material-ui/core";
import { Image, ShoppingIconContainer, FavIconContainer, SearchIconContainer, ShoppingButton, SearchButton, DescriptionBox } from "./ProductComponents";
import { FavButton } from "./ProductComponents";
import { IconLayer } from "./ProductComponents";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

export default function DesktopIconLayer({product}) {

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

    return (
        <IconLayer>
            <ShoppingIconContainer onMouseEnter= {handleShoppingMouseEnter} onMouseLeave= {handleShoppingMouseLeave} enter={showShoppingOptions}>
                <ShoppingButton enter={showShoppingOptions} isAdded={1} />
            </ShoppingIconContainer>
            {/* <FavIconContainer onMouseEnter= {handleFavMouseEnter} onMouseLeave= {handleFavMouseLeave} enter={showFavOptions}>
                <FavButton enter={showFavOptions} isFav= {1} />
            </FavIconContainer> */}
            <Link to={`/product/${product._id}`}>
                <SearchIconContainer onMouseEnter= {handleShareMouseEnter} onMouseLeave= {handleShareMouseLeave} enter={showShareOptions}>
                    <SearchButton enter={showShareOptions} />
                </SearchIconContainer>
            </Link>
        </IconLayer>
    );
}

