import {FeatureInterface} from "./FeatureInterface";

export class ExtendedParameterHandling implements FeatureInterface {
  constructor() {
    this.defaultParameterValues()
    this.restParameter()
    this.spreadOperator()
  }

  defaultParameterValues() {
    function f (x, y = 7, z = 42) {
      return x + y + z
    }
    f(1) === 50
  }

  restParameter() {
    function f (x, y, ...a) {
      return (x + y) * a.length
    }
    f(1, 2, "hello", true, 7) === 9
  }

  spreadOperator(): any {
    function f (x, y, ...a) {
      return (x + y) * a.length
    }

    var params = [ "hello", true, 7 ]
    var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
    f(1, 2, ...params) === 9

    /*
     var str = "foo"
     var chars = [ ...str ] // [ "f", "o", "o" ]
     */
  }
}
