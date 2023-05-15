import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const WarningAvailableDesktopPage = () => {

    return (
        <>
            <Container component={"main"} >
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar
                        alt="Linestur Logo"
                        sx={{ display: { xs: 'flex' }, m: 1, height: '70px', width: '70px' }}
                    // src={Logo_default_linestur} 
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            // mr: 2,
                            mb: 8,
                            display: { xs: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TCC
                    </Typography>
                    <Typography variant="h5" component={"h1"}>
                        Só está disponível na versão para em dispositivos móveis.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default WarningAvailableDesktopPage;
