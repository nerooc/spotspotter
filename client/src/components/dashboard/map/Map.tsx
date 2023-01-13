import { LatLngTuple, Icon } from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import { TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const { MapContainer } = ReactLeaflet;

interface MapProps {
	children?: React.ReactElement;
	className?: string;
}

const MapInner = ({ position }: { position: LatLngTuple }) => {
	const map = useMap();

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
				icon={new Icon({ iconUrl: './images/Marker.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
			>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</>
	);
};

const Map = ({}: MapProps) => {
	const [position, setPosition] = useState<LatLngTuple>([50.13923672606203, 19.87726859468795]);

	return (
		<>
			<button
				style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '9999' }}
				onClick={() => setPosition([50.13923672606203, 18.87726859468795])}
			>
				Test
			</button>
			<MapContainer className={styles.map} center={position} zoom={90} scrollWheelZoom={false}>
				<MapInner position={position} />
			</MapContainer>
		</>
	);
};

export default Map;
