import type { NextPage } from 'next';
import { LocationList } from '@/components';
import styled from 'styled-components';

const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: black;
`;

const Home: NextPage = () => {
	return (
		<HomeContainer>
			<h1>All locations</h1>
			<LocationList />
		</HomeContainer>
	);
};

export default Home;
