import {_, Model} from '@flowable/forms';
import React, {CSSProperties} from 'react';

export function HelloWorld(props: Model.Props) {
    const Components = props.Components;
    const {config} = props;
    const {extraSettings, enabled} = config;

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("helloWorld");

    const locationToGreet = _.get(extraSettings, "locationToGreet", "World");
    const greeting = _.get(extraSettings, "greeting", "Hello");
    const style: CSSProperties = {
        color: enabled == false ? "lightgrey" : "black"
    }

    return (
        <div className={bem('container')}>
            <Components.label {...props}/>
            <div style={style}>
                {greeting} <b>{locationToGreet}</b>
            </div>
        </div>
    );
}