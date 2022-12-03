import { connect } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const sortAndFilterAnecdotes = (anecdotes, { value }) => {
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(value.toLowerCase())).sort((a, b) => b.votes - a.votes)
}

const AnecdoteList = ({ initializeAnecdotes, voteAnecdote, setNotification, anecdotes }) => {
    useEffect(() => {
        initializeAnecdotes()
    }, [initializeAnecdotes])

    const handleVote = (anecdote) => {
        voteAnecdote(anecdote)
        setNotification(`You voted for: '${anecdote.content}'`, 5)
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

const mapStateToProps = ({ anecdotes, filter }) => {
    return {
        anecdotes: sortAndFilterAnecdotes(anecdotes, filter)
    }
}
const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    initializeAnecdotes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)