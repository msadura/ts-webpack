import {Constants} from "./classes/features/Constants";
import {Scoping} from "./classes/features/Scoping";
import {ArrowFunctions} from "./classes/features/ArrowFunctions";
import {ExtendedParameterHandling} from "./classes/features/ExtendedParameterHandling";
import {TemplateLiterals} from "./classes/features/TemplateLiterals";

import {ES6featuresDescriptor} from "./classes/es6featuresDescriptor"

import {FeatureFactory} from "./classes/FeatureFactory";

export module ES6
{
  let features:ES6featuresDescriptor = new ES6featuresDescriptor(new FeatureFactory())
  features.list()
}
