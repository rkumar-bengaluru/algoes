import React from 'react';

export function withHocAuth(Component) {
    return class HocAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = { authenticationRequired: props.authenticationRequired };
        }
        render() {
            const authMessage = <span style={{"color" : "red"}}>You need to Login to see this page.</span>;
            console.log(this.state);
            return (
                <div>
                    {this.state.authenticationRequired === "true" ? authMessage : 
                        <Component />
                    }
                </div>
            )
        }
    }
}
export default withHocAuth;