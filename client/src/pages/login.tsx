import React, { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../azure/authConfig';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { appRoutes } from '../constants';
import { blobStorage } from '../azure';

type LoginProps = {};

const PageContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: white;
`;

const LoginContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const LoginButton = styled.button`
	background-color: #34a853;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 18px;
	cursor: pointer;
	border: none;
`;

const Login = (props: LoginProps) => {
	const { instance } = useMsal();
	const history = useHistory();
	const isAuthenticated = useIsAuthenticated();
	const logo = blobStorage.get('public/logo.svg');

	useEffect(() => {
		if (isAuthenticated) {
			history.push(appRoutes.HOME_PAGE);
		}
	}, [isAuthenticated, history]);

	const handleLogin = () => {
		try {
			instance.loginRedirect(loginRequest);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<PageContainer>
			<LoginContainer>
				<img src={logo} alt="logo" />
				{isAuthenticated ? <>LoggedIn</> : <LoginButton onClick={handleLogin}>Sign in with Microsoft AD</LoginButton>}
			</LoginContainer>
		</PageContainer>
	);
};

export default Login;
