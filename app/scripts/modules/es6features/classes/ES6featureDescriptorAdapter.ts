import { ES6featureDescriptor } from "./ES6featureDescriptor";
import { FeatureFactory } from "./FeatureFactory";

export class ES6featureDescriptorAdapter extends ES6featureDescriptor {
  constructor(logger) {
    super(new FeatureFactory(), logger);
  }
}
