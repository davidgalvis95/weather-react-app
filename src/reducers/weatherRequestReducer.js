
export const initialState = {
    loading: false,
    error: null,
    data: {},
}

const weatherRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND':
            return { ...state,
                loading: true,
                data: {},
                error: null,
            };
        case 'RESPONSE':
            return {...state,
                loading: false,
                data: action.responseData,
                error: null,
            };
        case 'ERROR':
            return {...state,
                loading: false,
                error: action.errorMessage,
                data: {}
            };
        case 'CLEAR-ERROR':
            return {...state,
                error: null
            };
        default:
            return state;
            // throw new Error('Should not get there')
    }
}

export default weatherRequestReducer;