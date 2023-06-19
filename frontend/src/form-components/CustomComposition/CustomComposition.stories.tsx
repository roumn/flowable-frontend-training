import * as React from "react";
import StorybookForm from "../../util/storybookForm";

export const TopLabel = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            customComposition: label="Top Label" size=12 labelAlign=left value={{counter}} [[]]        
        `}
    />

export default {
    title: 'CustomComposition'
}
