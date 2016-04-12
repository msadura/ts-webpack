import {AbstractFeature} from "./features/AbstractFeature";

export class FeatureFactory {
  private static basePath: string = './features/';

  public getInstance(featureClassName: string): AbstractFeature {
    let featureClass = require(FeatureFactory.getFeatureClassPath(featureClassName));
    return new featureClass[featureClassName]();
  }

  private static getFeatureClassPath(featureGroupName: string): string {
    return FeatureFactory.basePath + featureGroupName;
  }
}
