import React from 'react';
import Grid from "../grid/Grid";

const Card = ({data}) => {
    console.log('data', data);
    if (data && data.rails) {
        return (
            <div className="container">
                {data.rails.map(function (rail) {
                    return <Grid data={rail}/>
                })}
            </div>
        );
    }
    return null;
}

export default Card;
