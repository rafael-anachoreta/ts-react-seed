## TypeScript React Seed

[![Build Status](https://dev.azure.com/rafaelanachoreta/ts-react-seed/_apis/build/status/rafael-anachoreta.ts-react-seed?branchName=master)](https://dev.azure.com/rafaelanachoreta/ts-react-seed/_build/latest?definitionId=2&branchName=master)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)

This is a seed project for a web application built with TypeScript. It contains all the dependencies you would need to build a new web project in React, such as:

-   React
-   Webpack and Babel
-   Prettier and ESLint
-   Jest and React Testing Library
-   Storybook
-   Cypress
-   Azure Pipelines

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

To run [Storybook](https://storybook.js.org/):

```
yarn storybook
```

To run [Cypress](https://www.cypress.io/), make sure you have your application running, then do:

```
yarn cypress
```
