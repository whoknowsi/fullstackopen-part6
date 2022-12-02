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

const upVoteAnecdote = async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${BASE_URL}/${anecdote.id}`, updatedAnecdote)
    return response.data
}

// eslint-disable-next-line
export default {
    getAll,
    createNew,
    upVoteAnecdote
} 
