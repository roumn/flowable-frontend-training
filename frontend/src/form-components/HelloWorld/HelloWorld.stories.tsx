import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const World = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingHelloworld: size=12 [[locationToGreet=Earth]]       
            number: col=0 size=12 description-position=bottom description-align=left modelEvents= ||  value={{number}} tabIndex=0 label=Number customValidations= ||  __designMode=preview [[fractionSize=0 numberType=integer type=one validationPanelDisplay=show]] 
        `}
    />


export default {
    title: 'Hello World Component'
}

