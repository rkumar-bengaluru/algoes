import React from 'react';

import './index.css';
import menuData from './megamenu.json';

class MegaMenu extends React.Component {


    render() {
        console.log('data length ' + menuData.offers.length);
        return (
            <header className="light">
                <nav role="navigation">
                    <a href='/' className="ic menu" tabIndex="1">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </a>

                    <ul className="main-nav border-bottom">
                        {menuData.offers.map((offer, index) => {
                            return (
                                <li className="top-level-link" key={index}>
                                    <a href='/' className="mega-menu text-secondary"><span>{offer.name}</span></a>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            {offer.subMenus.map((subMenu, index) => {
                                                return (
                                                    <div className="col-md-4 col-lg-4 col-sm-4" key={index} id={index}>
                                                        <span><h2 className="sub-menu-head">{subMenu.name}</h2></span>
                                                        <ul className="sub-menu-lists">
                                                            {subMenu.links.map((link, index) => {
                                                                return (
                                                                    <li key={index} ><a href={link.url}>{link.name}</a></li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                            <div className="row banners-area">
                                                <div className="col-md-4 col-lg-4 col-sm-4">
                                                    <a href="https://www.vlocalshop.in/product/WHUI3GWZ6H" target="_blank" rel="noopener noreferrer"><img alt="ziggler" src="https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/WHUI3GWZ6H/01.webp" width="100%;" /></a>
                                                </div>
                                                <div className="col-md-4 col-lg-4 col-sm-4">
                                                    <a href="https://www.vlocalshop.in/product/Y0C38CGPRA" target="_blank" rel="noopener noreferrer"><img alt="ziggler" src="https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/Y0C38CGPRA/01.webp" width="100%;" /></a>
                                                </div>
                                                <div className="col-md-4 col-lg-4 col-sm-4">
                                                    <a href="https://www.vlocalshop.in/product/Y7Q7KIZQZT" target="_blank" rel="noopener noreferrer"><img alt="ziggler" src="https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/Y7Q7KIZQZT/01.webp" width="100%;" /></a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        )
    };
}
export default MegaMenu;