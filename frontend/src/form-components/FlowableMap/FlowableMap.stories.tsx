import * as React from "react";
import {StorybookForm} from "../../util/storybookForm";

export const Default = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            trainingFlowableMap: enabled=false size=12 [[]]        
        `}
    />

export const Center = () =>
    <StorybookForm
        payload={{centerLon: 39.4962322, centerLat: -0.4011369}}
        sfs={`
            trainingFlowableMap: enabled=false size=12 [[centerLon={{centerLon}} centerLat={{centerLat}}]]        
        `}
    />

export const Value = () =>
    <StorybookForm
        payload={{centerLon: 47.37, centerLat: 8.54}}
        sfs={`
            trainingFlowableMap: enabled=false value={{[centerLon, centerLat]}} size=12 [[centerLon={{location}} centerLat={{location}}]]        
        `}
    />

export const Preview = () =>
    <StorybookForm
        payload={{startLocation: [47.37, 8.54], currentLocation: []}}
        sfs={`
            trainingFlowableMap: __designMode=editor enabled=true value={{currentLocation}} size=12 [[center={{startLocation}}]]        
        `}
    />

export default {
    title: 'Flowable Map'
}

