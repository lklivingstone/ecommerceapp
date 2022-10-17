import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { Button, ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme'
import { CssBaseline } from '@material-ui/core';
import { styled } from "@mui/system";
import { products } from "../data/data";
import { Add, Remove } from "@material-ui/icons";

const Wrapper = styled("div")({
    display: "flex",
    padding: "50px"
})

const ImageContainer = styled("div")({
    flex: "1",
    padding: "10px"
})

const InfoContainer = styled("div")({
    flex: "1",
    padding: "10px"
})

const Image = styled("img")({
    height: "80vh",
    objectFit: "cover"
})

const Title = styled("h1")({
    fontWeight: "100",
})

const Description = styled("p")({
    margin: "30px 0px"
})

const Price = styled("span")({
    fontWeight: "10",
    fontSize: "30px"
})

const FilterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
})

const Filter = styled("div")({
    display: "flex",
    alignItems: "center"
})

const FilterHeading = styled("span")({
    fontSize: "15px",
    fontWeight: "100"
})

const FilterColor = styled("div")((props) => ({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: props.color,
    margin: "0px 5px"
}))

const AddToContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",

    width: "100%"
})

const TotalItemsContainer = styled("div")({
    display: "flex",
    alignItems: "center"
})

const TotalItem = styled("p")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    height: "30px",
    width: "30px",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "15px",
})

const AddToCartButton = styled(Button)({
    padding: "5px 15px",
    border: "2px solid #000512",
    cursor: "pointer"
})

const Slide = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: props.bg,
}))



const product= products[0];

export const SingleProduct = () => {
    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product.name}
                    </Title>
                    <Description>
                        {product.description}
                    </Description>
                    <Price>
                        Rs. {product.price}
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterHeading>Color: </FilterHeading>
                            <FilterColor color="black" />
                            <FilterColor color="grey" />
                            <FilterColor color="blue" />
                            <FilterColor color="red" />
                        </Filter>
                        <Filter>
                            <FilterHeading>Size</FilterHeading>
                            <select style={{margin:"10px", padding:"5px 10px"}}>
                                <option disabled selected>Size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </Filter>
                    </FilterContainer>
                    <AddToContainer>
                        <TotalItemsContainer>
                            <Remove style={{cursor: "pointer"}}/>
                            <TotalItem>1</TotalItem>
                            <Add style={{cursor: "pointer"}}/>
                        </TotalItemsContainer>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <AddToCartButton variant="outlined" >Add to Cart</AddToCartButton>
                        </div>
                    </AddToContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </ThemeProvider>
        </>
    )
}