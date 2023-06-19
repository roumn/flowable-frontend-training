import React from 'react';
import {_, Model} from '@flowable/forms';
import 'react-credit-cards/lib/styles.scss';
import Cards, {CallbackArgument} from 'react-credit-cards';


export function CreditCardComponent({config, onChange}: Model.Props) {

    const cvc = _.get(config, 'extraSettings.cvc', "");
    const expiry = _.get(config, 'extraSettings.expiry', "");
    const name = _.get(config, 'extraSettings.name', "");
    const number = _.get(config, 'extraSettings.number', "");


    function updateValue(type: CallbackArgument, isValid: boolean) {
        onChange(isValid);
    }

    return (
        <>
            <Cards
                issuer={'visa'}
                cvc={cvc}
                expiry={expiry}
                name={name}
                number={number}
                callback={(type, isValid) => updateValue(type, isValid)}
            />
        </>
    );

}
