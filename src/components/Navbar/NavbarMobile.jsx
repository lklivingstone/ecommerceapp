import { AppBar, CssBaseline, Box, Typography, Toolbar, IconButton, ListItemIcon } from "@material-ui/core";
import theme from "../../styles/theme/theme";
import useStyles from '../../styles/Navbar/styles';
import { ThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItemButton } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { MyList } from "../../styles/Navbar/Navbar";
import { ToolsContainerMobile } from "./ToolbarMobile";
import AppDrawer from "../AppDrawer/AppDrawer";


export default function NavbarMobile({ matches }) {
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
                <MyList type="row">
                    <ListItemButton
                    sx= {{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    >
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
                </MyList>
            </ToolsContainerMobile>
        </ThemeProvider>
    );
}


