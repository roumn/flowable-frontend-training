import {_, Model} from '@flowable/forms';
import React from 'react';

export function HelloWorld(props: Model.Props) {
    const {config, Components} = props;
    const {extraSettings} = config;
    const bem = _.bem("helloWorld");

    const planet = _.get(extraSettings, "planet", "World");


    return (
        <div className={bem('container')}>
            <Components.label {...props} />
            <div>
                Hello <b>{planet}</b>
            </div>
        </div>
    );
}
