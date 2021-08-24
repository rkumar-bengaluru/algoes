// Dependencies
import React from 'react';
import menuData from '../megamenu/megamenu.json';
import hiData from './highlight.json';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { currentChallenges: [], news: [] };

    }

    componentDidMount() {
        this.setState({
            currentChallenges: this.findTarget("Sorts"),
            news : this.findNews()
        });
    }

    findNews() {
        var res = [];
        for (var i = 0; i <= 10; i++) {
            res.push(hiData.itemListElement[i]);
        }
        return res;
    }

    findTarget(name) {
        var r = [];
        for (var i = 0; i <= menuData.offers[0].subMenus.length - 1; i++) {
            var offer = menuData.offers[0].subMenus[i];
            if (offer.name.trim().toLowerCase() === name.trim().toLowerCase()) {
                r = offer.links;
            }
        }

        return r;
    }

    handleClick(e) {
        e.preventDefault();
        var target = e.target.textContent;
        target = target.substring(0, target.length - 1);
        this.setState({ currentChallenges: this.findTarget(target) });
    }

    renderChallangesMenu() {
        return (
            <ul className="list-group">
                {menuData.offers[0].subMenus.map((offer, index) => {
                    return (
                        <div key={index} className="">
                            <a href='#'>
                                <li onClick={this.handleClick.bind(this)} className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                    {offer.name}
                                    <span className="badge badge-primary badge-pill">{offer.links.length}</span>
                                </li>
                            </a>
                        </div>
                    )
                })}
            </ul>
        );
    }

    renderChallanges() {
        return (
            <ul className="list-group">
                {this.state.currentChallenges.map((offer, index) => {
                    return (
                        <div key={index} className="">
                            <a href={offer.url}>
                                <li className="list-group-item d-flex justify-content-between align-items-center shadow  mb-2 bg-white rounded ">
                                    {offer.name}
                                </li>
                            </a>
                        </div>
                    )
                })}
            </ul>
        );
    }

    renderHighLight() {
        return (
            <div className="col overflow-auto border col-sm">
                <h2>What's New ...</h2>
                <span><ol>
                    {this.state.news.map((item, index) => {
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
                    <div className="col-sm-4">
                        {this.renderChallangesMenu()}
                    </div>
                    <div className="col-sm-4" >
                        {this.renderChallanges()}
                    </div>
                    <div className="col-sm-4" >
                        {this.renderHighLight()}
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;