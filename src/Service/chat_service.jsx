import { trackPromise } from "react-promise-tracker";
import api from "../Api";

const chat_service = {

    postMessageToAI: async (message) => {
        const response = await trackPromise(api.post(`text_query`, message));
        return response;
    },

}

export default chat_service;
