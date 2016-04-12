import {FeatureFactory} from "./FeatureFactory";

export class ES6featuresDescriptor {
  private features: string[] = [
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

  // in this way we declare class property and set its value
  constructor(private factory: FeatureFactory) {}

  list(featureNames?: string[]): any {
    let listedFeatures: string[] = (featureNames) ? featureNames : this.features
    listedFeatures.forEach((featureName) => {
      this.factory.getInstance(featureName).run();
    });
  }
}
