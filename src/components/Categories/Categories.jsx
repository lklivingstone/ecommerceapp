import { categories } from "../../data/data";
import { Button, Container, Image, InfoCont, Title, Wrapper } from "./CategoriesComponents";




const Categories = () => {
    return <Container>
            {categories.map((item)=> (
                <Wrapper key={item.id}>
                    <Image src={item.img} />
                    <InfoCont>
                        <Title>{item.title}</Title>
                        <Button>SHOP NOW</Button>
                    </InfoCont>
                </Wrapper>
                ))}
        </Container>;
};

export default Categories;