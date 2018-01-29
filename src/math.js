/* @flow */

type NumberSequenceType = Array<number>

const sum = (sequence: NumberSequenceType = []): number => {
  return sequence.reduce((sum, num) => sum + num, 0)
}

const multiply = (sequence: NumberSequenceType = []): number => {
  return sequence.reduce((sum, num) => sum * num, 1)
}

const concat = (sequence: NumberSequenceType = []): string => {
  return sequence.reduce((sum, num) => sum + num, '')
}

export default {
  sum,
  multiply,
  concat,
}
