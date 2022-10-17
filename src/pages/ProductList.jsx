import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme';
import { CssBaseline } from '@material-ui/core';
import Slider from "../components/Slider/Slider";
import { styled } from "@mui/system";
import Products from "../components/Products/Products";



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
    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Title>
                Dresses
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <select style={{padding:"5px 10px", margin:"0px 5px"}}>
                        <option disabled selected>Color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select style={{padding:"5px 10px"}}>
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
                    <select style={{padding:"5px 10px", margin:"0px 5px"}}>
                        <option disabled selected></option>
                        <option>Newest</option>
                        <option>Price (asc.)</option>
                        <option>Price (dsc.)</option>
                        <option>Highest Selling</option>
                    </select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </ThemeProvider>
        </>
    )
}