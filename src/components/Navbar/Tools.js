import { ListItemIcon } from "@material-ui/core";
import { FavoriteBorderOutlined, FavoriteOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { ListItemButton } from "@mui/material";
import { MyList, ToolsContainerDesktop, ToolsContainerMobile } from "../../styles/Navbar/Navbar";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function Tools({ matches }) {
    const components= matches ? ToolsContainerMobile : ToolsContainerDesktop;
    return (
        <components>
            <MyList type="row">
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
                        <ShoppingCartOutlined style={{color: "white"}}/>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton
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
                </ListItemButton>
                <ListItemButton
                sx= {{
                    justifyContent: "center"
                }}>
                    <ListItemIcon
                    style= {{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <PermIdentityIcon style={{color: "white"}}/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </components>
    )
}