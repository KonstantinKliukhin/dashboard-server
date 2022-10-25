import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.interfacce';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
export class ValidateMiddleware implements IMiddleware {
	constructor(private classToValidate: ClassConstructor<object>) {}
	execute(
		{ body }: Request,
		res: Response<any, Record<string, any>>,
		next: NextFunction,
	): void {
		const instance = plainToClass(this.classToValidate, body);
		validate(instance).then((errors) => {
			if (errors.length > 0) {
				res.status(422).send(errors);
			} else {
				next();
			}
		});
	}
}
