import { Component } from "react";
import { UnControlled as CodeMirror } from 'react-codemirror2';
import PublicComponent from "./public";
import PrivateComponent from "./private";


class HOCDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicComponent: "import React from 'react';\nimport withHocAuth from './hoc';\n\nexport class Public extends React.Component {\n\trender() {\n\t\treturn ( <\n\t\t\tdiv style = {\n\t\t\t\t{\n\t\t\t\t\t\"color\": \"green\"\n\t\t\t\t}\n\t\t\t} > Application Home Page < /div>\n\t\t)\n\t}\n\n}\nexport default withHocAuth(Public);\n",
            privateComponent: "import React from 'react';\nimport withHocAuth from './hoc';\n\nexport class Private extends React.Component {\n\trender() {\n\t\treturn ( <div > Application Private Page < /div>\n\t\t)\n\t}\n\n}\nexport default withHocAuth(Private);\n",
            hocComponent: "import React from 'react';\n\nexport function withHocAuth(Component) {\n\treturn class HocAuthentication extends React.Component {\n\t\tconstructor(props) {\n\t\t\tsuper(props);\n\t\t\tthis.state = {\n\t\t\t\tauthenticationRequired: props.authenticationRequired\n\t\t\t};\n\t\t}\n\t\trender() {\n\t\t\tconst authMessage = < span style = {\n\t\t\t\t{\n\t\t\t\t\t\"color\": \"red\"\n\t\t\t\t}\n\t\t\t} > You need to Login to see this page. < /span>;\n\t\t\treturn ( <div > {\n\t\t\t\t\tthis.state.authenticationRequired === \"true\" ? authMessage :\n\t\t\t\t\t\t<Component / >\n\t\t\t\t} </div>\n\t\t\t)\n\t\t}\n\t}\n}\nexport default withHocAuth;\n",
            current: "import React from 'react';\nimport withHocAuth from './hoc';\n\nexport class Public extends React.Component {\n\trender() {\n\t\treturn ( <\n\t\t\tdiv style = {\n\t\t\t\t{\n\t\t\t\t\t\"color\": \"green\"\n\t\t\t\t}\n\t\t\t} > Application Home Page < /div>\n\t\t)\n\t}\n\n}\nexport default withHocAuth(Public);\n",
            showPublic: false,
            showPrivate: false
        };

    }

    dispatch(input) {
        console.log(input);
        switch (input.type) {
            case 0:
                this.setState({ current: this.state.publicComponent });
                break;
            case 1:
                this.setState({ current: this.state.privateComponent });
                break;
            case 2:
                this.setState({ current: this.state.hocComponent });
                break;
            default:
                break;
        }
    }

    renderPage(input) {
        switch (input.type) {
            case 0:
                this.setState({ showPublic: true, showPrivate: false });
                break;
            case 1:
                this.setState({ showPublic: false, showPrivate: true });
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className="m-2">
                <h6>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</h6>
                <p>Let's say in our application there are 2 components, one is public component example home page whereas,
                    the other component is a private component which is visible only to authenticated user.
                </p>
                <p>We will develop a High Order Component(HOC), the input to this hoc is a public component(HomePage) and
                    private component(UserProfile), hoc will check if user clicks on the private component then it displays
                    the message 'Authentication Required', whereas when the user clicks the home page, hoc displays the home page.
                </p>
                <div className="row m-2">
                    <div className="col-sm-6 border">

                        <h6>HOC Source Code.</h6>
                        <p>Click on each component to see the source code.</p>

                        <div className="row">
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 0 })}>Public Component</a>
                            </div>
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 1 })}>Private Component</a>
                            </div>
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.dispatch({ type: 2 })}>HOC Component</a>
                            </div>
                        </div>
                        <div className="row m-2">
                            <CodeMirror value={this.state.current}
                                options={{ lineNumbers: true, mode: "javascript" }} />
                        </div>
                    </div>
                    <div className="col-sm-6 border">

                        <h6>HOC Demo</h6>
                        <p>Both the Public Page and Private Page is wrapped in a HOC Component,Click on each to see how differently the hoc behaves...</p>


                        <div className="row">
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.renderPage({ type: 0 })}>Public Page</a>
                            </div>
                            <div className="col">
                                <a href="javascript:void(0)" onClick={() => this.renderPage({ type: 1 })}>Private Page</a>
                            </div>
                        </div>
                        <div className="row m-2">
                            {this.state.showPublic &&
                                <PublicComponent authenticationRequired="false" />
                            }
                            {this.state.showPrivate &&
                                <PrivateComponent authenticationRequired="true" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HOCDemo;