import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { styled } from "@mui/system";
import { Colors } from "../../styles/theme/theme";
import { useState } from "react";
import { sliderItems } from "../../data/data";
import { Wrapper } from "./Wrapper";

const Container = styled('div')({
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden"
})


const Arrow = styled("div")((props) => ({
    width: "50px",
    height: "50px",
    background: Colors.light_gray,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    left: props.direction === "left" && "10px" ,
    right: props.direction === "right" && "10px",
    cursor: "pointer",
    opacity: "0.7",
    "&:hover" : {
        opacity: "1",
    },
    zIndex: 100,
}));


const Slide = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: props.bg,
}));

const ImgCont= styled("div")({
    height: "100%",
    flex: "1",
})

const InfoCont= styled("div")({
    flex: 1,
    padding: "50px",
    top: 0,
    bottom: 0,
    margin: "auto"
})

const Image = styled("img")({
    padding: "10px",
    height: "80%"
})

const Title = styled("h1")({
    fontSize: "50px"
})

const Desc = styled("p")({
    margin: "50px 0px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "3px"
})

const Button = styled("Button")({
    fontSize: "20px",
    background: "transparent",
    padding: "20px",
    cursor: "pointer"
})


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :  2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };
     
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <ImgCont>
                            <Image src={ item.image } />
                        </ImgCont>
                        <InfoCont>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc>
                                {item.desc}
                            </Desc>                            
                            <Button>
                                SHOP NOW
                            </Button>
                        </InfoCont>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;