import { Component } from "react";
import { UnControlled as CodeMirror } from 'react-codemirror2';
import NodeJsHome from "../../nodejs";

class HOCDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsableComponent: "import {Component} from \"react\";\nimport collapseFeature from \"./collapse\";\n\nexport class CollapsableComponent extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tname: props.name\n\t\t}\n\t}\n\tshowCode(e, name) {\n\t\te.preventDefault();\n\t\tthis.props.showCode(name);\n\t}\n\trender() {\n\t\treturn ( <>\n\t\t\t<a href = \"/algoes\"\n\t\t\tonClick = {\n\t\t\t\t(e) => this.showCode(e, this.state.name)\n\t\t\t} > {\n\t\t\t\tthis.state.name\n\t\t\t} < /a> </>\n\t\t)\n\t}\n}\nexport default collapseFeature(CollapsableComponent);\n",
            collapseFeaturHOC: "import React, {Component} from \"react\";\n\nexport function collapseFeature(ComponentToCollapse) {\n\n\treturn class Collapse extends Component {\n\t\tconstructor(props) {\n\t\t\tsuper(props);\n\t\t\tthis.state = {\n\t\t\t\texpand: false,\n\t\t\t\tname: props.name,\n\t\t\t\tchilds: props.childs\n\t\t\t};\n\t\t}\n\t\texpand(e) {\n\t\t\te.preventDefault();\n\t\t\tthis.setState({\n\t\t\t\texpand: !this.state.expand\n\t\t\t});\n\t\t}\n\t\tcollapse(e) {\n\t\t\te.preventDefault();\n\t\t\tthis.setState({\n\t\t\t\texpand: !this.state.expand\n\t\t\t});\n\t\t}\n\t\tshowCode(e, name) {\n\t\t\te.preventDefault();\n\t\t\tthis.props.showCode(name);\n\t\t}\n\t\trender() {\n\t\t\treturn ( <> {\n\t\t\t\t\tthis.state.expand === false ?\n\t\t\t\t\t<a href = \"/algoes\"\n\t\t\t\t\tonClick = {\n\t\t\t\t\t\t(e) => this.expand(e)\n\t\t\t\t\t} >\n\t\t\t\t\t<i className = \"fa fa-plus m-2\"\n\t\t\t\t\taria - hidden = \"true\" > < /i> </a> :\n\t\t\t\t\t\t<a href = \"/algoes\"\n\t\t\t\t\tonClick = {\n\t\t\t\t\t\t(e) => this.expand(e)\n\t\t\t\t\t} >\n\t\t\t\t\t<i className = \"fa fa-minus m-2\"\n\t\t\t\t\taria - hidden = \"true\" > < /i> <\n\t\t\t\t\t/a>\n\t\t\t\t} <ComponentToCollapse { ...this.props}/> \n\t\t\t\t<ul > {\n\t\t\t\t\tthis.state.expand === true && this.state.childs.map((child, index) => {\n\t\t\t\t\t\treturn ( <>\n\t\t\t\t\t\t\t<li key = {\n\t\t\t\t\t\t\t\tindex\n\t\t\t\t\t\t\t} > < a key = {\n\t\t\t\t\t\t\t\tindex\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\thref = \"/algoes\"\n\t\t\t\t\t\t\tonClick = {\n\t\t\t\t\t\t\t\t(e) => this.showCode(e, child.name)\n\t\t\t\t\t\t\t} > {\n\t\t\t\t\t\t\t\tchild.name\n\t\t\t\t\t\t\t} < /a></li >\n\t\t\t\t\t\t\t</>\n\t\t\t\t\t\t)\n\t\t\t\t\t})\n\t\t\t\t} </ul> </>\n\t\t\t)\n\t\t}\n\t}\n}\nexport default collapseFeature;\n",
            howtoUse: "< CollapsableComponent \n\t\tname = {element.name}\n\t\tchilds = {element.links}\n\t\tshowCode = {this.showCode}/>\n",
            current: "import {Component} from \"react\";\nimport collapseFeature from \"./collapse\";\n\nexport class CollapsableComponent extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tname: props.name\n\t\t}\n\t}\n\tshowCode(e, name) {\n\t\te.preventDefault();\n\t\tthis.props.showCode(name);\n\t}\n\trender() {\n\t\treturn ( <>\n\t\t\t<a href = \"/algoes\"\n\t\t\tonClick = {\n\t\t\t\t(e) => this.showCode(e, this.state.name)\n\t\t\t} > {\n\t\t\t\tthis.state.name\n\t\t\t} < /a> </>\n\t\t)\n\t}\n}\nexport default collapseFeature(CollapsableComponent);\n"
        };

    }

    dispatch(input) {
        console.log(input);
        switch (input.type) {
            case 0:
                this.setState({ current: this.state.collapsableComponent });
                break;
            case 1:
                this.setState({ current: this.state.collapseFeaturHOC });
                break;
            case 2:
                this.setState({ current: this.state.howtoUse });
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className="m-2">
                <h6>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</h6>
                <p>We are going to write a HOC to encapsulate expand and collapse feature for any or all components 
                    which has list of items to disply. The HOC will ensure the expand and collapse featue whereas the 
                    core component can focus on it's own business logic.
                </p>
                
                <div className="row m-2">
                    <div className="col-sm-6 border">

                        <h6>HOC Source Code.</h6>
                        <p>Click on each component to see the source code.</p>

                        <div className="row">
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 0 })}>CollapsableComponent</a>
                            </div>
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 1 })}>collapseFeature</a>
                            </div>
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 2 })}>Usage</a>
                            </div>
                        </div>
                        <div className="row m-2">
                            <CodeMirror value={this.state.current}
                                options={{ lineNumbers: true, mode: "javascript" }} />
                        </div>
                    </div>
                    <div className="col-sm-6 border">

                        <h6>HOC Demo</h6>
                        <NodeJsHome/>
                    </div>
                </div>
            </div>
        )
    }
}
export default HOCDemo;