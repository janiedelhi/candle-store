import React from 'react';
import './candle-list.styles.css';


export const CandleList = props => {
    let props2 = props;
    return (
        <div className='candle-list'>
        {
            props2.candles.map( candle => 
                <h1 key={candle.id}> {candle.name}</h1>
            )
        }
        </div>
    )   
}
