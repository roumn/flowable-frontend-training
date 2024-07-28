import {_, Model} from '@flowable/forms';
import React from 'react';
import {Map, Marker, Point} from "pigeon-maps";

export function FlowableMap(props: Model.Props) {
    const Components = props.Components;
    const {config, onChange} = props;
    const {extraSettings, value, enabled} = config;

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("flowableMap");
    const centerLon: number = _.get(extraSettings, "centerLon", 47.37);
    const centerLat: number = _.get(extraSettings, "centerLat", 8.54);
    const center: Point = [centerLon, centerLat];

    const handleClick = (onClickEvent: { event: any, latLng: number[], pixel: any }) => {
        if(enabled) {
            onChange(onClickEvent.latLng);
        }
    }

    if(config.__designMode == "editor") {
        return <div style={{width: 400, height: 400, background: "gray", color: "white", textAlign: "center"}}>
            Flowable Map</div>;
    }


    return (
        <div className={bem('container')}>
            <Components.label {...props}/>
            <Map height={300}
                 width={300}
                 center={center}
                 onClick={handleClick}
            >
                {value &&<Marker anchor={value}/> }
            </Map>
        </div>
    );
}
