import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpAllExceptionFilter implements ExceptionFilter {
  /**
   * @description Creates an instance of the HttpAllExceptionFilter.
   * @param {Logger} logger - An optional logger instance.
   */
  constructor(
    private readonly logger = new Logger(HttpAllExceptionFilter.name),
  ) {}

  /**
   * @description Handles HTTP exceptions, logs error details, and sends a standardized response.
   * @param {HttpException} exception - The caught exception.
   * @param {ArgumentsHost} host - The host containing request and response objects.
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(
      `Http Status: ${status} Error Message: ${JSON.stringify(message)}`,
    );

    response.status(status).json({
      path: request.url,
      timestamp: new Date().toISOString(),
      errorList: message,
    });
  }
}
