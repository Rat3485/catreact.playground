/**
 * Created by bradleyjamrozik on 2017-07-19 for Ozinga template
 *
 * based off:
 * Tutorial app using Catavolt's React Component library
 */

import * as React from 'react'
import {CvAppWindow, CvLogout, CvContext, CvLogoutCallback} from 'catreact'
import {Log, LogLevel} from 'catavolt-sdk'
import {CatreactAppBase} from "./crAppBase";
import {CatreactNavbar} from "./crNavBar";

Log.logLevel(LogLevel.DEBUG);

/**
 * **********************************
 *      Begin Module Code
 *  *********************************
 */

export const CatreactWindow = React.createClass({

    mixins: [CatreactAppBase],

    render: function () {
        const windowId = this.props.params.windowId; //get the windowId (sessionId)
        return <CvAppWindow windowId={windowId}>
            <div>
                <div className="primary-logo text-left"/>
                <div className="top-nav text-right">
                    <CvLogout renderer={(cvContext:CvContext, callback:CvLogoutCallback)=>{
                        return <div className="click-target"><a onClick={callback.logout}>Logout</a></div>
                    }}
                              logoutListeners={[()=>{ this.context.router.replace('/');}]}
                    />
                </div>
                <div className="workbench-navbar bg-color1">
                    <div className="workbench-tab-menu">
                        <CatreactNavbar windowId={windowId}/>
                    </div>
                </div>
                {this.props.children}
            </div>
        </CvAppWindow>;
    }
});
