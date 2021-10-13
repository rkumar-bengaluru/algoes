import React,{Component} from 'react';

class Square extends Component {

    constructor(props) {
        super();
    }

    handleClick() {
        this.props.handleClick(this.props.row,this.props.col);
    }
    
    render() {
        return (
            <>
                <button style={{
                    "height" : "50px","width" : "50px"
                }} onClick={() => this.handleClick()} className="square">{this.props.value}</button>
            </>
        )
    }
}
export default Square;