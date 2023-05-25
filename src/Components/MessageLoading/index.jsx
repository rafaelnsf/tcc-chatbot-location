import { Avatar, Box, LinearProgress, Paper } from "@mui/material";
import React from "react";

export const MessageLoadingComponent = () => {

    return (
        <>
            <Box display={'flex'} my={1}>
                <Avatar
                    sx={{ height: 30, width: 30, ml: '2px', mr: '5px' }}
                    alt={'Sophia'}
                >
                    T
                </Avatar>
                <Paper elevation={1} sx={{ borderRadius: '5px', width: '80%', padding: '7px', textAlign: 'left' }} >
                    <LinearProgress />
                </Paper>
            </Box>
        </>
    )
}

