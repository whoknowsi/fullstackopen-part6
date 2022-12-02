const initialState = { message: '', timeout: null }

const notificationReducer = (state = initialState, action) => {
    state.timeout && clearTimeout(state.timeout)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return initialState
        default: return state
    }
}

export const setNotification = (message, timeout) => {
    return {
        type: 'SET_NOTIFICATION',
        data: {
            message,
            timeout
        }
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer