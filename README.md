## TypeScript React Seed
This is a seed project for a web application built with TypeScript. It contains all the dependencies you would need to build a new web project in React, such as:

- React
- Webpack and Babel
- Prettier and ESLint
- Jest
- Storybook
- Cypress
- Azure Pipelines

## Getting Started

### Pre-requisites

-   Node
-   Git

## Usage

First, install all the dependencies with `yarn` or `npm`

```
yarn
```

To start the project locally with [Webpack](https://webpack.js.org/), just do:

```
yarn start
```

To build the project on the `/dist` folder and types on `/build`, do:

```
yarn build
```

To run the tests using [Jest](https://jestjs.io/):

```
yarn test
```

To run [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and fix the formatting of your code:

```
yarn lint
```

To run storybook on port 9001:

```
yarn storybook
```

To run cypress, make sure you have your application running, then do:
```
yarn cypress
```
