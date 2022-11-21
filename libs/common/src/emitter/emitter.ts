import { EventEmitter } from 'events';

export interface Processed {
  data: any;
  storeIdentification?: {
    companyName: string;
    businessRegistrationNumber: string;
    storeName: string;
    storeId: string;
  };
}

export interface Events {
  processing: [string];
  processed: [Processed];
  partialProcessed: [Processed];
  error: [Error, void];
}

export class Emitter extends EventEmitter {
  emit<T extends keyof Events>(event: T, ...args: Events[T]) {
    return super.emit(event, ...args);
  }

  on<T extends keyof Events>(
    event: T,
    listener: (...args: Events[T]) => void,
  ): this {
    return super.on(event, listener);
  }

  once<T extends keyof Events>(
    event: T,
    listener: (...args: Events[T]) => void,
  ): this {
    return super.once(event, listener);
  }
}
