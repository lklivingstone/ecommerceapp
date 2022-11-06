import { Box, IconButton } from "@material-ui/core";
import { Button } from "@mui/material";
import { styled } from "@mui/system"; 
import { Colors } from "../../styles/theme/theme";
import { ScaleUpCenter, slideLeft, slideTop, ScaleDownCenter } from "../../animation/Animation";
import zIndex from "@mui/material/styles/zIndex";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Image = styled("img")(({ theme }) => ({
    height: "400px",
    objectFit: "cover",
    // padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")] : {
        width: "100%",
    }
}));

export const ShoppingIconContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'enter'
})(({ enter }) => ({
    margin: "15px", 
    padding: "20px", 
    width: "30px", 
    height: "30px", 
    backgroundColor: "white", 
    borderRadius: "50%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    zIndex: "3",
    animation:
    enter &&
        `${ScaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
}));

export const FavIconContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'enter'
})(({ enter }) => ({
    margin: "15px", 
    padding: "20px", 
    width: "30px", 
    height: "30px",
    backgroundColor: "white", 
    borderRadius: "50%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    zIndex: "3",
    animation:
        enter &&
        `${ScaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
}));

export const SearchIconContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'enter'
})(({ enter }) => ({
    margin: "15px", 
    padding: "20px", 
    width: "30px", 
    height: "30px", 
    backgroundColor: "white", 
    borderRadius: "50%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    zIndex: "3",
    animation:
        enter &&
        `${ScaleUpCenter} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
}));


export const IconLayer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({show, theme}) => ({
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    top: 0,
    right: 0,
    transition: "all 0.3s ease",
    opacity: 0,
    [theme.breakpoints.down("lg")] : {
        opacity: 1,
    },
    "&:hover": {
        opacity: 1,
        // backgroundColor: Colors.light_gray
    }
}));

export const FavButton= styled(FavoriteBorderIcon, {
    shouldForwardProp: (prop) => prop !== 'isFav'
})(({ enter, isFav }) => ({
    color: isFav ? Colors.primary : Colors.light,
    fontSize: "large",
    animation:
        enter && `${ScaleDownCenter} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}))

export const ShoppingButton= styled(ShoppingCartOutlinedIcon, {
    shouldForwardProp: (prop) => prop !== 'enter'
})(({ enter, isAdded }) => ({
    color: isAdded ? Colors.primary : Colors.light,
    fontSize: "large",
    animation:
        enter && `${ScaleDownCenter} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}));

export const SearchButton= styled(SearchIcon, {
    shouldForwardProp: (prop) => prop !== 'enter'
})(({ enter}) => ({
    color: Colors.primary,
    fontSize: "large",
    animation:
        enter && `${ScaleDownCenter} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}))

export const DescriptionBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
})


// DO NOT USE BELOW

// export const productContainer = styled("div")(({theme}) => ({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     [theme.breakpoints.up("md")]: {
//         position: "relative"
//     }
// }));

// export const Image = styled("img")(({ theme }) => ({
//     height: "100vh",
//     objectFit: "cover",
//     background: Colors.light_gray,
//     padding: "10px",
//     [theme.breakpoints.down("md")] : {
//         width: "80%",
//     }
// }));

// export const productImage = styled("img")(({src, theme}) => ({
//     src: `url(${src})`,
//     width: "100%",
//     background: Colors.light_gray,
//     padding: "10px",
//     [theme.breakpoints.down("md")] : {
//         width: "80%",
//         padding: "24px",
//     }
// }));

// export const productActionButton = styled(IconButton)(() => ({
//     background: Colors.white,
//     margin: 4,
// }));

// export const productFavButton= styled(productActionButton)(({ isFav, theme}) => ({
//     color: isFav ? Colors.primary : Colors.light,
//     [theme.breakpoints.up("md")]: {
//         position: "absolute",
//         top: 0,
//         right: 0,
//     },
// }));


// export const productAddToCart = styled(Button)(({show, theme}) => ({
//     width: "120px",
//     fontSize: "12px",
//     [theme.breakpoints.up("md")]: {
//         position: "absolute",
//         bottom: "2%",
//         width: "300px",
//         padding: "10px 5px",
//         animation:
//             show && `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
//     },
//     backgroundColor: Colors.secondary,
//     opacity: 0.9,
// }));

// export  const productWrapper= styled(Box)(({theme}) => ({
//     padding: 4,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: Colors.danger,
// }));

// export const productButtonsWrapper = styled(Box)(({ show, theme }) => ({
//     [theme.breakpoints.up("md")]: {
//         display: show ? "visible" : "none",
//         position: "absolute",
//         right: 0,
//         top: "20%",
//         animation: show && `${slideLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
//     },
// }));



// DO NOT USE ABOVE