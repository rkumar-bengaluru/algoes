import React, {useReducer} from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
const ReactErrorBoundary = () => {
    const def = "/**\n * Error boundaries are React components that catch JavaScript errors anywhere \n * in their child component tree, log those errors, and display a fallback UI \n * instead of the component tree that crashed. Error boundaries catch errors \n * during rendering, in lifecycle methods, and in constructors of the whole \n * tree below them.\n */\nimport React from 'react';\n\nclass LSErrorBoundary extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\terrored: false\n\t\t};\n\t}\n\t/**\n\t * Custom Error Boundary class must implments getDerivedStateFromError()\n\t */\n\tstatic getDerivedStateFromError(error) {\n\t\treturn {\n\t\t\terrored: true\n\t\t};\n\t}\n\t/**\n\t * Custom Error Boundary can override the lifecycle method componentDidCatch()\n\t * method to log the error and errorInfo \n\t */\n\tcomponentDidCatch(error, errorInfo) {\n\t\tconsole.log('error happened in child components' + error);\n\t}\n\n\trender() {\n\t\tif (this.state.errored) {\n\t\t\treturn ( <\n\t\t\t\tdiv > Something Went Wrong loading this component. < /div>\n\t\t\t)\n\t\t}\n\t\treturn this.props.children;\n\t}\n}\nexport default LSErrorBoundary;\n";
    const initial = { current: def, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);
    function reducer(state, action) {
        switch (action.type) {
            case 0:
                return { prev: state.current, current: def };
            case 1:
                return { prev: state.current, current: "< LSErrorBoundary >\n\t// use React.Suspense as fallback.\n\t<Suspense fallback = {\n\t\t() => {\n\t\t\treturn <h1 > Error happened in children. < /h1>}}> \n\t\t// one or more child components, any error in loading\n\t\t// child component will be caught by LSErrorBoundary\n\t\t<SpringRouter / >\n\t</Suspense> \n</LSErrorBoundary>\n" };
            default:
                break;
        }
    }
    return (
        <>
            <h6>React Error Boundary</h6>
            <p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>
            <div className="row">
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => dispatch({ type: 0 })}>Define Custom ErrorBoundary</a>
                </div>
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => dispatch({ type: 1 })}>Usage Of ErrorBoundary</a>
                </div>
            </div>
            <div className="row">
                <CodeMirror
                    value={state.current}
                    options={{
                        lineNumbers: true,
                        mode: "javascript"
                    }}
                />
            </div>
        </>
    )
}
export default ReactErrorBoundary;