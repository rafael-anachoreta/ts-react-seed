## TypeScript React Seed

[![Netlify Status](https://api.netlify.com/api/v1/badges/1427119a-22bb-40b5-978a-da4a09c2b31a/deploy-status)](https://app.netlify.com/sites/ts-react-seed-app/deploys)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)

This is a seed project for a web application built with TypeScript. It contains all the dependencies you would need to build a new web project in React, such as:

-   React
-   Webpack and Babel
-   ESLint
-   Jest and React Testing Library
-   Storybook
-   Cypress
-   GitHub Actions


The main app is deployed to https://ts-react-seed-app.netlify.app

Storybook is deployed to https://ts-react-seed-storybook.netlify.app

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

To run [ESLint](https://eslint.org/) and fix the formatting of your code:

```
yarn lint
```

To run [Storybook](https://storybook.js.org/):

```
yarn storybook
```

To run [Cypress](https://www.cypress.io/), make sure you have your application running, then do:

```
yarn cypress
```
