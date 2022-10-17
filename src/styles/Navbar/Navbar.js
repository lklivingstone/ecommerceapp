import { styled } from "@material-ui/styles";
import { Box, List } from "@material-ui/core";
import { Colors } from "../theme/theme";

// export const NavbarContainer = styled(Box)(() => ({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
// }));

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
}));

export const ToolsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
    borderTop: `1px solid ${Colors.border}`
}));

export const ToolsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));