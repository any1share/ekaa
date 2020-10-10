import React from 'react';

import './header.css';

const Header = (props) => (
    <div className="headerWrapper">
        <p>{ props.title }</p>
    </div>
)

export default Header;