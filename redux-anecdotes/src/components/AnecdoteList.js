import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'
import anecdoteService from '../services/anecdotes'
const mapStateToAnecdotesSorteredAndFiltered = (state) => {
    return state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.value)).sort((a, b) => b.votes - a.votes)
}

const AnecdoteList = () => {
    const anecdotes = useSelector(mapStateToAnecdotesSorteredAndFiltered)
    const dispatch = useDispatch()

    useEffect(() => {
        const getAnecdotes = async () => {
            const anecdotes = await anecdoteService.getAll()
            dispatch(initializeAnecdotes(anecdotes))
        }
        getAnecdotes()
    }, [dispatch])


    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id))
        const notificationTimeout = setTimeout(() => dispatch(clearNotification()), 5000)
        dispatch(setNotification(`You voted for: '${anecdote.content}'`, notificationTimeout))
    }

    return (
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>

    )
}

export default AnecdoteList