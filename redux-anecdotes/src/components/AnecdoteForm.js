import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, setNotification }) => {

    // Uncontrolled form (see https://reactjs.org/docs/uncontrolled-components.html)
    const handleCreateAnecdote = (evt) => {
        evt.preventDefault()
        const anecdote = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        createAnecdote(anecdote)
        setNotification(`You created: '${anecdote}'`, 5)
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

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)