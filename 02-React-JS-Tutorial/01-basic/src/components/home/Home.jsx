import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Header from '../../common/header/Header';
import Chart from './chart/Chart';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <Header />
                </div>
                <div class="bottom">
                    <Chart />
                </div>
            </div>
        )
    }
}
