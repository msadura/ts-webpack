import {ES6featuresDescriptor} from "./classes/ES6featuresDescriptor"

import {FeatureFactory} from "./classes/FeatureFactory";

export module ES6
{
  let features:ES6featuresDescriptor = new ES6featuresDescriptor(new FeatureFactory())
  features.list()
}
