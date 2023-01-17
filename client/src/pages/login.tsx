import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../azure/authConfig';
import { useRouter } from 'next/router';
import { appRoutes } from '@/constants';
import styled from 'styled-components';
import Image from 'next/image';

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

const Login: NextPage = (props: LoginProps) => {
	const { instance } = useMsal();
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push(appRoutes.HOME_PAGE);
		}
	}, [isAuthenticated]);

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
				<Image src="./images/logo.svg" alt="logo" width={100} height={100} />
				{isAuthenticated ? <>LoggedIn</> : <LoginButton onClick={handleLogin}>Sign in with Microsoft AD</LoginButton>}
			</LoginContainer>
		</PageContainer>
	);
};

export default Login;
