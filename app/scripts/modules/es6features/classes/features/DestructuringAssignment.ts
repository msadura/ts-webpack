import {FeatureInterface} from "./FeatureInterface";

export class DestructuringAssignment implements FeatureInterface {
  constructor() {
    this.arrayMatching()
    this.objectMatchingShorthandNotation()
    this.objectMatchingDeepMatching()
    this.parameterContetMatching()
    this.failSoftDestructuring()
  }

  arrayMatching() {
    var list = [ 1, 2, 3 ]
    var [ a, , b ] = list

    // TypeScript error
    // Type 'any[]' is not assignable to type 'number'.
    // [ b, a ] = [ a, b ]
  }

  objectMatchingShorthandNotation() {
    // getASTNode to define
    // var { op, lhs, rhs } = getASTNode()
  }

  objectMatchingDeepMatching() {
    // getASTNode to define
    // var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
  }

  parameterContetMatching() {
    function f ([ name, val ]) {
      console.log(name, val)
    }
    function g ({ name: n, val: v }) {
      console.log(n, v)
    }
    function h ({ name, val }) {
      console.log(name, val)
    }
    f([ "bar", 42 ])
    g({ name: "foo", val:  7 })
    h({ name: "bar", val: 42 })
  }

  failSoftDestructuring() {
    var list = [ 7, 42 ]
    var [ a = 1, b = 2, c = 3, d ] = list
    a === 7
    b === 42
    c === 3
    d === undefined
  }
}

