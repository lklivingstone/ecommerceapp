import { Button, CssBaseline } from "@mui/material"
import { styled } from "@mui/system"
import { ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls"
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    backgroundImage: "linear-gradient(to top, rgb(200, 207, 227, 0.5), rgba(200, 207, 227, 1))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const Container = styled("div")(({theme})=>({
    width: "50%",
    [theme.breakpoints.down("sm")] : {
        width: "70%"
    },
    padding: "20px",
    backgroundColor: "white",
    // display: "flex",
    // flexDirection: "column",
}))

const Form = styled("form")({
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "column"
})

const Title = styled("h1")({
    margin: "10px 10px",
    fontWeight: "200",
})

const Input = styled("input")({
    flex: "1",
    minWidth: "40%",
    margin: "10px 10px",
    padding: "10px",

})

const TermsandCondition = styled("span")({
    fontSize: "12px",
    margin: "10px 10px",
})

// export const productAddToCart = styled(Button)(({show, theme}) => ({
//     width: "120px",
//     fontSize: "12px",
//     [theme.breakpoints.up("md")]: {
//         position: "absolute",
//         bottom: "2%",
//         width: "300px",
//         padding: "10px 5px",
//         animation:
//             show && `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
//     },
//     backgroundColor: Colors.secondary,
//     opacity: 0.9,
// }));

const SubmitButton = styled(Button)(({disabled}) => ({
    padding: "10px 65px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#e1e6f5",
    // "&:hover": {
    //     opacity: 1,
    //     backgroundColor: Colors.light_gray
    // }
    "&:disabled" : {
        color: "#e1e6f5",
        cursor: "not-allowed"
    }
}))

const ButtonDiv = styled("div")({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0px 0px 0px"
})

const ForwardLink = styled("a")({
    margin: "5px 10px",
    fontSize: "12px",
    textDecoration: "underline",
    "&:hover": {
        textDecoration: "none",
        cursor: "pointer"
        // backgroundColor: Colors.light_gray
    }
})

const Error = styled("span")({
    color: "red"
})


export const Login = () => {

    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const dispatch= useDispatch()
    const { isFetching, error }= useSelector(state=>state.user)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Container>
                        <Title>
                            LOGIN
                        </Title>
                        <Form>
                            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                            <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                            <ForwardLink>Forgot Password</ForwardLink>
                            <ForwardLink>Create new account</ForwardLink>
                        </Form>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}} >
                            <ButtonDiv>
                                <SubmitButton variant="filled" onClick={handleClick} disabled={isFetching}>Login</SubmitButton>
                            </ButtonDiv>
                            <ButtonDiv>
                                <Link to="/register" style={{textDecoration: "none", color: "black"}} >
                                    <ForwardLink style={{fontSize: "15px"}}>Register</ForwardLink>
                                </Link>
                            </ButtonDiv>
                            {error && <Error>Something went wrong!</Error>}
                        </div>
                    </Container>
                </Wrapper>
            </ThemeProvider>
        </>
    )
}