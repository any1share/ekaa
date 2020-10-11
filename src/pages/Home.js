import React, { Component, Fragment } from 'react';

import Header from '../components/header/Header';

import Carousel from '../components/carousel/Carousel';
import Grid from '../components/grid/Grid';

const data = {
    title: 'fxg',
    images: [
        {
            id: 1,
            url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
            name: 'abc1',
        },
        {
            id: 2,
            url: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
            name: 'abc2'
        },
        {
            id: 3,
            url: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
            name: 'abc3'
        }
    ]
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataModal: {}
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://prod.sajha.co.in/layout/page/1', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Basic bWlndWVsOnB5dGhvbg=="
            },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                dataModal: data.payload
            })
        });
    }

    render() {
        console.log('state', this.state);
        return (
            <Fragment>
                <Header title={ this.state.dataModal.name } />
                <div>
                    <Grid data={ this.state.dataModal.rails && this.state.dataModal.rails[0] } />
                </div>
            </Fragment>
        );
    }
}

export default Home;
