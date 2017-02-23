# Sazerac Example

Some example projects to demonstrate the use of [Sazerac](http://github.com/mikec/sazerac)

## Data-drive testing with snap-shot

I have updated the "todos" tests to use [snap-shot](https://github.com/bahmutov/snap-shot).
See how it tests individual action in
[todos/src/actions/index.spec.js](todos/src/actions/index.spec.js) and
reducer [todos/src/reducers/todos.spec.js](todos/src/reducers/todos.spec.js)
files. You can see comparison in [https://github.com/mikec/sazerac-example/compare/master...bahmutov:snap-shot?expand=1#diff-12cfe92b8b6a6206494b14656830fd53](https://github.com/mikec/sazerac-example/compare/master...bahmutov:snap-shot?expand=1#diff-12cfe92b8b6a6206494b14656830fd53)

```js
// todos.spec.js
import todos from './todos'
import snapshot from 'snap-shot'
// a helper function for clarity to avoid all the nested arrays
const given = (state, action) => [state, action]
it('updates todos based on actions', () => {
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
```

The [todos snapshot file](todos/__snapshots__/todos.spec.js.snap-shot)
shows the clear inputs and expectations

```js
exports['updates todos based on actions 1'] = {
  "name": "todos",
  "behavior": [
    {
      "given": [
        null,
        {}
      ],
      "expect": []
    },
    {
      "given": [
        [],
        {
          "type": "ADD_TODO",
          "text": "Run the tests",
          "id": 0
        }
      ],
      "expect": [
        {
          "id": 0,
          "text": "Run the tests",
          "completed": false
        }
      ]
    }
    ...
  ]
}
```
