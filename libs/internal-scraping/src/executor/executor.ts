export interface Executor<T> {
  execute(executionId: string): Promise<T>;
  close(): Promise<void>;
}
