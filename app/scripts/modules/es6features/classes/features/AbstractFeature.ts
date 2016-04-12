export abstract class AbstractFeature {
  run() {
    let ret: string[] = [];
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
