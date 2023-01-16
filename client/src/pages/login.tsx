import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useMsal, useIsAuthenticated, useAccount } from '@azure/msal-react';
import { loginRequest } from '../azure/authConfig';
import { useRouter } from 'next/router';
import { appRoutes } from '@/constants';

type LoginProps = {};

const Login: NextPage = (props: LoginProps) => {
	const { instance } = useMsal();
	const account = useAccount();
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push(appRoutes.HOME_PAGE);
		}
	}, [isAuthenticated]);

	console.log(account);

	const handleLogin = () => {
		try {
			instance.loginRedirect(loginRequest);
		} catch (e) {
			console.log(e);
		}
	};

	return <div>{isAuthenticated ? <>LoggedIn</> : <button onClick={handleLogin}>Login</button>}</div>;
};

export default Login;
