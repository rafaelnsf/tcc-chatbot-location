import { SendOutlined } from "@mui/icons-material";
import { Box, IconButton, Paper, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import background_chat from '../../Asset/background_chat.png';
import { MessageLeftComponent } from "../../Components/MessageLeft";
import { MessageLoadingComponent } from "../../Components/MessageLoading";
import { MessageRightComponent } from "../../Components/MessageRight";
import chat_service from "../../Service/chat_service";

export const ChatPage = () => {
    const { promiseInProgress } = usePromiseTracker({ delay: 100 });
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingFirts, setIsLoadingFirts] = useState(false);

    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const attHistory = () => {
        let dto = {
            isUser: true,
            message: message,
            date: Date()
        }
        console.log("🚀 ~ file: index.jsx:25 ~ sendMessage ~ dto:", dto)
        setMessages(prevState => [...prevState, dto])
        setMessage('')
        sendMessage()
    }



    const sendMessage = async () => {
        try {
            let dtoSend = {
                text: message,
                userId: "testeeeeeeeeeeeeee"
            }
            let testeLoading = {
                isUser: false,
                isLoading: true,
            }
            setMessages(prevState => [...prevState, testeLoading])
            let response = await chat_service.postMessageToAI(dtoSend)
            let dtoResponse = {
                isUser: false,
                message: response.data.fulfillmentText,
                date: Date()
            }
            setMessages((prevState) => (prevState.slice(0, -1)));
            setMessages(prevState => [...prevState, dtoResponse])
        } catch (e) {
            alert(e)
            console.log('sendMessage ~ error: ', e)
        } finally {
            document.getElementById("textField_message").focus();
        }
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [messages]);

    useEffect(() => {
        setIsLoadingFirts(true)
        setTimeout(() => {
            let dto = {
                isUser: false,
                message: 'Bem vindo(a) ao TCC, em que posso lhe ajudar?',
                date: Date()
            }
            setMessages([dto])
            setIsLoadingFirts(false)
        }, 2000);
    }, [])

    useEffect(() => {
        promiseInProgress === true ? setIsLoading(true) : setIsLoading(false)
    }, [promiseInProgress])

    return (
        <>
            <Paper elevation={0} sx={{ height: 'calc(100vh - 128px)', backgroundImage: background_chat, overflowY: 'scroll' }} >
                {isLoadingFirts ? (
                    <MessageLoadingComponent />
                ) : null}
                {messages.length === 0 ? null : messages?.map((item) => (
                    <>
                        {item.isUser ?
                            <MessageRightComponent {...{ item }} /> :
                            <MessageLeftComponent {...{ item }} />
                        }
                    </>
                ))}
                <div ref={scrollRef} />
            </Paper>
            {/* <Box padding={2} color={'primary'} sx={{ backgroundColor: '#257ca3' }} display={'flex'}> */}
            <Box padding={2} color={'primary'} display={'flex'}>
                <TextField
                    autoFocus
                    fullWidth
                    size="small"
                    onChange={(e) => handleChangeMessage(e)}
                    // multiline
                    maxRows={4}
                    id="textField_message"
                    // label={message}
                    variant="outlined"
                    value={message}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            attHistory()
                        }
                    }}
                />
                <IconButton
                    type="submit"
                    onClick={() => attHistory()}
                    disabled={message === '' || isLoading}
                >
                    <SendOutlined color="primary" />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'none', sm: 'flex' } }}>
            </Box>
        </>
    )
}
