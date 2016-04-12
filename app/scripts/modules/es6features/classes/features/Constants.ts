import {AbstractFeature} from "./AbstractFeature";

export class Constants extends AbstractFeature {
  constants(): any {
    const stala = 1
    return "\n".concat(stala.toString());
  }
}
