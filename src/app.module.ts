import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client/build'),
			exclude: ['/api*'],
		}),
		AzureCosmosDbModule.forRoot({
			dbName: process.env.AZURE_COSMOS_DB_NAME,
			endpoint: process.env.AZURE_COSMOS_DB_ENDPOINT,
			key: process.env.AZURE_COSMOS_DB_KEY,
		}),
		LocationModule,
	],
})
export class AppModule {}
