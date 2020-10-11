import React, { Component, Fragment } from 'react';

import Header from '../components/header/Header';

import Card from "../components/card/Card";


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
                    <Card data={ this.state.dataModal } />
                </div>
            </Fragment>
        );
    }
}

export default Home;
