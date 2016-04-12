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

  run (featureNames?: string[]): any {
    let ret: any[] = [];
    let listedFeatures: string[] = (featureNames) ? featureNames : this.features
    listedFeatures.forEach((featureName) => {
      ret[featureName] = this.factory.getInstance(featureName).run();
    });
    return ret;
  }

  list (featureNames?: string[]): any {
    let log = this.run(featureNames);

    this.log(log);
  }

  log (log: any[]) {
    Object.keys(log).forEach((featureName) => {
      let consoleMessage = `\nFeature: ${featureName}\n`;
      if (typeof log[featureName] !== "object") {
        return;
      }
      Object.keys(log[featureName]).forEach((subfeatureName) => {
        consoleMessage += '  |- ' + subfeatureName + '\n'
      })
      console.log(consoleMessage);
    });
  }
}
