import { HttpException, ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';

@Catch(HttpException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    const error = exception;
    console.log(error);
    let code = typeof error.getStatus === `function` ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      typeof error.getResponse === `function` ? error.getResponse() : `Internal Server Error` || error.message;

    let responseBody: any;

    if (typeof message === 'string') responseBody = { message };
    else if (typeof message.message === 'string') responseBody = { message: message.message };
    else if (Array.isArray(message.message)) {
      code = HttpStatus.UNPROCESSABLE_ENTITY;
      responseBody = { message: 'Validation Failed', error: message.message.map(x => this.mapError(x, '')) };
    } else {
      responseBody = { message: message.message };
    }

    res.status(code).json(responseBody);

    if (code >= 500) console.error(message, error);
    else console.log(responseBody);
  }

  private mapError(err: ValidationError, name: string) {
    const field = `${name !== '' && name !== err.property ? `${name}.` : ''}${err.property}`;
    if (err.constraints) {
      return {
        field,
        validation: Object.keys(err.constraints)[0],
        message: err.constraints[Object.keys(err.constraints)[0]].replace(err.property, field)
      };
    } else return this.mapError(err.children[0], field);
  }
}
