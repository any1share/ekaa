import React from 'react';
import './grid.css';

const Grid = ({ data }) => {
    console.log('data', data);
    if (data) {
        return (
            <div className="container">
                <p className="title">{ data.name }</p>
                <div className="gridContainer">
                    {
                        data.products.map((item, index) => {
                            return (
                                <div key={ index } className="wrapper">
                                    <img src={ item.images } alt="" className="img" />
                                    <div className="desc">
                                        <p style={{ fontWeight: 'bold' }}>{ item.name }</p>
                                        <p>{ item.price }</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    return null;
}

export default Grid;