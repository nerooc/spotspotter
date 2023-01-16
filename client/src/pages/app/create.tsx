import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
	color: black;
`;

const LocationAddress = styled.div``;

const CreateLocationPage = () => {
	return (
		<LocationContainer>
			Create new location
			<LocationAddress>
				<form>
					<label htmlFor="title">Title</label>
					<input id="title" type="text" />

					<label htmlFor="description">Description</label>
					<textarea id="description" />

					<label htmlFor="country">Country</label>
					<input id="country" type="text" />

					<label htmlFor="city">City</label>
					<input id="city" type="text" />

					<label htmlFor="street">Street</label>
					<input id="street" type="text" />

					<label htmlFor="number">Number</label>
					<input id="number" type="text" />
				</form>
			</LocationAddress>
		</LocationContainer>
	);
};

export default CreateLocationPage;
