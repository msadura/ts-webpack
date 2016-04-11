import {FeatureInterface} from "./FeatureInterface";

export class FeatureFactory {
  static basePath: string = './features/';

  getInstance(featureGroupName: string): FeatureInterface {
    let featureClass = require(FeatureFactory.getFeatureGroupPath(featureGroupName));
    return new featureClass[featureGroupName]();
  }

  static getFeatureGroupPath(featureGroupName: String): string {
    return FeatureFactory.basePath + featureGroupName;
  }
}
