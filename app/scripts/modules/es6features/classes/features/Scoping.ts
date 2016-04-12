import {FeatureInterface} from "./FeatureInterface";
import {AbstractFeature} from "./AbstractFeature";

export class Scoping extends AbstractFeature {

  blockScopedVariables() {
    let a = [1,2,3,4]
    for (let i = 0; i < a.length; i++) {
      let x = a[i]
    }
    let b = [1,2,3,4];
    for (let i = 0; i < b.length; i++) {
      let y = b[i]
    }

    let callbacks = []
    for (let i = 0; i <= 2; i++) {
      callbacks[i] = function () { return i * 2 }
    }
    document.write(
      (callbacks[0]() === 0).toString(),
      (callbacks[1]() === 2).toString(),
      (callbacks[2]() === 4).toString()
    );
  }

  blockScopedFunctions() {
    {
      // will not work with TypeScript - Duplicate function implementation error
      /*
      function foo () { return 1 }
      foo() === 1
      {
        function foo () { return 2 }
        foo() === 2
      }
      foo() === 1
      */
    }
  }
}
