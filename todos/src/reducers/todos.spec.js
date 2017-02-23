import todos from './todos'
import snapshot from 'snap-shot'

// a helper function for clarity to avoid all the nested arrays
const given = (state, action) => [state, action]
// we could even go further if needed
// given(state(...items), action) => [items, action] or something

// we can use in a couple of tests
const addAction = {
  type: 'ADD_TODO',
  text: 'Run the tests',
  id: 0
}

it('updates todos based on actions', () => {
  const runTodo = {
    text: 'Run the tests',
    completed: false,
    id: 0
  }

  const useAction = {
    type: 'ADD_TODO',
    text: 'Use Redux',
    id: 1
  }

  const study = {
    text: 'Study hard',
    completed: false,
    id: 1
  }

  const toggleAction = {
    type: 'TOGGLE_TODO',
    id: 1
  }

  snapshot(todos,
    given(undefined, {}),
    given([], addAction),
    given([runTodo], useAction),
    given([runTodo, useAction], toggleAction),
    // toggles same item twice
    // I would use a "normal" separate test here
    given(todos([study], toggleAction), toggleAction)
  )
})

// detailed error messages are probably better as test names
it('sets "id", "test" and "completed" properties', () => {
  snapshot(todos([], addAction))
  // also implicitly confirms that only a single item in the output list
})
