import { styled } from "@mui/system";
// import { sliderItems } from "../../data/data";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Container = styled('div')({
    width: "100%",
    height: "100vh",
    display: "flex",
})

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


const DesktopSlider = () => {

    const [sliderItems, setSliderItems]= useState([])

    useEffect(()=> {
        const getSLiderItems= async () => {
            try {
                const res= await axios.get("http://localhost:5000/api/sliderItems")
                setSliderItems(res.data)
            } catch(err) {

            }
        }
        getSLiderItems()
    }, [])
     
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{"--swiper-navigation-color": "black", "--swiper-pagination-color": "#FFF"}}>
                {sliderItems.map((item) => (
                    <SwiperSlide>
                        <Container>
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
                                <Link to={`/products/${item.category}`}>
                                    <Button>
                                        SHOP NOW
                                    </Button>
                                </Link>                            
                            </InfoCont>
                    </Slide>
                        </Container>
                    </SwiperSlide>
                ))}
                
            </Swiper>
    )
}

export default DesktopSlider;