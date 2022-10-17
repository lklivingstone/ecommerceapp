import { Button, CssBaseline } from "@mui/material"
import { styled } from "@mui/system"
import { ThemeProvider } from '@material-ui/core'; 
import theme from '../styles/theme/theme';


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

const SubmitButton = styled(Button)({
    padding: "10px 65px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#e1e6f5"
})

const ButtonDiv = styled("div")({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0px 0px 0px"
})

const Link = styled("a")({
    margin: "5px 10px",
    fontSize: "12px",
    textDecoration: "underline"
})


export const Login = () => {
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
                            <Input placeholder="Username" />
                            <Input placeholder="Password" />
                            <Link>Forgot Password</Link>
                            <Link>Create new account</Link>
                        </Form>
                            <ButtonDiv>
                                <SubmitButton variant="filled">Create</SubmitButton>
                            </ButtonDiv>
                    </Container>
                </Wrapper>
            </ThemeProvider>
        </>
    )
}