import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const ReadOnly = () =>
    <StorybookForm
        payload={{location: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: enabled=false value={{location}} size=12 [[center={{location}}]]        
        `}
    />

export const Editable = () =>
    <StorybookForm
        payload={{location: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: enabled=true value={{location}} size=12 [[center={{location}}]]        
        `}
    />

export const Preview = () =>
    <StorybookForm
        payload={{startLocation: [47.37, 8.54], currentLocation: []}}
        sfs={`
            trainingFlowableMap: __designMode=preview enabled=true value={{currentLocation}} size=12 [[center={{startLocation}}]]        
        `}
    />

export default {
    title: 'Flowable Map'
}

