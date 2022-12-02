import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    // Uncontrolled form (see https://reactjs.org/docs/uncontrolled-components.html)
    const handleCreateAnecdote = (evt) => {
        evt.preventDefault()
        const anecdote = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(setNotification(`You created: '${anecdote}'`, 5)) 
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