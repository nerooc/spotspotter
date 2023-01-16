import type { NextPage } from 'next';
import { useMsal } from '@azure/msal-react';
import { LocationList } from '@/components';

const Home: NextPage = () => {
	const { instance } = useMsal();

	const handleLogout = () => {
		instance.logoutRedirect({
			postLogoutRedirectUri: '/login',
		});
	};

	return (
		<>
			<LocationList />
			<button onClick={handleLogout}>Logout</button>
		</>
	);
};

export default Home;
