// Dependencies
import React from 'react';

const StudioHeader = props => {

    return (
        <div className="header-basic">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">

                <a className="ml-auto" href="https://www.vlocalshop.in" target="_blank" rel="noopener noreferrer">
                    <img src="img/logo.svg" alt="LocalShop" />
                </a>
                <div className="container">
                    <p className="font-weight-bold text-white ml-auto">JavaScript Algoes</p>
                    <div className="text-white ml-auto">"Learn Algorithms By Coding...!"</div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link ml-2 mr-2"
                                    href="https://github.com/rkumar-bengaluru/algoes"
                                    target="_blank" rel="noopener noreferrer">GitHub
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default StudioHeader;
