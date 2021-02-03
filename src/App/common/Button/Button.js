import React, { Component } from 'react';

import "./button.css"

export default class Button extends Component {
    render() {
        const { url } = this.props;
        return (
            <button className="button" onClick={() => {window.open(url)}}>
                Read More
            </button>
        )
    }
}
