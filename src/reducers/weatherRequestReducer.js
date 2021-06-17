
export const initialState = {
    loading: false,
    error: null,
    data: null,
}

const weatherRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND':
            return {...state,
                loading: true,
                error: null,
                data: null,
            };
        case 'RESPONSE':
            console.log(state);
            console.log(action.responseData);
            return {...state,
                loading: false,
                data: action.responseData
            };
        case 'ERROR':
            return {...state,
                loading: false,
                error: action.errorMessage,
                data: null
            };
        case 'CLEAR-ERROR':
            return {...state,
                error:null
            };
        default:
            return state;
            // throw new Error('Should not get there')
    }
}

export default weatherRequestReducer;