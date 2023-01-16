import React, { useEffect } from 'react';
import { createContainer } from 'unstated-next';

const useCoordinatesContainer = createContainer(() => {
	const [coordinates, setCoordinates] = React.useState({ lat: 0, lng: 0 });

	return {
		coordinates,
		setCoordinates,
	};
});

export const CoordinatesProvider = useCoordinatesContainer.Provider;
export const useCoordinates = useCoordinatesContainer.useContainer;
