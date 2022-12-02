import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  // Uncontrolled form (see https://reactjs.org/docs/uncontrolled-components.html)
  const handleCreateAnecdote = (evt) => {
    evt.preventDefault()
    const anecdote = evt.target.anecdote.value
    evt.target.anecdote.value = '' 
    dispatch(createAnecdote(anecdote))
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleCreateAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App