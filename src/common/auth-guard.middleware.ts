import { IMiddleware } from './middleware.interfacce';
import { NextFunction, Request, Response } from 'express';

export class AuthGuardMiddleware implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}

		res.status(401).send('Unauthorized');
	}
}
