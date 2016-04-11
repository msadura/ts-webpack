import {Constants} from "./features/Constants";
import {Scoping} from "./features/Scoping";
import {ArrowFunctions} from "./features/ArrowFunctions";
import {ExtendedParameterHandling} from "./features/ExtendedParameterHandling";
import {TemplateLiterals} from "./features/TemplateLiterals";
import {FeatureFactory} from "./FeatureFactory";


export class ES6featuresDescriptor {
  features: string[] = [
    'Constants',
    'Scoping',
    'ArrowFunctions',
    'ExtendedParameterHandling',
    'TemplateLiterals'
  ]
  factory: FeatureFactory

  constructor(factory: FeatureFactory) {
    this.factory = factory;
  }

  list() {
    var self = this;
    this.features.forEach(function(featureName){
      self.factory.getInstance(featureName);
    });
  }
}
