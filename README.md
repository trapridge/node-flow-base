# node-flow-base

Development environment setup for Node.js development with Flow.

What's included in the setup:

 * Flow with global and dependency typedefs configured
 * ESLint with recommended rules and Prettier and Flow plugins
 * Pre-commit and pre-push Git hooks
 * Babel with _env_ and _flow_ presets
 * Testing stack with mocha, Sinon, Chai, sinon-chai and nyc for coverage

Everything should be OS agnostic.

## Usage

#### Setup

`npm install`

To set up Flow, run:

`npm run setup:flow`

### Running

`npm start` (for development)

`npm run start:release` (for production)

### Testing

`npm test`

To produce coverage report:

`npm run coverage`

To run tests and linter (ESLint, Prettier and Flow rules) continuously, run:

`npm run watch`
