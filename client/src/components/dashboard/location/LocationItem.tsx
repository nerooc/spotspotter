import React from 'react';
import styled from 'styled-components';
import { Location } from '@/types';
import { useRouter } from 'next/router';
import { appRoutes } from '@/constants';

type LocationProps = {
	location: Location;
};

const LocationContainer = styled.li`
	list-style: none;
	border-bottom: 1px solid lightgrey;
	color: black;
	padding: 10px;

	&:hover {
		cursor: pointer;
		background-color: lightgrey;
	}
`;

const LocationTitle = styled.h3``;

const LocationAddress = styled.div``;

export const LocationItem = ({ location }: LocationProps) => {
	const { id, title, address } = location;
	const router = useRouter();

	return (
		<LocationContainer onClick={() => router.push(`${appRoutes.LOCATION_PAGE}/${id}`)}>
			<LocationTitle>{title}</LocationTitle>
			<LocationAddress>
				<p>
					{address.country}, {address.city}
				</p>
				<p>
					{address.street} {address.number}
				</p>
			</LocationAddress>
		</LocationContainer>
	);
};
