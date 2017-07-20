/**
 * Created by rburson on 6/17/2017
 *
 * based off:
 * Tutorial app using Catavolt's React Component library
 * More examples and docs at: https://github.com/catavolt-oss/catreact-examples
 *
 * Modified by bradleyjamrozik 2017-07-19 for Ozinga template
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {CatavoltPane} from 'catreact'
import {Log, LogLevel} from 'catavolt-sdk'
import {Router, hashHistory, Route, IndexRoute} from "react-router"

import {CatreactLogin} from "./modules/crLogin";
import {CatreactAppBase} from "./modules/crAppBase";
import {CatreactWindow} from "./modules/crWindow";

Log.logLevel(LogLevel.DEBUG);

/**
 * **********************************
 *      Begin Application Code
 *  *********************************
 */

const CatreactApp = React.createClass({

   mixins: [CatreactAppBase],

    render: function () {
        return (
            <div className="container">
                <CatavoltPane enableResourceCaching={true}>
                    <div>
                        {this.props.children}
                    </div>
                </CatavoltPane>
            </div>
        );
    }
});

const app = (
    <Router history={hashHistory}>
        <Route path="/" component={CatreactApp}>
            <IndexRoute component={CatreactLogin}/>
            <Route path="window/:windowId" component={CatreactWindow}>
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(app, document.getElementById('catreactApp'));


