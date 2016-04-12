import {FeatureInterface} from "./FeatureInterface";

export class TemplateLiterals implements FeatureInterface {
  run() {
    this.stringInterpolation()
    this.customInterpolation()
    this.rawStringAccess()
  }

  stringInterpolation(): any {
    var customer = { name: "Foo" }
    var card = { amount: 7, product: "Bar", unitprice: 42 }
    var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

    document.write('\n' + message);
  }

  customInterpolation() {
    // get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
  }

  rawStringAccess() {
    // does not work with TypeScript
    /*
    function quux (strings, ...values) {
      strings[0] === "foo\n"
      strings[1] === "bar"
      strings.raw[0] === "foo\\n"
      strings.raw[1] === "bar"
      values[0] === 42
    }
    quux `foo\n${ 42 }bar`

    String.raw `foo\n${ 42 }bar` === "foo\\n42bar"
    */
  }
}
