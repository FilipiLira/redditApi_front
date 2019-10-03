import React from 'react'
import { Component } from 'react'
import '../index.css';
import ContentHeader from './ContentHeader'
import ContentBodyNew from './ContentBodyNew'
import ContentBodyHot from './ContentBodyHot'
import ContentBodyRising from './ContentBodyRising'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default class Content extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <BrowserRouter>
                    <ContentHeader></ContentHeader>
                    <Switch>
                        <Route path="/" exact={true} component={ContentBodyHot} />
                        <Route path="/new" component={ContentBodyNew} />
                        <Route path="/rising" component={ContentBodyRising} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}