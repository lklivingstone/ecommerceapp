import Footer from "../components/Footer/Footer"
import {Navbar} from "../components/Navbar/Navbar"
import { Button, ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme'
import { CssBaseline } from '@material-ui/core';
import { styled } from "@mui/system";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/shoppingCartRedux";
import { useDispatch } from "react-redux"

const Wrapper = styled("div")({
    display: "flex",
    padding: "50px",
    [theme.breakpoints.down("md")] : {
        flexDirection: "column"
    },
})

// export const Image = styled("img")(({ theme }) => ({
//     height: "400px",
//     objectFit: "cover",
//     // padding: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     [theme.breakpoints.down("md")] : {
//         width: "100%",
//     }
// }));

const ImageContainer = styled("div")({
    flex: "1",
    padding: "10px",
    justifyContent: "center",
    display: "flex"
})

const InfoContainer = styled("div")({
    flex: "1",
    padding: "10px"
})

const Image = styled("img")(({ theme }) => ({
    
    [theme.breakpoints.up("md")] : {
        height: "80vh",
    },
    [theme.breakpoints.down("md")] : {
        width: "80vw",
    },
    objectFit: "cover"
}))

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



// const product= products[0];

export const SingleProduct = () => {
    
    const location= useLocation();
    const id= location.pathname.split("/")[2];

    const [product, setProduct]= useState({})
    const [totalItems, setTotalItems]= useState(1)
    const [color, setColor]= useState("")
    const [size, setSize]= useState("")
    const dispatch= useDispatch()


    useEffect(()=> {
        const findProduct= async () => {
            try {
                const res= await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
            }
            catch(err) {

            }
        }
        findProduct()
    }, [id])

    const handleTotalItems = (type) => {
        if (type === "dec" ) {
            totalItems>1 && setTotalItems(totalItems-1)
        }
        else {
            setTotalItems(totalItems+1)
        }
    }


    
    // // console.log(size)

    const handleClick = () => {
        dispatch(addProduct({ ...product, totalItems, color, size }))
    }
    
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
                        {product.title}
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
                            {/* {product.color && product.color.map((c)=> (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                                ))} */}
                                <FilterColor color={product.color} key={product.color} onClick={() => setColor(product.color)} />
                        </Filter>
                        <Filter>
                            <FilterHeading>Size</FilterHeading>
                            {/* <select style={{margin:"10px", padding:"5px 10px"}} onChange={(e)=> setSize(e.target.value)}> */}
                            <select style={{margin:"10px", padding:"5px 10px"}} onChange={(e)=> setSize(e.target.value)} >
                                <option disabled selected>Size</option>
                                <option>{product.size}</option>
                                {/* {product.size?.map((s) => (
                                    <option>{s}</option>
                                ))} */}
                                {/* <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>  */}
                            </select>
                        </Filter>
                    </FilterContainer>
                    <AddToContainer>
                        <TotalItemsContainer>
                            <Remove style={{cursor: "pointer"}} onClick={() => handleTotalItems("dec")} />
                            <TotalItem>{totalItems}</TotalItem>
                            <Add style={{cursor: "pointer"}} onClick={() => handleTotalItems("inc")} />
                        </TotalItemsContainer>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <AddToCartButton variant="outlined" onClick={handleClick} >Add to Cart</AddToCartButton>
                        </div>
                    </AddToContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </ThemeProvider>
        </>
    )
}