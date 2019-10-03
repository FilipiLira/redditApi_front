import React from 'react'
import {Component} from 'react'
import '../index.css';
//import BrowserRouter from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class  ContentHeader extends Component {


    setBtnBck(e){
        const elemTarg = e.target
        const buttonElemTarg = elemTarg.firstChild

        const fader =  elemTarg.parentNode
        const oldFader = fader.parentNode
        
        const irmArray = [...oldFader.children]
        irmArray.forEach(elem => {
            const button = elem.firstChild
            button.classList.remove('active-btn')
        })
        elemTarg.classList.add('active-btn')
        console.log(buttonElemTarg)
    }

    render(){
        return (
            <div className="d-flex flex-row justify-content-center mt-2 mb-3">
               <div className="flex flex-row justify-content-center">
                  <Link to="/"><button className="btn-reddit btn m-1 active-btn" onClick={e => this.setBtnBck(e)}>HOT</button></Link>
                  <Link to="/new"><button className="btn-reddit btn m-1" onClick={e => this.setBtnBck(e)}>NEWS</button></Link>
                  <Link to="/rising"><button className="btn-reddit btn m-1" onClick={e => this.setBtnBck(e)}>RISING</button></Link>
               </div>
            </div>
        );
    }
}