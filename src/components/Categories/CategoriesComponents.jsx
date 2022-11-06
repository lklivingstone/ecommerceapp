import { styled } from '@material-ui/core';

export const Container= styled("div")(({theme}) => ({
    display: "flex",
    padding: "20px",
    justifyContent: "space-around",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
    }
}))

export const Wrapper = styled("div")(({theme}) => ({
    margin: "3px",
    [theme.breakpoints.up('md')]: {
        height: "70vh",
        flex: "1",
    },
    [theme.breakpoints.down('md')]: {
        height: "400px",
    },
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export const Image = styled("img")(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        // height: "100%",
        height: "80%",
    },
    [theme.breakpoints.down('md')]: {
        height: "100%",
    },
    objectFit: "cover",
}))

export const InfoCont = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
})

export const Title = styled("h1")({
    fontWeight: 500,
    fontSize: "21px",
    letterSpacing: "3px",
    color: " black"
})

export const Button = styled("Button")({
    fontSize: "17px",
    fontWeight: 550,
    background: "white",
    padding: "8px 20px",
    cursor: "pointer"
})