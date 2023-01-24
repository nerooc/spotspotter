import React from 'react';
import styled from 'styled-components';
import { Map } from '../components';
import { api } from '../api';
import { useMsal } from '@azure/msal-react';

type AppLayoutProps = {
	children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
	const { instance } = useMsal();

	const handleLogout = () => {
		instance.logoutRedirect({
			postLogoutRedirectUri: '/login',
		});
	};

	const sendRequest = async (url: string) => {
		try {
			await api.post(url);
		} catch (e) {
			// pass
		}
	};

	return (
		<Container>
			<MenuModal>
				{children}
				<ButtonContainer>
					<FlexButtons>
						<ForceErrorButton onClick={() => sendRequest('/test')}>Force 4xx Error</ForceErrorButton>
						<ForceErrorButton onClick={() => sendRequest('/location/badrequest')}>Force 5xx Error</ForceErrorButton>
					</FlexButtons>
					<LogoutButton onClick={handleLogout}>Logout</LogoutButton>;
				</ButtonContainer>
			</MenuModal>
			<Map />
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const MenuModal = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 0;
	left: 0;
	width: 400px;
	height: calc(100% - 40px);
	background-color: white;
	border: 1px solid lightgrey;
	border-radius: 5px;
	z-index: 9999;
	margin: 20px 0 20px 50px;
	padding: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: -10px;
	gap: 10px;
	width: 90%;
`;

const FlexButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const ForceErrorButton = styled.button`
	height: 40px;
	width: 45%;
	background-color: dark-gray;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	border: none;
	&:hover {
		opacity: 0.8;
	}
`;

const LogoutButton = styled.button`
	height: 40px;
	width: 100%;
	background-color: #ab0537;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	border: none;

	&:hover {
		opacity: 0.8;
	}
`;
