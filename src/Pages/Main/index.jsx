import { HomeOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const MainPage = () => {

    return (
        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        {/* <Avatar alt="Tcc"
                            sx={{ display: { xs: 'none', md: 'flex' }, m: 1, height: '25px', width: '25px' }}
                        //  src={Logo_default_linestur} 
                        /> */}
                        <IconButton href="/">
                            <HomeOutlined />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            // color={'secodary'}
                            href={'/'}
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                textDecoration: 'none',
                            }}>
                            TCC
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    )
}
