const config = {
    url: {
        API_URL: window.location.href.includes("localhost") ?
            "http://localhost:7001" :
            null
    }
};

export default config;
