import React from 'react';
import { AppBar, Box, Toolbar, Typography, ListItemText, ListItemIcon, CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../styles/theme/theme'
import { ThemeProvider } from '@material-ui/core'; 
import useStyles from '../../styles/Navbar/styles';
import { MyList } from '../../styles/Navbar/Navbar';
import { ListItemButton } from '@mui/material';
import Tools from './Tools';


export default function Navbar({ matches }) {

    const classes= useStyles();
    
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
                        <ListItemText primary="Home"/>
                        <ListItemText color="secondary">Products</ListItemText>
                        <ListItemText color="inherit">Categories</ListItemText>
                        <ListItemText>Contact Us</ListItemText>
                        
                        <ListItemButton>
                            <ListItemIcon>  
                                    <SearchIcon style={{color: "white"}}/>
                                {/* <InputBase placeholder="Search" classes={{root:classes.inputRoot, input:classes.inputInput}}></InputBase> */}
                            </ListItemIcon>
                        </ListItemButton>
                    </MyList>
                    <Tools macthes={matches}/>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

