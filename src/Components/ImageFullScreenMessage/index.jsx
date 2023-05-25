import { CloseOutlined } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";


export const ImageFullScreenMessageComponent = (props) => {
    const open = props.open;
    const imgURL = props.img;

    return (

        <Dialog
            fullScreen
            open={open}
        >
            <DialogTitle>
                <IconButton
                    onClick={() => props.setOpen(false)}
                    sx={{
                        position: 'relative',
                    }}>
                    <CloseOutlined />
                </IconButton>
            </DialogTitle>
            {/* <DialogContent > */}
            <img src={imgURL} width={'100%'} height={'auto'} />
            {/* </DialogContent> */}
        </Dialog>
    )
}
