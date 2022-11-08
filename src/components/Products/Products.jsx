import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import {Typography} from "@material-ui/core";
import { Image, ShoppingIconContainer, SearchIconContainer, ShoppingButton, SearchButton, DescriptionBox } from "./ProductComponents";
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

export default function Products({category, filters, sort}) {

    const [productList, setProductList]= useState([]);
    const [filteredProducts, setFilteredProducts]= useState([]);

    useEffect(() => {
        const getProducts= async () => {
            try{
                const res= await axios.get(category ? `https://tessst-dot.herokuapp.com/api/products?categories=${category}` : "https://tessst-dot.herokuapp.com/api/products")
                setProductList(res.data)
            } catch(err) {

            }
        }
        getProducts();
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(
            productList.filter(item => 
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [category, filters, productList])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev)=>
                [...prev].sort((a, b)=>a.createAt - b.createdAt)
            )
        }
        else if (sort === "price-asc") {
            setFilteredProducts((prev)=>
                [...prev].sort((a,b)=>a.price- b.price)
                )
        }
        else {
            setFilteredProducts((prev)=>
                [...prev].sort((a,b)=>b.price- a.price)
                )
        }
    }, [sort])

    const classes= useStyles();

    const theme= useTheme();
    const matches= useMediaQuery(theme.breakpoints.up('md'));

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

    
    const renderProducts= category ? filteredProducts.map((product) => (
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
                    <Link to={`/product/${product._id}`}>
                        <ShoppingIconContainer onMouseEnter= {handleShoppingMouseEnter} onMouseLeave= {handleShoppingMouseLeave} enter={showShoppingOptions}>
                            <ShoppingButton enter={showShoppingOptions} isAdded={1} />
                        </ShoppingIconContainer>
                    </Link>
                    {/* <FavIconContainer onMouseEnter= {handleFavMouseEnter} onMouseLeave= {handleFavMouseLeave} enter={showFavOptions}>
                        <FavButton enter={showFavOptions} isFav= {1} />
                    </FavIconContainer> */}
                    <Link to={`/product/${product._id}`}>
                        <SearchIconContainer onMouseEnter= {handleShareMouseEnter} onMouseLeave= {handleShareMouseLeave} enter={showShareOptions}>
                            <SearchButton enter={showShareOptions} />
                        </SearchIconContainer>
                    </Link>
                </IconLayer>
                </Box>
                <DescriptionBox>
                    <p style={{fontSize: "14px", fontWeight: 700, margin: "5px 0px"}}>
                        {product.title}
                    </p>
                    <Typography variant="p">
                        Rs {product.price}
                    </Typography>
                </DescriptionBox>
            </Box>
         </Grid> 
    ))
    : productList.map((product) => (
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
                    <Link to={`/product/${product._id}`}>
                        <ShoppingIconContainer onMouseEnter= {handleShoppingMouseEnter} onMouseLeave= {handleShoppingMouseLeave} enter={showShoppingOptions}>
                            <ShoppingButton enter={showShoppingOptions} isAdded={1} />
                        </ShoppingIconContainer>
                    </Link>
                        {/* <FavIconContainer onMouseEnter= {handleFavMouseEnter} onMouseLeave= {handleFavMouseLeave} enter={showFavOptions}>
                            <FavButton enter={showFavOptions} isFav= {1} />
                        </FavIconContainer> */}
                        <Link to={`/product/${product._id}`}>
                            <SearchIconContainer onMouseEnter= {handleShareMouseEnter} onMouseLeave= {handleShareMouseLeave} enter={showShareOptions}>
                                <SearchButton enter={showShareOptions} />
                            </SearchIconContainer>
                        </Link>
                    </IconLayer>
                </Box>
                <DescriptionBox>
                    <p style={{fontSize: "14px", fontWeight: 700, margin: "5px 0px"}}>
                        {product.title}
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

