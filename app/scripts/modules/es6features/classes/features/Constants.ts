import {FeatureInterface} from "./FeatureInterface";

export class Constants implements FeatureInterface {
  constructor() {
    this.constants();
  }

  constants(): any {
    const stala = 1
    document.write("\n".concat(stala.toString()));
  }
}
