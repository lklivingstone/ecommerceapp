import { styled } from '@material-ui/core';

export const Container= styled("div")({
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
})

export const Wrapper = styled("div")({
    flex: "1",
    margin: "3px",
    height: "70vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

export const Image = styled("img")({
    width: "80%",
    height: "80%",
    objectFit: "cover",
})

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
    letterSpacing: "3px"
})

export const Button = styled("Button")({
    fontSize: "17px",
    fontWeight: 550,
    background: "white",
    padding: "8px 20px",
    cursor: "pointer"
})