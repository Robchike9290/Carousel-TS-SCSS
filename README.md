# CAROUSEL - SCSS/TS

This project was created using Create React App and is based around SCSS and Typescript.  It renders a set of four cards in the center of the screen, labeled "Card One", "Card Two", "Card Three", and "Card Four".  Starting with rendering the lowest-numbered card, with a small part of "Card Two" visibly stacked behind it, after a random amont of time, this card fades to the left, revealing "Card Two".  "Card Three" will then be partially visible behind "Card Two".  This cycle then repeats every 4-6 seconds indefinitely, with "Card One" appearing in the foreground again once "Card Four" fades.

## Technologies Used

    - @testing-library/jest-dom: 5.16.4,
    - @testing-library/react: 13.3.0,
    - @testing-library/user-event": 13.5.0,
    - @types/jest: 28.1.3,
    - @types/node: 18.0.0,
    - @types/react: 18.0.14,
    - @types/react-dom: 18.0.5,
    - react: 18.2.0,
    - react-dom: 18.2.0,
    - react-scripts: 5.0.1,
    - sass: 1.53.0,
    - typescript: 4.7.4,
    - web-vitals: 2.1.4

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Author

Robert Czajka
