import { IConfigService } from './config.service.interface';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();

		if (result.error || !result.parsed) {
			this.logger.error(`[${ConfigService.name}] can't read .env file`);
		} else {
			this.logger.log(`[${ConfigService.name}] .env config loaded`);
			this.config = result.parsed;
		}
	}

	get(key: keyof DotenvParseOutput): string {
		return this.config[key];
	}
}
