const sendFirstRequest = (city) => {
    return {
        type: "FIRST_REQUEST",
        city: city
    }
}

const sendAdditionalRequests = (city) => {
    return {
        type: "ADDITIONAL_REQUESTS",
        city: city
    }
}

export default {
    sendFirstRequest,
    sendAdditionalRequests
}