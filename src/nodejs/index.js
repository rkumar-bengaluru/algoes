import React from "react";
import menus from '../megamenu/megamenu.json';

class NodeJsHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category: [], blogs: [], currentCategory: 'NodeJs', currentBlog: 'Stage 0' }
    }

    componentDidMount() {
        this.fetchAllCategory();
    }

    fetchAllCategory = async () => {
        for (let c of menus.offers) {
            if (c.name === this.state.currentCategory) {
                this.setState({ category: c.subMenus }, function () {
                    this.fetchBlogs(this.state.currentBlog);
                });
            }
        }
    }

    fetchBlogs = async (blog) => {
        console.log(this.state.category);
        for (let c of this.state.category) {
            if (c.name === blog) {
                this.setState({ blogs: c.links });
            }
        }
    }

    handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0,target.length -1);
        this.setState({currentBlog : target});
        this.fetchBlogs(target);
    }

    renderNavigation() {
        return (
            <ul className="list-group">
                {this.state.category.map((offer, index) => {
                    return (
                        <a href="#" key={index}>
                            <li  onClick={this.handleClick.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded">
                                {offer.name}
                                <span className="badge badge-primary badge-pill">{offer.links.length}</span>
                            </li>
                        </a>
                    )
                })}
            </ul>
        )
    }

    renderBlogs() {
        return (
            <ul className="list-group">
                {this.state.blogs.map((blog, index) => {
                    return (
                        <a href={blog.url}>
                            <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded">
                                {blog.name}
                            </li>
                        </a>
                    )
                })}
            </ul>
        )
    }

    render() {
        return (
            <div className="container">
                <h1>NodeJs</h1>
                <div className="row">
                    <div className="col-sm-4">
                        {this.renderNavigation()}
                    </div>
                    <div className="col-sm-8">
                        {this.renderBlogs()}
                    </div>
                </div>
            </div>
        )
    }
}
export default NodeJsHome;