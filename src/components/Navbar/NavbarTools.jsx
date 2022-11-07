import { ListItemIcon } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { MyList } from "../../styles/Navbar/Navbar";
import {  ShoppingCartOutlined } from "@material-ui/icons";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Tools = () => {
    // const components= matches ? ToolsContainerMobile : ToolsContainerDesktop;
    const quantity= useSelector(state=>state.shoppingCart.quantity)
    // const quantity= 0

    const user= useSelector(state=> state.user.currUser)

    const navigate= useNavigate()


    return (
            <MyList type="row" style={{flexGrow:1}}>
                <ListItemButton
                sx= {{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <ListItemIcon
                    style= {{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    >
                        <Link to="/cart">
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined style={{color: "white"}}/>
                            </Badge>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>
                {/* <ListItemButton
                sx= {{
                    justifyContent: "center"
                }}>
                    <ListItemIcon
                    style= {{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <FavoriteBorderOutlined style={{color: "white"}}/>
                    </ListItemIcon>
                </ListItemButton> */}
                {!user && <ListItemButton
                sx= {{
                    justifyContent: "center"
                }}>
                    <ListItemIcon
                    style= {{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Link to="/login">
                            <PermIdentityIcon style={{color: "white"}}/>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>}
                {user && <ListItemButton
                sx= {{
                    justifyContent: "center"
                }}>
                    <ListItemIcon
                    style= {{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Link to="/logout">
                            <PermIdentityIcon style={{color: "white"}} />
                        </Link>
                    </ListItemIcon>
                </ListItemButton>}
            </MyList>
    )
}
