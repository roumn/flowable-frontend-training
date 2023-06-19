import * as React from "react";
import StorybookForm from "../../util/storybookForm";

export const Regular = () =>
    <StorybookForm
        payload={{}}
        sfs={`
            text: size=3 label=Name value={{name}} defaultValue=ShaneBowen
            number: size=3 label=Number value={{number}} defaultValue=4901490149014901
            text: size=3 label=Expiry value={{expiry}} defaultValue=12/20
            text: size=3 label=CVC value={{cvc}} defaultValue=123
            creditCard: size=12 value={{isValid}} [[ cvc={{cvc}} expiry={{expiry}} number={{number}} name={{name}}]]        
        `}
    />

export default {
    title: 'CreditCard'
}
