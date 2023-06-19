import React from 'react';
import {ExternalApplication} from "@flowable/work"



export default {
    applicationId: "simpleApp",
    label: "Simple App",
    icon: "disc",
    component: props => (
        <div style={{padding: "25px"}}>
            <div style={{padding: "10px"}}
                 className="flw-header-detail flw-header-detail__current">
                <h2>Hello</h2><div></div>
                <p>
                    {props?.currentUser?.memberGroups?.has('flowableAdministrator') && <div>You are admin!</div>}
                </p>
            </div>
        </div>)
} as ExternalApplication;

