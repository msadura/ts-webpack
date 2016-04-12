import {FeatureInterface} from "./features/FeatureInterface";

export class FeatureFactory {
  private static basePath: string = './features/';

  public getInstance(featureClassName: string): FeatureInterface {
    let featureClass = require(FeatureFactory.getFeatureClassPath(featureClassName));
    return new featureClass[featureClassName]();
  }

  private static getFeatureClassPath(featureGroupName: string): string {
    return FeatureFactory.basePath + featureGroupName;
  }
}
