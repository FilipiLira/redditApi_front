import React from 'react'
import { Component } from 'react'
import '../index.css';
import Content from './Content'

export default class Main extends Component {
    render() {
        return (
            <div className="p-2">
                <Content>
                </Content>
            </div>
        );
    }
}