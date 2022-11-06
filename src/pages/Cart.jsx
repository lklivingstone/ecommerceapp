import Footer from "../components/Footer/Footer"
import {Navbar} from "../components/Navbar/Navbar"
import { ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme'
import { CssBaseline } from '@material-ui/core';
import { Box, styled } from "@mui/system";
import { products } from "../data/data";
import { Add, Remove } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/shoppingCartRedux";



const KEY= process.env.REACT_APP_STRIPE

const Wrapper = styled("div")({
    width: "100%",
    // height: "70vh",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
})


const ItemsContainer = styled("div")({
    height: "100%",
    flex: "4",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
})

const Title = styled("h1") ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const DividerContainer = styled("div") ({
    width: "100%",
    margin: "5px 5px",
})

const Container = styled("div")({
    flex: "8",
    width: "100%",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
})

const ProductContainer = styled("div")({

    flex: "8",
    width: "100%",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
})

const ImageContainer = styled("div")({
    flex: "1.3",
    padding: "10px"
})

const DescriptionContainer = styled("div")({
    flex: "2",
    padding: "10px"
})

const QuantityContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    padding: "10px",
})


const TotalContainer = styled("div")({
    flex: "1",
    padding: "10px",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
})

const Image = styled("img")({
    width: "100%",
    objectFit: "cover"
})


const CheckoutContainer = styled("div")({
    flex: "2",
    width: "100%",
    padding: "15px 15px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
})

const PromoSubmission = styled(Box)({
    width: "100%",
    flexDirection: "row",
    // display: "flex",
    // justifyContent: "center",
    // backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",

})

const PriceSummaryContainer = styled("div")({
    width: "100%",
    display: "flex",
})

const PriceSummaryTypeContainer =  styled("div")({
    flex: "7",

})

const PriceSummaryTotalContainer =  styled("div")({
    flex: "3",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-end"
})

const ButtonContainer = styled("div")({
    width:"100%", 
    display:"flex", 
    justifyContent:"center", 
    margin: "20px 0px"
})

const ShoppingButton = styled("Button")({
    fontSize: "15px",
    color: "white",
    background: "black",
    height:"100%",
    padding: "15px",
    width:"30%",
    cursor: "pointer"
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



// const product= products[0];

export const Cart = () => {

    const cart= useSelector(state=> state.shoppingCart)

    const [stripeToken, setStripeToken]= useState(null)
    const navigate= useNavigate()

    const onToken= (token) => {
        setStripeToken(token)
    }   

    useEffect(() => {
        const makeRequest= async () => {
            try{
                const res= await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total,
                })
                navigate.push("/success", { data: res.data })
            } 
            catch{}
        }
        stripeToken && cart.total>0 && makeRequest()
    }, [stripeToken, cart.total, navigate])
    const dispatch= useDispatch()
    const handleRemove = (product) => {
        dispatch(deleteProduct(product))
    }

    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Title>Your Cart</Title>
            <Wrapper>
                {cart.products && cart.products.map(product=>(

                    <ItemsContainer>
                    <DividerContainer>
                        <Divider style={{width:'100%'}}/>
                    </DividerContainer>
                    <Container>
                        <ProductContainer>
                            <ImageContainer>
                                <Image src={product.img} />
                            </ImageContainer>
                            <DescriptionContainer>
                                <h2>{product.title}</h2>
                                <h4>Price: Rs {product.price}</h4>
                                <h4>Color: {product.color}</h4>
                                <h4>Size: {product.size}</h4>
                                <Button variant="outlined" color="error" onClick={() => handleRemove(product)}>
                                    Remove Item
                                </Button>
                            </DescriptionContainer>
                            <QuantityContainer>
                                <h4>Quantity</h4>
                                <h4>{product.totalItems}</h4>
                            </QuantityContainer>
                        </ProductContainer>
                        <TotalContainer>
                            <h4>Total</h4>
                            <h4>{product.price*product.totalItems}</h4>
                        </TotalContainer>
                    </Container>
                    <DividerContainer>
                        <Divider style={{width:'100%'}}/>
                    </DividerContainer>
                </ItemsContainer>
                ))}
                <Container>
                    <ProductContainer style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                        <h2>Total:</h2>
                    </ProductContainer>
                     <TotalContainer>
                        <h2>{cart.total}</h2>
                    </TotalContainer>
                </Container>
                    {!cart.products && <h2>Your cart is empty.</h2>}
                <CheckoutContainer>
                    <h2>Enter Promo Code</h2>
                    <PromoSubmission>
                        <TextField label="Promo Code" variant="outlined" sx={{width: "70%"}}/>
                        <ShoppingButton>Submit</ShoppingButton>
                    </PromoSubmission>
                    <PriceSummaryContainer>
                        <PriceSummaryTypeContainer>
                            <div style={{display:"flex", justifyContent: "flex-start"}}>
                                <p>Total Amount </p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-start"}}>
                                <p>Shipping Cost </p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-start"}}>
                                <p>Discount </p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-start"}}>
                                <p>Tax </p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-start"}}>
                                <h3>Estimated Total: </h3>
                            </div>
                        </PriceSummaryTypeContainer>
                        <PriceSummaryTotalContainer>
                            <div style={{display:"flex", justifyContent: "flex-end"}}>
                                <p>Rs {cart.total}</p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-end"}}>
                                <p>Rs 100</p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-end"}}>

                            <p>-Rs 500</p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-end"}}>

                            <p>Rs 359.82</p>
                            </div>
                            <div style={{display:"flex", justifyContent: "flex-end"}}>

                            <h3>Rs {(cart.total - 40.8) >=0 ? (cart.total - 40.8) : 0}</h3>
                            </div>
                        </PriceSummaryTotalContainer>
                    </PriceSummaryContainer>
                    <ButtonContainer>
                        <StripeCheckout
                        name="tessst."
                        billingAddress
                        shippingAddress
                        description={`Your total: ${cart.total}`}
                        amount= {cart.total}
                        token={onToken}
                        stripeKey= {KEY}
                        >
                            <ShoppingButton style={{width: "40vw", fontSize: "20px", background: "#000512"}}>Checkout</ShoppingButton>
                        </StripeCheckout>
                    </ButtonContainer>
                </CheckoutContainer>
            </Wrapper>
            <Footer />
        </ThemeProvider>
        </>
    )
}