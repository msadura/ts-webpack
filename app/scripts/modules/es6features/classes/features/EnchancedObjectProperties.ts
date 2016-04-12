import {AbstractFeature} from "./AbstractFeature";

export class EnchancedObjectProperties extends AbstractFeature {

  propertyShorthand() {
    let x, y
    let obj = { x, y }
  }

  computedPropertyNames() {
    function quux() { return 'something' }

    let obj = {
      foo: "bar",
      [ "baz" + quux() ]: 42
    }
  }

  methodProperties() {
    // error in TypeScript
    // Generators are only available when targeting ECMAScript 6 or higher.
    /*
    let obj = {
      foo (a, b) {

      },
      bar (x, y) {

      },
      *quux (x, y) {

      }
    }
    */
  }
}
