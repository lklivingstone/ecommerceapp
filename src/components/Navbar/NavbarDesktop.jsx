import React from 'react';
import { AppBar, Box, Toolbar, Typography, ListItemText, ListItemIcon, CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../styles/theme/theme'
import { ThemeProvider } from '@material-ui/core'; 
import useStyles from '../../styles/Navbar/styles';
import { MyList } from '../../styles/Navbar/Navbar';
import { ListItemButton } from '@mui/material';
import {Tools} from "./NavbarTools"
import { useNavigate } from 'react-router-dom';
import Scroll from 'react-scroll'


export const NavbarDesktop = () => {

    const classes= useStyles();
    const navigate= useNavigate();
    const ScrollLink = Scroll.ScrollLink
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <AppBar position= "static">
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.flexone}>
                        <Typography variant="h4" color="secondary" style={{display: "flex", justifyContent: "center"}}>
                            tessst.
                        </Typography>
                    </Box>
                    <MyList type='row'>
                        <ListItemText primary="Home" onClick= { () => navigate("/") } style={{cursor: 'pointer'} }/>
                        <ListItemText color="secondary" onClick= { () => navigate("/") } style={{cursor: 'pointer'} }>Products</ListItemText>
                        <ListItemText color="inherit" onClick= { () => navigate("/") } style={{cursor: 'pointer'} }>Categories</ListItemText>
                        

                            <ListItemText  onClick= { () => navigate("/") } style={{cursor: 'pointer'} }>
                            {/* <ScrollLink 
                            to="example-destination" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='some-class' 
                            activeClass='some-active-class'> */}
                                 Contact Us
                            {/* </ScrollLink> */}
                                
                            </ListItemText>
                        
                        <ListItemButton>
                            <ListItemIcon>  
                                    <SearchIcon style={{color: "white"}}/>
                                {/* <InputBase placeholder="Search" classes={{root:classes.inputRoot, input:classes.inputInput}}></InputBase> */}
                            </ListItemIcon>
                        </ListItemButton>
                    </MyList>
                    <Tools />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

