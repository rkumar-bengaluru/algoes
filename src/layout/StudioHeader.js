// Dependencies
import React from 'react';
import SearchBar from './searchbar';
import DIS from './searchbar/dis.json';
import MegaMenu from '../megamenu';

class StudioHeader extends React.Component {

    render() {
        return (
            <div className="header-basic">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">

                    <a className="ml-auto" href="https://www.vlocalshop.in" target="_blank" rel="noopener noreferrer">
                        <img src="/algoes/img/logo.svgs" alt="LocalShop" />
                    </a>
                    <div className="container">
                        <p className="font-weight-bold text-white ml-auto">JavaScript Algoes</p>
                        <div className="text-white ml-auto">"Learn Algorithms By Coding...!"</div>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <SearchBar words={DIS} />
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
                <MegaMenu/>
            </div>
        );
    }
};

export default StudioHeader;
