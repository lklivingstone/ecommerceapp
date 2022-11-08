import { Link } from "react-router-dom";
// import { categories } from "../../data/data";
import { Button, Container, Image, InfoCont, Title, Wrapper } from "./CategoriesComponents";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Categories = () => {

    const [categories, setCategories]= useState([])

    useEffect(() => {
        const getCategories= async () => {
            try {
                const res= await axios.get("https://tessst-dot.herokuapp.com/api/categories")
                setCategories(res.data)
            } catch(err) {

            }
        }
        getCategories()
    }, [])
    console.log(categories)
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