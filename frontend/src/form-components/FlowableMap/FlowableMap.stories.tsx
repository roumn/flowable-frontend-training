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

export const MapWithCustomMarkersUninitialized = () =>
    <StorybookForm
        payload={{ center: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: size=12 enabled=true [[center={{center}} markers= || id:pin1,label:Pin 1,color:blue || id:pin2,label:Pin 2,color:green]]            
        `}
    />

export const MapWithCustomMarkerInitialized = () =>
    <StorybookForm
        payload={{pin1: [47.37, 8.54], pin2: [47.375, 8.545], center: [47.37, 8.54]}}
        sfs={`
            trainingFlowableMap: size=12 enabled=true [[center={{center}} markers= || id:pin1,label:Pin 1,color:blue || id:pin2,label:Pin 2,color:green]]            
        `}
    />

export default {
    title: 'Flowable Map'
}

