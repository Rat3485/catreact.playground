/**
 * Created by bradleyjamrozik on 2017-07-19 for Ozinga template
 *
 * based off:
 * Tutorial app using Catavolt's React Component library
 */

import * as React from 'react'
import {CvEvent, CvLoginResult} from 'catreact'
import {Log, LogLevel} from 'catavolt-sdk'
import {CvLoginPanel} from "catreact-html";
import {CatreactAppBase} from "./crAppBase";

Log.logLevel(LogLevel.DEBUG);

/**
 * **********************************
 *      Begin Module Code
 *  *********************************
 */


export const CatreactLogin = React.createClass({

    mixins: [CatreactAppBase],

    render: function () {
        return <div className="login-wrapper">
            <div className="login-logo"/>
            <CvLoginPanel
                defaultGatewayUrl={'www.catavolt.net'}
                defaultTenantId={'ozinga'}
                defaultUserId={''}
                defaultPassword={''}
                showTenantId={false}
                showDirectUrl={false}
                showGatewayUrl={false}
                showClientType={false}
                loginListeners={[(event:CvEvent<CvLoginResult>)=>{
                    const sessionId = event.resourceId;  //get the session from the LoginEvent
                    this.context.router.replace('/window/' + sessionId);
                }]}
            />
        </div>
    }
});