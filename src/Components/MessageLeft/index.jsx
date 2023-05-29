import { Avatar, Box, Button, Card, CardMedia, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import DateFormatter from "../../Utils/dateFormatter";
import testeImg from '../../Asset/teste_persona.png';
import { ImageFullScreenMessageComponent } from "../ImageFullScreenMessage";

export const MessageLeftComponent = (props) => {
    const msg = props.item;

    const teste = msg.message + ""
    const [openDialogFullScreenImg, setOpenDialogFullScreenImg] = useState();

    const handleClickOpenFullScreenImg = () => {
        setOpenDialogFullScreenImg(true)
    }
    return (
        <>
            <ImageFullScreenMessageComponent {...{
                setOpen: setOpenDialogFullScreenImg,
                open: openDialogFullScreenImg,
                img: msg.message

            }} />
            <Box display={'flex'} my={1}>
                <Avatar
                    onClick={() => console.log(typeof (msg.message), typeof (props.teste))}
                    sx={{ height: 30, width: 30, ml: '2px', mr: '5px' }}
                    alt={'Sophia'}
                >
                    S
                </Avatar>
                <Paper elevation={1} sx={{ borderRadius: '5px', width: '80%', padding: '7px', textAlign: 'left' }} >
                    {msg.isLoading ? (
                        <>
                            <LinearProgress />
                        </>
                    ) : (
                        <>
                            {/* <img src={testeImg} onClick={() => handleClickOpenFullScreenImg()} /> */}
                            {msg.isImg ? (
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        // image="https://drive.google.com/file/d/1tjFc6YCp89JtZmEqB4BYGbaHmCJpH88E/view?usp=share_link"
                                        image={msg.message}
                                        onClick={() => handleClickOpenFullScreenImg()}
                                    />
                                </Card>
                            ) : (

                                <>
                                    <Typography variant="body" style={{ whiteSpace: 'pre-line' }}>
                                        {msg.message}
                                    </Typography>
                                </>
                            )}
                            <Typography variant="body2" textAlign={'right'} color={'secondary'}>
                                {DateFormatter(msg.date, true)}
                            </Typography>
                        </>
                    )
                    }
                </Paper>
            </Box >
        </>
    )
}

