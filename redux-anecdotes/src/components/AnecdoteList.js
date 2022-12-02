import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const mapStateToAnecdotesSorteredAndFiltered = (state) => {
    return state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.value)).sort((a, b) => b.votes - a.votes)
}

const AnecdoteList = () => {
    const anecdotes = useSelector(mapStateToAnecdotesSorteredAndFiltered)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted for: '${anecdote.content}'`, 5))
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