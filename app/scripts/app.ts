import {ES6featureDescriptorAdapter} from "./modules/es6features/module"
import {ConsoleLogger, ScreenLogger} from "./modules/logger/module"

new ES6featureDescriptorAdapter(
  new ScreenLogger()
).list()



