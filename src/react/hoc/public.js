import React from 'react';
import withHocAuth from './hoc';

export class Public extends React.Component {
    render() {
        return(
            <div style={{"color" : "green"}}>Application Home Page</div>
        )
    }
    
}
export default withHocAuth(Public);