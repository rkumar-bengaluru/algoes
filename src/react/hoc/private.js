import React from 'react';
import withHocAuth from './hoc';

export class Private extends React.Component {
    render() {
        return(
            <div>Application Private Page</div>
        )
    }
    
}
export default withHocAuth(Private);