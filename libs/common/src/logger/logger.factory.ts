import { Logger } from 'tslog';

let logger: Logger = new Logger();
export class LoggerFactory {
  public static getInstance() {
    if (logger == null) {
      logger = new Logger();
    }

    return logger;
  }
}
