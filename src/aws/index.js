import React, { useState, useEffect } from "react";
import menus from '../megamenu/megamenu.json';

const AWSHome = (props) => {
    const [category, setCategory] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [currentBlog, setCurrentBlog] = useState('Instances');
    const [currentCategory, setCurrentCategory] = useState('AWS');

    useEffect(() => {
        setCurrentCategory('AWS');
        setCurrentBlog('Instances');
        fetchAllCategory();
        fetchBlogs(currentBlog);
    }, [category, currentBlog]);

    const fetchAllCategory = async () => {
        for (let c of menus.offers) {
            if (c.name === currentCategory) {
                setCategory(c.subMenus);
            }
        }
    }

    const fetchBlogs = async (blog) => {
        for (let c of category) {
            if (c.name === blog) {
                setBlogs(c.links);
            }
        }
    }

    function handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        setCurrentCategory(target);
        fetchBlogs(target);
    }

    function renderNavigation() {
        return (
            <ul className="list-group">
                {category.map((offer, index) => {
                    return (
                        <div key={index}>
                            <a href="#">
                                <li onClick={handleClick.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded">
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
                        <a href={blog.url} key={index}>
                            <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded">{blog.name}</li>
                        </a>
                    )
                })}
            </ul>
        )
    }


    return (
        <div className="container">
            <h1>AWS</h1>
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
export default AWSHome;