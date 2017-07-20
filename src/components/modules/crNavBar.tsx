/**
 * Created by bradleyjamrozik on 2017-07-19 for Ozinga template
 *
 * based off:
 * Tutorial app using Catavolt's React Component library
 */

import * as React from 'react'
import {CvWorkbench} from "catreact";
import {Log, LogLevel} from 'catavolt-sdk';
import {CatreactAppBase} from "./crAppBase";

Log.logLevel(LogLevel.DEBUG);

/**
 * **********************************
 *      Begin Module Code
 *  *********************************
 */

export const CatreactNavbar = React.createClass<{windowId},{}>({

    mixins: [CatreactAppBase],

    render: function () {
        const windowId = this.props.windowId; //get the window from the url param

        return (
            <CvWorkbench/>
        );
    }

});