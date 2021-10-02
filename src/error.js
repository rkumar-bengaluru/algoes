/**
 * Error boundaries are React components that catch JavaScript errors anywhere 
 * in their child component tree, log those errors, and display a fallback UI 
 * instead of the component tree that crashed. Error boundaries catch errors 
 * during rendering, in lifecycle methods, and in constructors of the whole 
 * tree below them.
 */
import React from 'react';

class LSErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errored : false};
    }
    /**
     * Custom Error Boundary class must implments getDerivedStateFromError()
     */
    static getDerivedStateFromError(error) {
        return {errored : true};
    }
    /**
     * Custom Error Boundary can override the lifecycle method componentDidCatch()
     * method to log the error and errorInfo 
     */
    componentDidCatch(error,errorInfo) {
        console.log('error happened in child components' + error);
    }

    render() {
        if(this.state.errored) {
            return (
                <div>Something Went Wrong loading this component.</div>
            )
        }
        return this.props.children;
    }
}
export default LSErrorBoundary;