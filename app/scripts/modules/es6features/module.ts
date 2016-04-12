import {ES6featuresDescriptor} from "./classes/ES6featuresDescriptor"
import {FeatureFactory} from "./classes/FeatureFactory";
import {ConsoleLogger, ScreenLogger} from "../logger/module"

export module ES6
{
  let descriptor:ES6featuresDescriptor = new ES6featuresDescriptor(
    new FeatureFactory(),
    new ScreenLogger()
  )
  descriptor.list();
}


