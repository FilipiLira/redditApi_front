import React from 'react'
import { Component } from 'react'
import '../index.css';
//import apiRequest from '../ApiRequest'
import axios from 'axios'
import moment from 'moment'

export default class ContentBody extends Component {

    state = {
        data: ''
    }

    requestApi() {
        axios.get('https://www.reddit.com/r/php/rising.json?g=global&limit=10')
            .then(res => res.data)
            .then((data) => data)
            .then(json => {
                this.setState({ data: json })
            })
            .catch(error => console.log(error))
    }

    timeConversion(unix_time){
        let timestamp = moment.unix(unix_time).fromNow();
        console.log(timestamp)
        if(timestamp.indexOf('days') !== -1 || timestamp.indexOf('day') !== -1){
            if(timestamp.substring(0,1) === 'a'){
                return `enviado a 1 dia`
            } else {
                return `enviado a ${timestamp.substring(0,2)} dias`
            }
        }
        if(timestamp.indexOf('minutes') !== -1)  return `enviado a ${timestamp.substring(0,1)} minutos`
        
        if(timestamp.indexOf('hours') !== -1){
            if(timestamp.substring(0,1) === 'an'){
                return `enviado a 1 hora`
            } else {
                return `enviado a ${timestamp.substring(0,1)} horas`
            }
        }
    }

    render() {
        this.requestApi()
        let postArray = this.state.data.data
        let newPostArray = { ...postArray }
        let childrens = newPostArray.children
        let newChildrens = { ...childrens }

        const posts = []
        for (const i in newChildrens) {
            const post = newChildrens[i]
            const timePost = this.timeConversion(post.data.created_utc)
            posts.push(
                <div className="post d-flex flex-row align-items-center">
                    <div className="d-flex flex-row align-items-center">
                        <div className="post-img " style={{ backgroundColor: 'rgb(102, 102, 102)' }}>
                            <img alt='' style={{ width: '110px', height: '110px' }}></img>
                        </div>
                        <div className="post-info d-flex flex-column ml-3" style={{ height: '100%' }}>
                            <div style={{height: '30px', overflow: 'hidden'}}>
                                <p style={{overflow: 'hidden'}} className="font-weight-bold h4">{post.data.title}</p>
                            </div>
                            <div className="d-flex flex-row">
                                <p className="text-secondary">{timePost}</p>
                                <p className="mx-2">por</p>
                                <p className="orange">{post.data.author}</p>
                            </div>
                            <div>
                            <a href={`${post.data.url}`}><p style={{ borderBottom: '1.5px solid rgb(155, 155, 155)'}}>{post.data.url}</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="contentBody d-flex flex-column align-items-center">
                <div className=" mt-" style={{ width: '90%', borderTop: '1.5px solid rgb(155, 155, 155)' }}>
                    {posts}
                    <div className="d-flex flex-row my-3">
                        <button className="btn text-light" style={{backgroundColor: 'rgb(102, 102, 102)', width: '100%'}}><i className="fa fa-plus text-light mr-1" style={{fontSize: '0.8rem'}}></i>Ver mais</button>
                    </div>
                </div>
            </div>
        );
    }
}