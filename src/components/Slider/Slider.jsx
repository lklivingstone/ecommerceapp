import React from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';
import MobileSlider from './MobileSlider';
import DesktopSlider from './DesktopSlider';

export default function Slider() {

    const theme= useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {matches ? (
                <MobileSlider />
            ) : (
                <DesktopSlider />
            )}
        </>

    );
}