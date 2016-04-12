export abstract class AbstractFeature {

  public run(): { [key:string]: string; } {
    let ret: any = {};

    Object.keys(this.constructor.prototype).forEach((methodName) => {
      if (methodName === "run") {
        return;
      }
      try {
        ret[methodName] = this[methodName]();
      }
      catch (e) {
        ret[methodName] = e.toString();
      }
    });
    return ret;
  }

}
