import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    // Uncontrolled form (see https://reactjs.org/docs/uncontrolled-components.html)
    const handleCreateAnecdote = (evt) => {
        evt.preventDefault()
        const anecdote = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        const notificationTimeout = setTimeout(() => dispatch(clearNotification()), 5000)
        dispatch(setNotification(`You created: '${anecdote}'`, notificationTimeout)) 
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleCreateAnecdote}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </>

    )
}

export default AnecdoteForm