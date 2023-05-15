import { ChatOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import teste_persona from "../../Asset/teste_persona.png";



export const HomePage = () => {
    const navigate = useNavigate();

    const handleClickStartChat = () => {
        navigate('/chat')
    }



    return (

        <>
            <Box height={'calc(100vh - 56px )'}>
                <Grid container>
                    <Grid item xs={12} mt={5} display={'flex'} justifyContent={'center'}>
                        <Avatar src={teste_persona} alt="logo" sx={{ width: 100, height: 100 }}></Avatar>
                    </Grid>
                    <Grid item xs={12} padding={2} textAlign={'justify'}>
                        <Typography variant="body" >
                            Olá, serei a sua ajudante! Para começar, pressione o botão escrito 'novo',
                        </Typography>
                    </Grid>
                </Grid>
                <Fab onClick={() => handleClickStartChat()} variant="extended" color="secondary" sx={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <ChatOutlined sx={{ mr: 1 }} />
                    Novo
                </Fab>
            </Box>
            <Outlet />
        </>
    )
}
