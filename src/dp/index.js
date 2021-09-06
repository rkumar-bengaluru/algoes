import React, { useState, useEffect } from "react";
import menuData from '../megamenu/megamenu.json';

const DesignPatternHome = (props) => {
    const [category, setCategory] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [current,setCurrent] = useState('Creational Design Patterns');

    useEffect(() => {
        setCategory(getAllCategory());
        setPatterns(getPatterns(current));
    }, [category, patterns])

    function getAllCategory() {
        for (let offer of menuData.offers) {
            if (offer.name === "Design Patterns") {
                return offer.subMenus;
            }
        }
    }

    function getPatterns(name) {
        for (let offer of menuData.offers) {
            if (offer.name === "Design Patterns") {
                var menus = offer.subMenus;
                for (let c of menus) {
                   
                    if (c.name === name) {
                        return c.links;
                    }
                }
            }
        }
    }

    function handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        setCurrent(target);
        setPatterns(getPatterns(target));
    }

    function renderNavigation() {
        return (
            <ul className="list-group">
                {category.map((offer, index) => {
                    return (
                        <div key={index}>
                            <a href='#'>
                                <li onClick={handleClick.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                    {offer.name}
                                    <span className="badge badge-primary badge-pill">{offer.links.length}</span>
                                </li>
                            </a>
                        </div>
                    )
                })}
            </ul>
        )
    }
    function renderItems() {
        return (
            <ul className="list-group">
                {patterns.map((offer, index) => {
                    return (
                        <div key={index}> 
                           <a href={offer.url}>
                                <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                    {offer.name}
                                </li>
                            </a>
                        </div>
                    )
                })}
            </ul>
        )
    }
    return (
        <div className="container">
            <h1>Design Patterns</h1>
            <div className="row">
                <div className="col-sm-4">
                    {renderNavigation()}
                </div>
                <div className="col-sm-8">
                    {renderItems()}
                </div>
            </div>
        </div>
    )
}
export default DesignPatternHome;