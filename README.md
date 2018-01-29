# node-flow-base

Setup for modern JS development with Flow for node.js.

What's included in the setup:

 * Flow
 * ESLint with recommended rules
 * Prettier with recommended rules (through ESLint and with some opinionated overrides)
 * Babel with _env_ and _flow_ presets
 * Testing stack with mocha, Sinon, Chai, sinon-chai and nyc for coverage
 * Webstorm configs (tested with 2017.3.3)

## Usage

### Prerequisites

`npm install -g flow-typed` (optional)

#### Setup

`npm install`

`flow-typed install` (optional)

### Run

`npm start` (for development)

`npm run start:release` (for production)

### Test

`npm test` (runs type checking, linter and tests with coverage)

`npm run watch:test` (runs tests in watch mode)

`npm run watch:lint` (runs linter in watch mode)

`npm run watch:types` (runs type checking in watch mode)
