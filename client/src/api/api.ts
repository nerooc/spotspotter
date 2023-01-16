import axios from 'axios';

const baseURL = () => {
	switch (process.env.REACT_APP_ENVIRONMENT) {
		case 'production':
			return 'https://learn-notes-with-me.azurewebsites.net/api/';
		case 'staging':
			return 'https://learn-notes-with-me-staging.azurewebsites.net/api/';
		case 'development':
		default:
			return 'http://localhost:3000/api/';
	}
};

export const api = axios.create({
	baseURL: baseURL(),
});
