/* @flow */
/* eslint-disable no-unused-vars */

import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

global.sandbox = sinon.sandbox.create()
global.expect = chai.expect
