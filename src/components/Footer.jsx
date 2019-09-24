import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <nav className="footer navbar ">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-bars fa-2x text-white my-auto"></i>
                <div className="h6 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Footer.defaultProps = {
    title: 'Copyright 2019'
};

Footer.propTypes = {
    title: PropTypes.string
};

export default Footer;