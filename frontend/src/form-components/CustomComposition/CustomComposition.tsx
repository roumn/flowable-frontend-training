import * as React from "react";
import { Model, _ } from "@flowable/forms";

const textDefinition = {
    type: "text",
    value: "{{textVal}}",
    extraSettings: {
        minLength: 5,
        maxLength: 5
    }
};

export class CustomComposition extends Model.FormComponent {
    render() {
        const { Components, config, onChange } = this.props;
        const definition = config as Model.ResolvedColumn & {
            resolvedText: Model.ResolvedColumn;
        };


        const labelStyle = _.bem("label").name;
        const errorListStyle = _.bem("errorList").name;

        return (
            <div>
                {/*<Components.label {...this.props} className={labelStyle} htmlFor={this.getDomId()} />*/}
                <Components.label
                    {...this.props}
                    htmlFor={this.getDomId()}
                    config={{ ...this.props.config, i18n: undefined, tooltip: undefined }} className={labelStyle}
                />

                <Components.text
                    {...this.props}
                    config={definition.resolvedText}
                    onChange={val => onChange({ $path: definition.resolvedText.$path, $value: val })}
                    forceValidations={true}
                />
                {!this.props.forceValidations && !this.isTouched() ? null : (
                    <Components.errorList {...this.props} className={errorListStyle} />
                )}


            </div>
        );
    }
    static $resolve(unresolved: Model.Column, scope: Model.Payload, addData: Model.Payload, Components: Model.ComponentStore) {
        // @ts-ignore
        const resolve = Components.panel.$resolve;
        const resolved = resolve(unresolved, scope, addData);
        const disabled = resolved.enabled === false;
        const resolvedText = resolve(textDefinition, resolved.value, addData, disabled);
        return { ...resolved, resolvedText };
    }
}
