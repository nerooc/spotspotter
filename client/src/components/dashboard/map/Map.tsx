import { LatLngTuple, Icon } from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCoordinates } from '@/containers';

const { MapContainer } = ReactLeaflet;

interface MapProps {
	children?: React.ReactElement;
	className?: string;
}

const MapInner = ({ position }: { position: LatLngTuple }) => {
	const map = useMap();
	const router = useRouter();
	const { setCoordinates } = useCoordinates();
	ReactLeaflet.useMapEvents({
		click(event) {
			const { lat, lng } = event.latlng;
			setCoordinates({ lat, lng });
			router.push(`/app/create`);
		},
	});

	useEffect(() => {
		map.setView(position);
	}, [position]);

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={position}
				icon={new Icon({ iconUrl: '/images/Marker.png', iconSize: [25, 35], iconAnchor: [12, 41] })}
			>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</>
	);
};

const Map = ({}: MapProps) => {
	const router = useRouter();
	const { coordinates } = useCoordinates();
	let { lat, lng } = coordinates;

	console.log(coordinates);

	if (!lng || !lat) {
		lat = 18.87726859468795;
		lng = 50.13923672606203;
	}

	const position: LatLngTuple = [lat, lng];

	return (
		<>
			<MapContainer zoomAnimation={true} className={styles.map} center={position} zoom={16} scrollWheelZoom={true}>
				<MapInner position={position} />
			</MapContainer>
		</>
	);
};

export default Map;
