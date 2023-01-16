if (process.env.NODE_ENV !== 'production') {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	require('dotenv').config();
}

import * as applicationInsights from 'applicationinsights';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

applicationInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING).setSendLiveMetrics(true).start();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.setGlobalPrefix('api');
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
