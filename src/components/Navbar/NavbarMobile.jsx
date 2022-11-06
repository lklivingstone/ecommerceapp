import { AppBar, CssBaseline, Box, Typography, Toolbar, IconButton, ListItemIcon } from "@material-ui/core";
import theme from "../../styles/theme/theme";
import useStyles from '../../styles/Navbar/styles';
import { ThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItemButton } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { MyList } from "../../styles/Navbar/Navbar";
import { ToolsContainerMobile } from "./NavbarComponents";
import AppDrawer from "../AppDrawer/AppDrawer";
import {Tools} from "./NavbarTools"
import { FavoriteBorderOutlined, FavoriteOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux"

export const NavbarMobile = () => {

    const cart= useSelector(state=>state.cart)

    

    const classes= useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position= "static" >
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.flexone}>
                        <AppDrawer />
                    </Box>
                    <Box className={classes.flexone}>
                        <Typography variant="h4" color="secondary" style={{display: "flex", justifyContent: "center"}}>
                            tessst.
                        </Typography>
                    </Box>
                    <Box className={classes.flexone}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon style={{color: "white"}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <ToolsContainerMobile>
            <Tools />
            </ToolsContainerMobile>
        </ThemeProvider>
    );
}


