import { AppBar, CssBaseline, Box, Typography, Toolbar, IconButton, ListItemIcon } from "@material-ui/core";
import theme from "../../styles/theme/theme";
import useStyles from '../../styles/Navbar/styles';
import { ThemeProvider } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { ToolsContainerMobile } from "./NavbarComponents";
import AppDrawer from "../AppDrawer/AppDrawer";
import {Tools} from "./NavbarTools"
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


