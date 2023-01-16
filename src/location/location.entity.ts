import { CosmosDateTime, CosmosPartitionKey } from '@nestjs/azure-database';

@CosmosPartitionKey('id')
export class Location {
	id?: string;
	title: string;
	description: string;
	address: {
		country: string;
		street: string;
		city: string;
		number: number;
	};
	location: {
		x: number;
		y: number;
	};
	@CosmosDateTime() createdAt: Date;
}
