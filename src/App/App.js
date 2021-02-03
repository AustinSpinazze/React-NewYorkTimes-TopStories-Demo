import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Home from '../App/Home/Home';
import Navbar from '../App/common/Navbar/Navbar';
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topStories: [],
            loading: true
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                {this.state.loading ?
                    <div>Loading...</div> : <Home topStories={this.state.topStories} />
                }
            </Fragment>
        )
    }

    componentDidMount() {
        const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`;
        try {
            axios.get(url).then(response => {
                this.setState((prevState) => ({
                    ...prevState,
                    topStories: response.data.results,
                    loading: false
                }))
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

