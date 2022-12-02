import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    // Uncontrolled form (see https://reactjs.org/docs/uncontrolled-components.html)
    const handleCreateAnecdote = (evt) => {
        evt.preventDefault()
        const anecdote = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
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