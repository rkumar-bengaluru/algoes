import React, { Component } from 'react';

function childCollapse(WrappedComponent) {
    return class ChildCollpse extends Component {
        constructor(props) {
            super(props);
            this.state = { expand: false, name: props.name, childs: props.childs };
            this.showComponent = this.showComponent.bind(this);
        }
        expand(e) {
            e.preventDefault();
            this.setState({ expand: !this.state.expand });
        }
        showComponent(e, name) {
            e.preventDefault();
            this.props.showComponent(name);
        }
        render() {
            return (
                <>
                    {this.state.expand === false ?
                        <a data-testid={this.props.name} href="/algoes" onClick={(e) => this.expand(e)}>
                            <i className="fa fa-plus m-2" aria-hidden="true"></i>
                        </a>
                        :
                        <a data-testid={this.props.name} href="/algoes" onClick={(e) => this.expand(e)}>
                            <i className="fa fa-minus m-2" aria-hidden="true"></i>
                        </a>
                    }
                    <WrappedComponent name={this.props.name} showComponent={this.props.showComponent} />
                    <ul>
                        {this.state.childs != undefined &&
                            <>
                                {this.state.expand === true && this.state.childs.map((child, index) => {
                                    return (
                                        <li key={index}><a key={index} href="/algoes" onClick={(e) => this.showComponent(e, child.name)}>{child.name}</a></li>
                                    )
                                })}
                            </>
                        }
                    </ul>
                </>
            )
        }
    }
}
export default childCollapse;