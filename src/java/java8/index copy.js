import React, { useEffect, useState } from "react";
import menus from '../megamenu/megamenu.json';

const Java8Home = (props) => {
    const [category, setCategory] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [currentBlogs, setCurrentBlogs] = useState('Java 8');

    useEffect(() => {
        setCurrentBlogs('Java 8');
        setCategory(findAllCategories());
        setBlogs(findBlogs(currentBlogs));
    }, [category, blogs])

    function findAllCategories() {
        for (let c of menus.offers) {
            console.log(c.name);
            if (c.name === 'Java') {
                return c.subMenus;
            }
        }
        throw new Error('category not found --> Java');
    }
    function findBlogs(target) {
        for (let c of menus.offers) {
            if (c.name === 'Java') {
                var smenus = c.subMenus;
                for (let sub of smenus) {
                    if (sub.name === target) {
                        return sub.links;
                    }
                }
            }
        }
        throw new Error('sub category not found -->' + target);
    }
    function renderNavigation() {
        return (
            <ul className="list-group">
                {category.map((offer, index) => {
                    return (
                        <div key={index}>
                            <a href="#">
                                <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded " onClick={() => handleClick.bind(this)}>
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
    function renderBlogs() {
        return (
            <ul className="list-group">
                {blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <a href={blog.url}>
                                <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">{blog.name}</li>
                            </a>
                        </div>
                    )
                })}
            </ul>
        )
    }
    function handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        setCurrentBlogs(target);
        setBlogs(findBlogs(target));
    }
    return (
        <div className="container">
            <h2>What's New in Java 8</h2>
            <div className="row">
                <div className="col-sm-4">
                    {renderNavigation()}
                </div>
                <div className="col-sm-8">
                    {renderBlogs()}
                </div>
            </div>
        </div>
    )
}
export default Java8Home;