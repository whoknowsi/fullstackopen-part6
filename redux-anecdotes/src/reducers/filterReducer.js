const initialState = { value: '' }

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.data
        default: return state
    }
}

export const filter = (value) => {
    return {
        type: 'SET_FILTER',
        data: {
            value
        }
    }
}

export default filterReducer