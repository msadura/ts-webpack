//  hack - we are declaring this to let WebPack work properly
declare function require(module: string):any

require("./modules/main/module.ts");
require("./modules/moduleName/module.ts");

