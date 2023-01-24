import { Controller, Get, UnprocessableEntityException } from '@nestjs/common';
import { LocationDto } from './location.dto';
import { InjectModel } from '@nestjs/azure-database';
import { Location } from './location.entity';
import { Body, Delete, HttpCode, Param, Post } from '@nestjs/common/decorators';

@Controller('location')
export class LocationController {
	constructor(
		@InjectModel(Location)
		private readonly container,
	) {}

	@Post()
	async create(@Body() locationDto: LocationDto) {
		const { resource } = await this.container.items.create(locationDto);
		return resource;
	}

	@Get('all')
	async getLocations() {
		try {
			const querySpec = {
				query: 'SELECT * FROM c',
			};
			const { resources } = await this.container.items.query(querySpec).fetchAll();

			return resources;
		} catch (error) {
			// Entity not found
			throw new UnprocessableEntityException(error);
		}
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		try {
			const querySpec = {
				query: 'SELECT * FROM root r WHERE r.id=@id',
				parameters: [
					{
						name: '@id',
						value: id,
					},
				],
			};
			const { resources } = await this.container.items.query(querySpec).fetchAll();
			return resources[0];
		} catch (error) {
			// Entity not found
			throw new UnprocessableEntityException(error);
		}
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		try {
			await this.container.item(id).delete();
		} catch (error) {
			throw new UnprocessableEntityException(error);
		}
	}

	@Post('/badrequest')
	@HttpCode(500)
	async badReqest() {}
}
