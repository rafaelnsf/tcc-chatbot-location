import { Avatar, Box, Button, LinearProgress, Paper, Typography } from "@mui/material";
import React from "react";
import DateFormatter from "../../Utils/dateFormatter";

export const MessageLeftComponent = (props) => {
    const msg = props.item;

    return (
        <>
            <Box display={'flex'} my={1}>
                <Avatar
                    sx={{ height: 30, width: 30, ml: '2px', mr: '5px' }}
                    alt={'TCC'}
                >
                    T
                </Avatar>
                <Paper elevation={1} sx={{ borderRadius: '5px', width: '80%', padding: '7px', textAlign: 'left' }} >
                    {msg.isLoading ? (
                        <>
                            <LinearProgress />
                        </>
                    ) : (
                        <>
                            <Typography variant="body" >
                                {msg.message}
                            </Typography>
                            <Typography variant="body2" textAlign={'right'} color={'secondary'}>
                                {DateFormatter(msg.date, true)}
                            </Typography>
                        </>
                    )
                    }
                </Paper>
            </Box>
        </>
    )
}

