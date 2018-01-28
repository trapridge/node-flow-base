/* @flow */

type NumberSequenceType = Array<number>

const sum = (sequence: NumberSequenceType = []): number => {
  return sequence.reduce((sum, num) => sum + num, 0)
}

const test = () => {}

export default {
  sum,
  test,
}
