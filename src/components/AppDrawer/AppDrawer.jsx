import { Divider, Drawer, IconButton, lighten, List, ListItemButton, ListItemText, styled } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../styles/theme/theme";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from "@mui/material";
import theme from "../../styles/theme/theme";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const CustomDrawer= styled(Drawer)(() => ({
    ".MuiDrawer-paper": {
        width: "40vw",
        color: Colors.secondary,
        background: Colors.primary,
        display: "flex",
        borderRight: `1px solid ${Colors.secondary}`
    }
}))

const CustomDivider= styled(Divider)(() => ({
    ".MuiDivider-root": {
            backgroundColor: "secondary",
        
    }
}))

export default function AppDrawer() {

    const navigate= useNavigate();

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
        <ThemeProvider theme={theme}>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon color="secondary"/>
            </IconButton>
            <CustomDrawer open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            >
            <List style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <ListItemButton>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <CloseIcon color="secondary"/>
                </IconButton>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText onClick= { () => navigate("/") }>
                        Home
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText onClick= { () => navigate("/") }>
                        Categories
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText onClick= { () => navigate("/") }>
                        Products
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText onClick= { () => navigate("/") }>
                        About Us
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText onClick= { () => navigate("/") }>
                        Contact Us
                    </ListItemText>
                </ListItemButton>
            </List>
        </CustomDrawer>
        
        </ThemeProvider>
        </>
    )
}