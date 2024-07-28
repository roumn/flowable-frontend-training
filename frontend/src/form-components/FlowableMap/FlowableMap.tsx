import './FlowableMap.scss';
import {_, Model, ComponentStore} from '@flowable/forms';
import {FormCache} from '@flowable/forms/flowable-forms/src/flw/FormCache';
import React from 'react';
import {Map, Marker, Point} from "pigeon-maps";

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

const selectConfig = (items: MarkerConfig[]) => {
    return {
        "id": "pin-select",
        "value": "{{$payload.$temp.selectedPin}}",
        "defaultValue": items.length == 0 ? "" : items[0],
        "extraSettings": {
            "multi": false,
            "dataSource": "Static",
            "items": items,
            "storage": "Full",
            "identity": "id",
            "formatItem": "{{$item.label}}",
        },
        "label": "Pins",
        "type": "select"
    }
}


export function FlowableMap(props: Model.Props) {
    const Components = props.Components;
    const {config, onChange, payload} = props;
    const {extraSettings, enabled} = config;
    const markers: MarkerConfig[] = _.get(extraSettings, "markers", []);


    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("flowableMap");
    const centerLon: number = _.get(extraSettings, "centerLon", 47.37);
    const centerLat: number = _.get(extraSettings, "centerLat", 8.54);
    const center: Point = [centerLon, centerLat];

    const handleClick = (onClickEvent: { event: any, latLng: number[], pixel: any }) => {
        if(enabled) {
            const selectedMarker = _.get(payload, "$temp.selectedPin", defaultMarker);
            onChange({$path: selectedMarker?.id, $value: onClickEvent.latLng});
        }
    }

    if(config.__designMode == "editor") {
        return <div style={{width: 400, height: 400, background: "gray", color: "white", textAlign: "center"}}>
            Flowable Map</div>;
    }

    const definition = config as Model.ResolvedColumn & {
        resolvedSelect: Model.ResolvedColumn;
    };

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
            {markers.length > 0 &&
                <Components.select
                    {...props}
                    config={definition.resolvedSelect}
                    onChange={val => onChange({$path: definition.resolvedSelect.$path, $value: val})}
                />
            }
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

FlowableMap.$resolve = (
    unresolved: Model.Column,
    scope: Model.Payload,
    addData: Model.Payload,
    Components: ComponentStore,
    formCache: FormCache,
    currentPath: string
) => {
    const resolve = (Components["panel"]).$resolve;
    const resolved = resolve(unresolved, scope, addData, Components, formCache, currentPath);
    const items = resolved?.extraSettings?.markers ?? [];
    const resolvedSelect = resolve(selectConfig(items), resolved.value, addData, Components, formCache, currentPath);
    return {...resolved, resolvedSelect};
};

