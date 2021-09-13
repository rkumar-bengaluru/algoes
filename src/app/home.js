// Dependencies
import React from 'react';
import menuData from '../megamenu/megamenu.json';
import hiData from './highlight.json';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            currentCategory: 'Algorithms',
            blogs: [],
            currentBlog: 'Sorts',
            subBlogs: [],
            new: []
        }
    }

    componentDidMount() {
        this.fetchAllCategory();
        this.fetchNew();
    }

    fetchNew() {
        var res = [];
        for (var i = 0; i <= 10; i++) {
            res.push(hiData.itemListElement[i]);
        }
        this.setState({ new: res });
    }

    fetchAllCategory() {
        this.setState({ category: menuData.offers }, () => {
            this.fetchBlogs(this.state.currentCategory);
        })
    }

    fetchBlogs(blog) {
        for (let c of this.state.category) {
            if (c.name === blog) {
                this.setState({ blogs: c.subMenus }, () => {
                    this.fetchSubBlogs(this.state.currentBlog);
                });
                return c;
            }
        }
    }

    fetchSubBlogs(blog) {
        
        for (let c of this.state.blogs) {
            if (blog.includes(c.name)) {
                this.setState({ subBlogs: c.links });
            }
        }
    }

    handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        this.setState({ currentCategory: target });
        var current = this.fetchBlogs(target);

        this.setState({ subBlogs: current.subMenus[0].links });
    }

    handleSubCat(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        this.setState({ currentBlog: target });
        this.fetchSubBlogs(target);
    }

    renderBlogs() {
        return (
            <ul className="list-group">
                {this.state.blogs.map((blog, index) => {
                    return (
                        <a href='#' key={index}>
                            <li onClick={this.handleSubCat.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                {blog.name}
                                <span className="badge badge-primary badge-pill">{blog.links.length}</span>
                            </li>
                        </a>
                    )
                })}
            </ul>
        )
    }

    renderSubBlogs() {
        return (
            <ul className="list-group">
                {this.state.subBlogs.map((blog, index) => {
                    return (
                        <a href={blog.url} key={index}>
                            <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">{blog.name}</li>
                        </a>
                    )
                })}
            </ul>
        )
    }

    renderAllCategory() {
        return (
            <ul className="list-group">
                {this.state.category.map((offer, index) => {
                    return (
                        <a href="#" key={index}>
                            <li onClick={this.handleClick.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                {offer.name}
                                <span className="badge badge-primary badge-pill">{offer.subMenus.length}</span>
                            </li>
                        </a>
                    )
                })}
            </ul>
        )
    }

    renderNew() {
        return (
            <div className="col overflow-auto border col-sm">
                <h2>What's New ...</h2>
                <span><ol>
                    {this.state.new.map((item, index) => {
                        return (
                            <li key={index} ><a href={item.item.url}> {item.item.date} - {item.item.name} </a></li>
                        )
                    })}

                </ol></span>
            </div>
        );
    }


    render() {
        console.log('loading...');
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        {this.renderAllCategory()}
                    </div>
                    <div className="col-sm-3" >
                        {this.renderBlogs()}
                    </div>
                    <div className="col-sm-3" >
                        {this.renderSubBlogs()}
                    </div>
                    <div className="col-sm-3">
                        {this.renderNew()}
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;