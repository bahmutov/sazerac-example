import * as actions from './index'
import snapshot from 'snap-shot'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    snapshot(actions.addTodo('Use Redux'))
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    snapshot(actions.setVisibilityFilter('active'))
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    snapshot(actions.toggleTodo(1))
  })
})
