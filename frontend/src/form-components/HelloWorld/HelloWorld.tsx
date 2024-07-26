import {_, Model} from '@flowable/forms';
import React from 'react';

export function HelloWorld(props: Model.Props) {
    const {extraSettings} = props.config;

    // Used to generate style class names. See: https://getbem.com/introduction/
    const bem = _.bem("helloWorld");

    const locationToGreet = _.get(extraSettings, "locationToGreet", "World");

    return (
        <div className={bem('container')}>
            <div>
                Hello <b>{locationToGreet}</b>
            </div>
        </div>
    );
}