import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger = new Logger(LoggingInterceptor.name);

  /**
   * @description Logs before and after a request, including the time taken.
   * @param {ExecutionContext} ctx - The execution context.
   * @param {CallHandler} next - The next call handler.
   * @returns {Observable<any>} - The observable stream.
   */
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log(`Before`);
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => this.logger.log(`After ... ${Date.now() - now}ms ⚡️`)));
  }
}
