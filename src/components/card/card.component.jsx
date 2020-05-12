import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <div>
        <img alt="candle" width="100px" height="150px" src="https://s3-eu-west-1.amazonaws.com/yi-files/content/2019/04/5ca22c7906201.jpg"/>
        </div>
        <h1> {props.item.name} </h1>
        <h2>{props.item.price}</h2>
    </div>
)
