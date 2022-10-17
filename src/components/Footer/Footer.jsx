import { Box, Button, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import { Colors } from "../../styles/theme/theme";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Desc = styled("p")({
    margin: "0 0",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "3px"
})

const Title = styled(Typography)(() => ({
    textTransform: "uppercase",
    marginBottom: "1em",
}))

const SubscribeTextField= styled(TextField)(() => ({
    ".MuiInputLabel-root": {
        color: Colors.light_gray,
    },

    ".MuiInput-root::before": {
        borderBottom: `1px solid ${Colors.secondary}`
    }
}))

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    }
}));

export default function Footer() {
    const classes= useStyles();

    return (
        <Paper elevation="0" width="100vw">

        <Box
            sx={{
                p: {xs: 4, md: 10},
                background: Colors.shaft,
                color: Colors.white,
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px"}
            }}>
                <Grid container spacing={2} className= {classes.grid}>
                    <Grid item md={6} lg={4}>
                        <Title variant="body1">
                            About Us
                        </Title>
                        <Typography variant="caption2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam fuga, corrupti magnam quos similique consequuntur, temporibus quas excepturi aspernatur minima libero voluptate a voluptatibus tempora rerum atque possimus error.
                        </Typography>
                        <Box
                        sx ={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}>
                            <FacebookIcon sx={{mr: 1}}/>
                            <TwitterIcon sx={{mr: 1}}/>
                            <InstagramIcon />
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={2}>
                        <Title variant="body1">info.</Title>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Order Tracking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy and Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Terms and Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item sm={6} md={6} lg={2}>
                        <Title variant="body1">my account.</Title>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item sm={12} md={6} lg={2}>
                        <Title variant="body1">newsletter.</Title>
                        <Box
                        marginBottom={"100px"}>
                            <Stack>
                                <SubscribeTextField
                                color="primary"
                                label="Email address"
                                variant="standard"
                                />
                                <Button
                                    endIcon={<SendIcon sx={{color: Colors.white}} />}
                                    sx={{ margin: 4 }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Subscribe
                                </Button>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid> 
            </Box>
        </Paper>
    )
}