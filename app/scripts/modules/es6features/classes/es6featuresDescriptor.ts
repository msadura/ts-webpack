import {Constants} from "./features/Constants";
import {Scoping} from "./features/Scoping";
import {ArrowFunctions} from "./features/ArrowFunctions";
import {ExtendedParameterHandling} from "./features/ExtendedParameterHandling";
import {TemplateLiterals} from "./features/TemplateLiterals";
import {FeatureFactory} from "./FeatureFactory";


export class ES6featuresDescriptor {
  factory: FeatureFactory

  constructor(factory: FeatureFactory) {
    this.factory = factory;
  }

  list() {
    this.factory.getInstance('Constants')
    this.factory.getInstance('Scoping')
    this.factory.getInstance('ArrowFunctions')
    this.factory.getInstance('ExtendedParameterHandling')
    this.factory.getInstance('TemplateLiterals')
  }
}
