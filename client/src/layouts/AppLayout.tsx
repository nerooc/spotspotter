import React from 'react';
import styled from 'styled-components';
import { Map } from '@/components';
import { useCoordinates } from '@/containers';
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

	return (
		<Container>
			<MenuModal>
				{children}
				<LogoutButton onClick={handleLogout}>Logout</LogoutButton>;
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

const LogoutButton = styled.button`
	position: absolute;
	bottom: 20px;
	height: 40px;
	width: 90%;
	background-color: #ab0537;
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	border: none;

	&:hover {
		opacity: 0.8;
	}
`;
