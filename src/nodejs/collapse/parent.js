import { Component } from "react";
import ChildComponent  from "./childcomponent";

export function parentCollapse(WrappedComponent) {
    return class ParentCollapseComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { expand: false, name: props.name, childs: props.childs};
        }
        expand(e) {
            e.preventDefault();
            this.setState({ expand: !this.state.expand });
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
                    <WrappedComponent name={this.props.name} showComponent={this.props.showComponent}/>
                    <ul>
                        {this.state.expand === true && this.state.childs.map((child, index) => {
                            return (
                                <ChildComponent name={child.name} key={index} childs={child.sublinks} showComponent={this.props.showComponent}/>
                            )
                        })}
                    </ul>
                </>
            )
        }
    }
}
export default parentCollapse;