import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Catch(EntityNotFoundError)
export class ModelNotFoundException implements ExceptionFilter {
  /**
   * @description Handles EntityNotFoundError exceptions and sends a custom response for model not found errors.
   * @param {EntityNotFoundError} exception - The caught exception.
   * @param {ArgumentsHost} host - The host containing the response object.
   */
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    return response.status(HttpStatus.NOT_FOUND).json({
      error: {
        error: 'Not Found',
        message: exception.message,
      },
    });
  }
}
