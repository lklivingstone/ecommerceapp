import { Divider, Drawer, IconButton, lighten, List, ListItemButton, ListItemText, styled } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../styles/theme/theme";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from "@mui/material";
import theme from "../../styles/theme/theme";
import CloseIcon from '@mui/icons-material/Close';

const CustomDrawer= styled(Drawer)(() => ({
    ".MuiDrawer-paper": {
        width: "30vw",
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
            <List>
                <ListItemButton>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <CloseIcon color="secondary"/>
            </IconButton>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText>
                        Categories
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText>
                        Products
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText>
                        About Us
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItemText>
                        Contact Us
                    </ListItemText>
                </ListItemButton>
            </List>
        </CustomDrawer>
        
        </ThemeProvider>
        </>
    )
}