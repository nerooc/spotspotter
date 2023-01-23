import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CreateLocationPage = () => {
	const history = useHistory();

	return (
		<Container>
			<ReturnButton onClick={() => history.push('/app')}>&lt; Back</ReturnButton>
			<LocationContainer>
				<h1>Create new location</h1>
				<LocationForm>
					<label htmlFor="title">Title</label>
					<LocationInput id="title" type="text" />

					<label htmlFor="description">Description</label>
					<LocationTextArea id="description" style={{ resize: 'none' }} />

					<label htmlFor="country">Country</label>
					<LocationInput id="country" type="text" />

					<label htmlFor="city">City</label>
					<LocationInput id="city" type="text" />

					<label htmlFor="street">Street</label>
					<LocationInput id="street" type="text" />

					<label htmlFor="number">Number</label>
					<LocationInput id="number" type="text" />

					<SubmitButton type="submit">Submit</SubmitButton>
				</LocationForm>
			</LocationContainer>
		</Container>
	);
};

export default CreateLocationPage;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
`;

const ReturnButton = styled.button`
	width: 100px;
	height: 30px;
	cursor: pointer;
	margin-bottom: 20px;
`;

const LocationContainer = styled.div`
	color: black;
	width: 100%;
`;

const LocationForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 20px;
`;

const LocationInput = styled.input`
	width: 100%;
	height: 30px;
`;

const LocationTextArea = styled.textarea`
	width: 100%;
	height: 100px;
`;

const SubmitButton = styled.button`
	height: 40px;
	background-color: #34a853;
	cursor: pointer;
	border: none;
	margin-top: 20px;

	&:hover {
		opacity: 0.8;
	}
`;
