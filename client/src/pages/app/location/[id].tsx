import { api } from '@/api';
import { useCoordinates } from '@/containers';
import { Location } from '@/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type LocationPage = {};

const LocationContainer = styled.div`
	color: black;
`;

const LocationTitle = styled.h3``;

const LocationDescription = styled.p``;

const LocationAddress = styled.div``;

const LocationPage = (props: LocationPage) => {
	const router = useRouter();
	const { id } = router.query;
	const { setCoordinates } = useCoordinates();
	const [location, setLocation] = useState<Location>();

	useEffect(() => {
		async function getLocation() {
			const { data } = await api.get(`/location/${id}`);
			if (data) {
				setLocation(data);
				setCoordinates({ lat: data.location.x, lng: data.location.y });
			}
		}

		getLocation();
	}, []);

	return (
		<LocationContainer>
			<button onClick={() => router.push('/app')}>Test</button>
			{location ? (
				<>
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
				</>
			) : (
				'No location'
			)}
		</LocationContainer>
	);
};

export default LocationPage;
