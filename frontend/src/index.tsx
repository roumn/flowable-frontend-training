import { ExternalConfiguration } from "@flowable/work";
import applications from "./apps";
import additionalData from "./additionalData";
import "./styles/styles.scss";
import suite from "./form-components/suite";

const flowableCustomizations: Partial<ExternalConfiguration> = {
    applications,
    formComponents: Object.entries(suite).map(([key, component]) => [key, component]),
    additionalData
}

export default { ...flowableCustomizations }