# todos

This project demonstrates use of [Sazerac](http://github.com/mikec/sazerac) with a [Redux](http://redux.js.org/) app.

It's a copy of Redux's [Example: Todo List](http://redux.js.org/docs/basics/ExampleTodoList.html) with the tests refactored. The [original project can be found here](https://github.com/reactjs/redux/tree/d91ed56a9b75a1ab58684db49cd36a7fc0afefea/examples/todos)

## Data-drive testing with snap-shot

I have updated the tests to use [snap-shot](https://github.com/bahmutov/snap-shot).
See how it tests individual action in
[todos/src/actions/index.spec.js](todos/src/actions/index.spec.js) and
reducer [todos/src/reducers/todos.spec.js](todos/src/reducers/todos.spec.js)
files.

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
