import React from 'react';
import { createContainer } from 'unstated-next';

const useCoordinatesContainer = createContainer(() => {
	const [coordinates, setCoordinates] = React.useState({ lat: 51.482826095710024, lng: -0.005407333374023438 });

	return {
		coordinates,
		setCoordinates,
	};
});

export const CoordinatesProvider = useCoordinatesContainer.Provider;
export const useCoordinates = useCoordinatesContainer.useContainer;
