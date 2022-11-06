import { Link } from "react-router-dom";
import { categories } from "../../data/data";
import { Button, Container, Image, InfoCont, Title, Wrapper } from "./CategoriesComponents";




const Categories = () => {
    return <Container>
            {categories.map((item)=> (
                 <Link to={`/products/${item.cat}`}>
                    <Wrapper key={item.id}>
                            <Image src={item.img} />
                            <InfoCont>
                                <Title>{item.title}</Title>
                                <Button>SHOP NOW</Button>
                            </InfoCont>
                    </Wrapper>
                </Link>
            ))}
        </Container>;
};

export default Categories;