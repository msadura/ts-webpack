import {AbstractLogger} from "./AbstractLogger";

export class ConsoleLogger extends AbstractLogger {
  protected static newline: string = "\n"
  protected static space: string = " "

  protected format(log: any): string {
    let consoleMessage: string = '';
    Object.keys(log).forEach((featureName) => {
      consoleMessage += `\nFeature: ${featureName}\n`;
      if (typeof log[featureName] !== "object") {
        return;
      }
      Object.keys(log[featureName]).forEach((subfeatureName) => {
        consoleMessage += ConsoleLogger.space + ConsoleLogger.space + '|- ' + subfeatureName + '\n'
      })
    });
    return consoleMessage;
  };

  protected display(formattedLog: string): void {
    console.log(formattedLog);
  }
}
