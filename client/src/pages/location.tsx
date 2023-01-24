import { api } from '../api';
import { useCoordinates } from '../containers';
import { Location } from '../types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { blobStorage } from '../azure';

type LocationPageProps = {};

const LocationContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	width: 100%;
	gap: 20px;
`;

const LocationTitle = styled.h3``;

const LocationDescription = styled.p``;

const LocationAddress = styled.div``;

const ReturnButton = styled.button`
	width: 100px;
	height: 30px;
	cursor: pointer;
`;

const LocationPage = (props: LocationPageProps) => {
	const history = useHistory();
	const { id } = useParams();
	const { setCoordinates } = useCoordinates();
	const [location, setLocation] = useState<Location>();
	const image = blobStorage.get('public/bmw_image.jpg');

	useEffect(() => {
		async function getLocation() {
			const { data } = await api.get(`/location/${id}`);
			if (data) {
				setLocation(data);
				setCoordinates({ lat: data.location.x, lng: data.location.y });
			}
		}

		getLocation();
	}, [id, setCoordinates]);

	return (
		<LocationContainer>
			<ReturnButton onClick={() => history.push('/app')}>&lt; Back</ReturnButton>
			<h1>Location</h1>
			{location ? (
				<div>
					<LocationTitle>{location.title}</LocationTitle>
					<LocationDescription>{location.description}</LocationDescription>
					<LocationAddress>
						<p>
							{location.address.country}, {location.address.city}
						</p>
						<p>
							{location.address.street} {location.address.number}
						</p>
					</LocationAddress>
				</div>
			) : (
				'No location'
			)}
			<img src={image} alt="bmw" width="100%" style={{ padding: 40 }} />
		</LocationContainer>
	);
};

export default LocationPage;
