import React, { Component } from 'react';

import Button from '../Button/Button';
import './card.css';

export default class Card extends Component {
    render() {
        const { section, subsection, title, abstract, byline, multimedia, published_date, url } = this.props.story;
        let date = new Date(published_date);

        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={multimedia[2].url} alt="Avatar" />
                        <div className="content">
                            <h4>{title}</h4>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p>{abstract ? abstract : "No Abstract Found."}</p>
                        <p>{byline}</p>
                        <div className="tags">
                            <p className="tag">{section}</p>
                            {subsection ? <p className="tag">{subsection}</p> : null}
                        </div>
                        <h3>Published On: {date.toString()}</h3>
                        <Button url={url} />
                    </div>
                </div>
            </div>
        )
    }
}


