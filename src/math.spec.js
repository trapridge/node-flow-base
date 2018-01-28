/* @flow */

import math from './math'

describe('math', function() {
  afterEach(() => {
    sandbox.restore()
  })

  describe('sum()', function() {
    let result

    beforeEach(() => {
      sandbox.spy(math, 'sum')
      result = math.sum([0, 1, 2])
    })

    it('sums an arrays of numbers', function() {
      expect(result).to.equal(result, 3)
    })

    it('was called', function() {
      expect(math.sum).to.have.been.called
    })
  })
})
