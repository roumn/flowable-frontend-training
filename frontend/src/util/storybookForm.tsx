import * as React from "react";
import {_, Form} from "@flowable/forms";
import Components from "../form-components/suite";
import "@flowable/forms/flwforms.min.css";


const formProps = {
    debug: true,
    Components
};

type StorybookFormProps = {
    config?: {};
    sfs?: string;
    payload?: any;
    lang?: string;
    additionalData?: any;
}


export function StorybookForm(props: StorybookFormProps) {
    return (<Form
        {...formProps}
        payload={props.payload}
        lang={props.lang}
        config={props.config || _.sfs.parse(props.sfs as string)}
        additionalData={props.additionalData}
    />
    );
}


export function toSfs(propName: string, content: any): string {
    let sfs = `${propName}=`;
    if (Array.isArray(content)) {
        for (const entry of content) {
            sfs += "|| "
            sfs += Object.getOwnPropertyNames(entry).map(p => {
                let value;
                if (typeof entry[p] === 'object') {
                    value = Object.getOwnPropertyNames(entry[p])
                        .map(p2 =>
                            toSfs(p2, entry[p][p2])
                        ).join(",");
                } else {
                    value = entry[p];
                }
                return `${p}: ${value}`
            }).join(",");
            sfs += " ||"
        }
    } else if(typeof content === 'string' ) {
        sfs +=  `${propName}:${content}`
    }
    else {
        sfs += Object.getOwnPropertyNames(content).map(p => `${p}: ${content[p]}`).join(",");
    }

    return sfs;
}