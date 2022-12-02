import axios from 'axios'

const BASE_URL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(BASE_URL, object)
    return response.data
}

// eslint-disable-next-line
export default {
    getAll,
    createNew
} 
