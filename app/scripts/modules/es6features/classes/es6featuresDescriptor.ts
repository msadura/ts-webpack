import {FeatureFactory} from "./FeatureFactory";

export class ES6featuresDescriptor {
  features: string[] = [
    'Constants',
    'Scoping',
    'ArrowFunctions',
    'ExtendedParameterHandling',
    'TemplateLiterals',
    'ExtendedLiterals',
    'EnchancedRegularExpression',
    'EnchancedObjectProperties',
    'DestructuringAssignment',
    'Modules',
    'Classes'
  ]
  factory: FeatureFactory

  constructor(factory: FeatureFactory) {
    this.factory = factory;
  }

  list() {
    this.features.forEach((featureName) => {
      this.factory.getInstance(featureName);
    });
  }
}
