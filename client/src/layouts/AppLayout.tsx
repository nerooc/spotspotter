import React from 'react';
import styled from 'styled-components';
import { Map } from '@/components';
import { useCoordinates } from '@/containers';

type AppLayoutProps = {
	children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
	const Container = styled.div`
		width: 100%;
		height: 100%;
	`;

	const MenuModal = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		width: 400px;
		height: calc(100% - 40px);
		background-color: white;
		border: 1px solid lightgrey;
		border-radius: 5px;
		z-index: 9999;
		margin: 20px 0 20px 50px;
	`;

	return (
		<Container>
			<MenuModal>{children}</MenuModal>
			<Map />
		</Container>
	);
};
