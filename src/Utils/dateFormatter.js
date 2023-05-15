const DateFormatter = (value = Date(), withHour = false, withSeconds = false, language = 'pt-BR') => {

    let temp = new Date(value)

    let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };

    if (withHour) {
        options = {
            ...options,
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        }
    }

    if (withSeconds) {
        options = {
            ...options,
            seconds: "numeric",
        }
    }


    let response = new Intl.DateTimeFormat(language, options).format(temp)

    return response;
}

export default DateFormatter;
