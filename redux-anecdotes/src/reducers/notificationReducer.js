const initialState = { message: '', timeout: null }

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            state.timeout && clearTimeout(state.timeout)
            return action.data
        case 'CLEAR_NOTIFICATION':
            return initialState
        default: return state
    }
}

export const setNotification = (message, time) => {
    return async dispatch => {
        const timeout = setTimeout(() => { dispatch({ type: 'CLEAR_NOTIFICATION' }) }, time * 1000)
        dispatch({
            type: 'SET_NOTIFICATION',
            data: {
                message,
                timeout
            }
        })
    }
}

export default notificationReducer