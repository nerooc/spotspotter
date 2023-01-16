import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { LocationController } from './location.controller';
import { Location } from './location.entity';

@Module({
	imports: [AzureCosmosDbModule.forFeature([{ dto: Location }])],
	controllers: [LocationController],
})
export class LocationModule {}
