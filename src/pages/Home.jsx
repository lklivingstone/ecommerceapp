import React from 'react';
import {Navbar} from '../components/Navbar/Navbar';
import { Box, Divider, Paper, ThemeProvider, Typography } from '@material-ui/core'; 
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';
import theme, { Colors } from '../styles/theme/theme'
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';
import { styled } from "@mui/system";
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import AppDrawer from '../components/AppDrawer/AppDrawer';


const emptySpace = styled(Typography)({
    variant: "h1",
    color: Colors.white,
    background: Colors.black,
})

const Home = () => {
    
    //Title of the page. Runs only once.
    useEffect(() => {
        document.title= "Home | e-tesst.";
    }, []);

    


    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Slider />
            <Categories />
            <div style={{width:"100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h3">our products.</Typography>
            </div>
            <Divider />
            <Products />
            <Footer />
        </ThemeProvider>
        </>
    )
}

export default Home;