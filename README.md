# node-flow-base

Setup for modern JS development with Flow for node.js.

What's included in the setup:

 * flow
 * eslint with recommended rules
 * prettier with recommended rules (through eslint and with some overrides)
 * esm/std (for ES6 modules without experimental flag or Babel)
 * testing with mocha, sinon, chai and nyc coverage
 * webstorm configs (tested with 2017.3.3)

## Usage

### Run

`npm start` (uses flow-node)

`npm run start-release` (removes Flow types and then runs)

### Test

`npm test` (runs tests with coverage)

`npm run test-watch` (runs tests in watch mode)

`npm check` (starts flow and lints with eslint & prettier)

### Install Flow typedefs for dependencies

`npm install -g flow-typed`

`flow-typed install`