import Footer from "../components/Footer/Footer"
import {Navbar} from "../components/Navbar/Navbar"
import { ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme';
import { CssBaseline } from '@material-ui/core';
import Slider from "../components/Slider/Slider";
import { styled } from "@mui/system";
import Products from "../components/Products/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";



const Title = styled("h1")({
    margin: "20px"
})

const FilterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between"
})

const FilterText = styled("span")({
    fontSize: "17px",
    fontWeight: "600"
})

const Filter = styled("div")({
    margin: "20px"
})

export const ProductList = () => {
    
    const location= useLocation();
    const category= location.pathname.split("/")[2];
    const [filters, setFilters]= useState({});
    const [sort, setSort]= useState("newest");

    const handleChange= (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    const handleSortChange = (e) => {
        setSort(
            e.target.value
        )
    }

    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Title>
                {category}'s
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <select style={{padding:"5px 10px", margin:"5px 5px"}} name="color" onChange= {handleChange}>
                        <option disabled selected>Color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select style={{padding:"5px 10px", margin:"5px 5px"}} name="size" onChange={handleChange}>
                        <option disabled selected>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <select style={{padding:"5px 10px", margin:"0px 5px"}} onChange={handleSortChange}>
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price (asc.)</option>
                        <option value="price-dsc">Price (dsc.)</option>
                    </select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Footer />
        </ThemeProvider>
        </>
    )
}