import React from "react";
import { ExternalConfiguration } from "@flowable/work";
import applications from "./apps";
import {formComponents} from "./form-components/formComponents";
import additionalData from "./additionalData";
import "./styles/styles.scss";

const flowableCustomizations: Partial<ExternalConfiguration> = {
    applications,
    formComponents,
    additionalData
}

export default { ...flowableCustomizations }