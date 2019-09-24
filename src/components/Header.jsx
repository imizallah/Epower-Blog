import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar ">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-bars fa-2x text-white my-auto"></i>
                <div className="h1 ml-3 my-auto text-light" href="/"><strong>{props.title}</strong></div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Epower Blog'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;