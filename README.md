# Kind of Super

"Kind of Super" is a text-based game that has the player create a hero of their choosing and attempt to survive a
variety of threats to their city. 

This is a demo project meant to show the ways [Variant](https://github.com/paarthenon/variant) can enable elegant
organization for a complex codebase.

### Philosophy

> To keep the code as clear as possible, I will not use any frameworks or UI libraries like chakra-ui, blueprintjs,
or TailwindCSS. The *only* dependencies will be `variant`, and `react-redux`. Vue or Angular would work just as well—in
fact variant has some delightful composability with rxjs. React was chosen because TSX files are simple, and its ability
to incorporate expressions synergizes remarkably well with pattern matching. The project has been created with 
[CRA](https://github.com/facebook/create-react-app). I will also not be demonstrating persistence, error boundaries,
or logging techniques in this tutorial, though all of these are excellent elements to consider in your real applications.
We're going to build a game in the most intuitive way.

- No component frameworks, use simple `<input>`s, `<select>`s, and `<button>`s
- No icon packages or svgs, use emoji ❤️
- No loggers or middleware
- No redux-toolkit
    - This project is meant to demonstrate that with proper language primitives, a lot of structures become unnecessary.
    Variant gives you the ability to organize by subdomain rather than by slice.
    - The `variant()` function and its supporting tools are superior to `createAction()`
    - `matcher()` provides more utility than the redux-toolkit match builder.
- No complex popovers or css tooltips. Just the `title` attribute.


****

*(CRA block follows)*

****

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
