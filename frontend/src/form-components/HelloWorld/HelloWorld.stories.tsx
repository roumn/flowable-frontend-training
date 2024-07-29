import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const World = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[locationToGreet=Earth]]        
        `}
    />

export const Zurich = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[locationToGreet=Zurich]]        
        `}
    />

export const NoProperties = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[]]        
        `}
    />

export const CustomGreeting = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[greeting=Goodbye]]        
        `}
    />


export const Disabled = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 enabled=false [[]]        
        `}
    />

export const Label = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: label=My Label size=12 [[]]        
        `}
    />

const translations = {
    "it_it": {
        "helloWorld.greeting": "Buongiorno"
    },
    "de_de": {
        "helloWorld.greeting": "Hallo"
    }
};

export const DefaultLanguage = () =>
    <StorybookForm
        payload={{}}
        translations={translations}
        lang={"en"}
        sfs={`
            trainingHelloworld:[[locationToGreet=World]]`}
    />

export const Italian = () =>
    <StorybookForm
        payload={{}}
        translations={translations}
        lang={"it_it"}
        sfs={`
            trainingHelloworld:[[locationToGreet=World]] `}
    />


export default {
    title: 'Hello World Component'
}

