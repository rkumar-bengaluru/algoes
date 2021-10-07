import React from "react";
import menus from '../megamenu/megamenu.json';
import CollapsableComponent from "./collapsable";
import ExpressHome from "./express/home";
class NodeJsHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nodejs : menus.offers.filter((element) => {
            return element.name === 'NodeJs';
        })[0],currentComponent : <ExpressHome/>}
        this.showCode = this.showCode.bind(this);
    }

    showCode(name) {
        switch(name) {
            case 'Express':
                this.setState({currentComponent : <ExpressHome/>});
                break;
            default:
                this.setState({currentComponent : <div>{name}</div>});
                break;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Node Js</h2>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.</p>
                <div className="row">
                    <div className="col-sm-2">
                        {this.state.nodejs.subMenus.map((element,index) => {
                            return (
                                <CollapsableComponent key={index} name={element.name} childs={element.links} showCode={this.showCode}/>
                            )
                        })}
                    </div>
                    <div className="col-sm-10 border">
                        {this.state.currentComponent}
                    </div>
                </div>
            </div>
        )
    }
}
export default NodeJsHome;