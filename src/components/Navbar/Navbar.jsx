import React from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';
import {NavbarMobile} from './NavbarMobile';
import {NavbarDesktop} from './NavbarDesktop';


export const Navbar = () => {

    const theme= useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));
    

    return (
        <>
            {matches ? (
                <NavbarMobile />
            ) : (
                <NavbarDesktop />
            )}
        </>

    );
}
