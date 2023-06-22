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
            helloworld: size=12 [[locationToGreet=Zurich]]        
        `}
    />

export const NoProperties = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            helloworld: size=12 [[]]        
        `}
    />


export default {
    title: 'Hello World Component'
}

