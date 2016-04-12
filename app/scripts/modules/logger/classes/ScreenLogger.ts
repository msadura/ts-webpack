import {AbstractLogger} from "./AbstractLogger";

export class ScreenLogger extends AbstractLogger {
  protected static newline: string = "<br/>"
  protected static space: string = "&nbsp;"


  protected format(log): string {
    let consoleMessage: string = '';
    Object.keys(log).forEach((featureName) => {
      consoleMessage += `${ScreenLogger.newline} Feature: ${featureName} ${ScreenLogger.newline}`;
      if (typeof log[featureName] !== "object") {
        return;
      }
      Object.keys(log[featureName]).forEach((subfeatureName) => {
        consoleMessage += ScreenLogger.space + ScreenLogger.space + '|- ' + subfeatureName + ScreenLogger.newline
      })
    });
    return consoleMessage;
  };

  protected display(formattedLog: string): void
  protected display(formattedLog: string[]): void
  protected display(formattedLog): void {
    document.write(formattedLog);
  }
}

