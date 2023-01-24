import { api } from '../api';
import { useCoordinates } from '../containers';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CreateLocationPage = () => {
	const history = useHistory();
	const { coordinates } = useCoordinates();
	const [formData, setFormData] = React.useState({
		title: '',
		description: '',
		country: '',
		city: '',
		street: '',
		number: '',
	});

	const createLocation = async () => {
		await api.post('/location', {
			title: formData.title,
			description: formData.description,
			address: {
				country: formData.country,
				city: formData.city,
				street: formData.street,
				number: formData.number,
			},
			location: {
				x: coordinates.lat,
				y: coordinates.lng,
			},
		});

		history.push('/app');
	};

	return (
		<Container>
			<ReturnButton onClick={() => history.push('/app')}>&lt; Back</ReturnButton>
			<LocationContainer>
				<h1>Create new location</h1>
				<LocationForm>
					<label htmlFor="title">Title</label>
					<LocationInput
						id="title"
						type="text"
						onChange={(e) => {
							setFormData({ ...formData, title: e.target.value });
						}}
					/>

					<label htmlFor="description">Description</label>
					<LocationTextArea
						id="description"
						style={{ resize: 'none' }}
						onChange={(e) => {
							setFormData({ ...formData, description: e.target.value });
						}}
					/>

					<label htmlFor="country">Country</label>
					<LocationInput
						id="country"
						type="text"
						onChange={(e) => {
							setFormData({ ...formData, country: e.target.value });
						}}
					/>

					<label htmlFor="city">City</label>
					<LocationInput
						id="city"
						type="text"
						onChange={(e) => {
							setFormData({ ...formData, city: e.target.value });
						}}
					/>

					<label htmlFor="street">Street</label>
					<LocationInput
						id="street"
						type="text"
						onChange={(e) => {
							setFormData({ ...formData, street: e.target.value });
						}}
					/>

					<label htmlFor="number">Number</label>
					<LocationInput
						id="number"
						type="text"
						onChange={(e) => {
							setFormData({ ...formData, number: e.target.value });
						}}
					/>

					<SubmitButton type="submit" onClick={createLocation}>
						Submit
					</SubmitButton>
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
	display: flex;
	flex-direction: column;
	color: black;
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
