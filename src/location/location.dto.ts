export class LocationDto {
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
}
