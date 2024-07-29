import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const World = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[locationToGreet=Earth]]       
        `}
    />


export default {
    title: 'Hello World Component'
}

