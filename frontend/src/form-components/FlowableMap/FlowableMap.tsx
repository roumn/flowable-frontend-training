import {_, Model} from '@flowable/forms';
import React, {useState} from 'react';
import {Map, Marker, Point} from "pigeon-maps";
import './FlowableMap.scss';

type MarkerConfig = {
    id: string
    label: string,
    color: string
}

const defaultMarker: MarkerConfig = {
    id: "default",
    label: "Default",
    color: "red"
}

export function FlowableMap(props: Model.Props) {
    const Components = props.Components;
    const {config, onChange, payload} = props;
    const {extraSettings, enabled} = config;
    const markers: MarkerConfig[] = _.get(extraSettings, "markers", []);

    const [selectedMarker, setSelectedMarker] = useState<MarkerConfig>(markers[0] || defaultMarker);

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("flowableMap");
    const centerLon: number = _.get(extraSettings, "centerLon", 47.37);
    const centerLat: number = _.get(extraSettings, "centerLat", 8.54);
    const center: Point = [centerLon, centerLat];

    const handleClick = (onClickEvent: { event: any, latLng: number[], pixel: any }) => {
        if(enabled) {
            onChange({$path: selectedMarker.id, $value: onClickEvent.latLng});
        }
    }

    if(config.__designMode == "editor") {
        return <div style={{width: 400, height: 400, background: "gray", color: "white", textAlign: "center"}}>
            Flowable Map</div>;
    }

    const handleMarkerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = markers.find(marker => marker.label === event.target.value);
        setSelectedMarker(selected || defaultMarker);
    }

    function renderMarkers() {
        return markers
            .map(marker => {
                const value = payload[marker.id];
                return value ? <Marker key={marker.id} anchor={value} payload={marker} color={marker.color} /> : null;
            })
            .filter(Boolean);   // Removes empty elements
    }

    return (
        <div className={bem('container')}>
            <Components.label {...props}/>
            {markers?.length > 0 && <div className={bem('select-container')}>
                <select onChange={handleMarkerChange} value={selectedMarker.label || ''}>
                    {markers.map(marker => (
                        <option key={marker.label} value={marker.label}>{marker.label}</option>
                    ))}
                </select>
            </div>}
            <Map height={300}
                 width={300}
                 center={center}
                 onClick={handleClick}
            >
                {renderMarkers()}
            </Map>
        </div>
    );
}
