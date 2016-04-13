export abstract class AbstractLogger {
  protected static newline: string
  protected static space: string

  public log(logObj: any): void {
    this.display(logObj.length ? logObj : this.format(logObj));
  }

  protected abstract format(logObj: { [key:string]: string[]; }): string
  protected abstract display(formattedLog): void
}
