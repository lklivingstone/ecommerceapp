import { styled } from "@mui/system";
import { sliderItems } from "../../data/data";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Container = styled('div')({
    width: "100%",
    height: "30vh",
    display: "flex",
})

const Slide = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: props.bg,
}));

const ImgCont= styled("div")({
    height: "100%",
    flex: "1",
})

const InfoCont= styled("div")({
    flex: 1,
    padding: "15px",
    top: 0,
    bottom: 0,
    margin: "auto"
})

const Image = styled("img")({
    padding: "10px",
    height: "100%"
})

const Title = styled("h1")({
    fontSize: "20px",
    margin: "0px 0px"
})

const Desc = styled("p")({
    margin: "20px 0px",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "3px"
})

const Button = styled("Button")({
    fontSize: "10px",
    background: "transparent",
    padding: "10px",
    cursor: "pointer"
})


const MobileSlider = () => {
     
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{"--swiper-navigation-color": "black", "--swiper-navigation-size": "20px"}}>
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
                                    <Button>
                                        SHOP NOW
                                    </Button>
                                </InfoCont>
                            </Slide>
                        </Container>
                    </SwiperSlide>
                ))}
                
            </Swiper>
    )
}

export default MobileSlider;