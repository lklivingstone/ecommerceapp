import { Box } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Colors } from "../../styles/theme/theme";



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



