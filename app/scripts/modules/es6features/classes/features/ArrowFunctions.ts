import {AbstractFeature} from "./AbstractFeature";

export class ArrowFunctions extends AbstractFeature {
  nums: Array<number> = [];
  fives: Array<number> = [];

  expressionBodies() {
    let evens = new Array(3)

    let odds  = evens.map(v => v + 1)
    let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
    let nums  = evens.map((v, i) => v + i)
  }

  statementBodies() {
    let nums = new Array(10)
    let fives = new Array
    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v)
    })
  }

  lexicalThis() {
    this.nums.forEach((v) => {
      if (v % 5 === 0)
        this.fives.push(v)
    })
  }
}
