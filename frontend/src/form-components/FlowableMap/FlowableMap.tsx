import {_, Model} from '@flowable/forms';
import React from 'react';
import {Map, Marker} from "pigeon-maps";

export function FlowableMap(props: Model.Props) {
    const Components = props.Components;
    const {config, onChange} = props;
    const {extraSettings, value} = config;

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("flowableMap");
    const center = _.get(extraSettings, "center", []);
    const editable = _.get(extraSettings, "editable", false);

    const handleClick = (onClickEvent: { event: any, latLng: number[], pixel: any }) => {
        if(editable) {
            onChange(onClickEvent.latLng);
        }
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