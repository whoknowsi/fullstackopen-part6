import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const mapStateToAnecdotesSorteredAndFiltered = (state) => {
    return state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.value)).sort((a, b) => b.votes - a.votes)
}

const AnecdoteList = () => {
    const anecdotes = useSelector(mapStateToAnecdotesSorteredAndFiltered)
    const dispatch = useDispatch()

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