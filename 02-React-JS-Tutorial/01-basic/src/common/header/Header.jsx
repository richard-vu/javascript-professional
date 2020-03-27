import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


export default class Header extends Component {

    render() {
        return (
            <div className='row bg-primary text-white fixed'>
                <div className='col-12'>
                    <h1>HSFA</h1>
                </div>
            </div>
        )
    }
}
