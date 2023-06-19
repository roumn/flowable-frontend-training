import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const World = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            helloWorld: label="World" size=12 [[planet=Earth]]        
        `}
    />

export default {
    title: 'Hello World'
}
