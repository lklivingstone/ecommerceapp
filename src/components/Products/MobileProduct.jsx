import { ShoppingIconContainer, FavIconContainer, SearchIconContainer, ShoppingButton, SearchButton } from "./ProductComponents";
import { FavButton } from "./ProductComponents";
import { IconLayer } from "./ProductComponents";
import { Link } from "react-router-dom";


export default function MobileIconLayer({product}) {
    return (
        <IconLayer>
            <ShoppingIconContainer>
                <ShoppingButton />
            </ShoppingIconContainer>
            <FavIconContainer>
                <FavButton />
            </FavIconContainer>
            <Link to={`/product/${product._id}`}>
                <SearchIconContainer>
                    <SearchButton />
                </SearchIconContainer>
            </Link>
        </IconLayer>
    );
}

