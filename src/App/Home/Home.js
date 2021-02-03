import React, { Component } from 'react';

import Card from '../common/Card/Card';
import './home.css';

export default class Home extends Component {
    render() {
        const { topStories } = this.props;
        return (
            <div className="container">
                <h1>Today's Top Stories</h1>
                <div className="grid">
                    {topStories.map((story) => {
                        return (
                            <Card key={story.title} story={story} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
