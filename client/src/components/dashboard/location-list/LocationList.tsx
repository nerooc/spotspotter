import React, { useEffect, useState } from 'react';
import { api } from '../../../api';
import { Location } from '../../../types';
import { LocationItem } from '../location/LocationItem';
import styled from 'styled-components';

type LocationList = {};

export const LocationList = (props: LocationList) => {
	const [locations, setLocations] = useState<Location[]>([]);

	useEffect(() => {
		getLocations();
	}, []);

	async function getLocations() {
		const { data } = await api.get('/location/all');
		if (data) {
			setLocations(data);
		}
	}

	const LocationListContainer = styled.ul`
		height: 80%;
		width: 100%;
		margin-top: 20px;
		overflow-y: auto;
	`;

	return (
		<LocationListContainer>
			{locations ? locations.map((location) => <LocationItem key={location.id} location={location} />) : 'No locations'}
		</LocationListContainer>
	);
};
