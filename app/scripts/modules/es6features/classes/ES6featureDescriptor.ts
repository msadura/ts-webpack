import {FeatureFactory} from "./FeatureFactory";
import {LoggerInterface} from "./LoggerInterface"

export { ES6featureDescriptor }

class ES6featureDescriptor {
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
  constructor(
    private factory: FeatureFactory,
    private logger?: LoggerInterface
  ) {}


  run (featureNames?: string[]): { [key:string]: { [key:string]: string; }; } {
    let ret: any = {}
    let listedFeatures: string[] = (featureNames) ? featureNames : this.features
    listedFeatures.forEach((featureName) => {
      ret[featureName] = this.factory.getInstance(featureName).run();
    })
    return ret
  }


  list (featureNames?: string[]): void {
    this.log(" ==== ES6 Features ==== ")
    let log = this.run(featureNames)
    this.log(log);
  }


  log (log: any) {
    if (!this.logger) {
      return false
    }
    this.logger.log(log)
  }
}

