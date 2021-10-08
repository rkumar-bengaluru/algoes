import React from "react";
import menus from '../megamenu/megamenu.json';
import ParentComponent from "./collapse/parentcomponent";
import ExpressHome from "./express/home";
import { Express } from './express/express';
import ExpressJson from "./express/json";
import ExpressRaw from "./express/raw";
import ExpressRouter from "./express/router";
import ExpressStatic from "./express/static";
import ExpressText from "./express/text";
import ExpressUrlEncoded from "./express/urlencoded";
class NodeJsHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nodejs: menus.offers.filter((element) => {
                return element.name === 'NodeJs';
            })[0], currentComponent: <ExpressHome />
        }
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {

        switch (name) {
            case 'Express':
                this.setState({ currentComponent: <ExpressHome /> });
                break;
            case 'express()':
                this.setState({ currentComponent: <Express /> });
                break;
            case 'express.static':
                this.setState({ currentComponent: <ExpressStatic /> });
                break;
            case 'express.router':
                this.setState({ currentComponent: <ExpressRouter /> });
                break;
            case 'express.encodeUrl':
                this.setState({ currentComponent: <ExpressUrlEncoded /> });
                break;
            case 'express.json':
                this.setState({ currentComponent: <ExpressJson /> });
                break;
            case 'express.raw':
                this.setState({ currentComponent: <ExpressRaw /> });
                break;
            case 'express.text':
                this.setState({ currentComponent: <ExpressText /> });
                break;
            default:
                this.setState({ currentComponent: <div>{name}</div> });
                break;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Node Js</h2>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.</p>
                <div className="row">
                    <div className="col-sm-3">
                        {this.state.nodejs.subMenus.map((element, index) => {
                            return (
                                <ParentComponent key={index} name={element.name} childs={element.links} showComponent={this.showComponent} />
                            )
                        })}
                    </div>
                    <div className="col-sm-9 border">
                        {this.state.currentComponent}
                    </div>
                </div>
            </div>
        )
    }
}
export default NodeJsHome;