import React from 'react'
import {Component} from 'react'
import '../index.css';

export default class  Header extends Component {
    render(){
        return (
            <header className="App-header d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center">
                    <p className="h3 text-light" style={{ display: 'inline' }}>REACT</p><p className="h3" style={{ color: 'rgb(255, 85, 0)', display: 'inline' }}>JS</p>
                </div>
            </header>
        );
    }
}