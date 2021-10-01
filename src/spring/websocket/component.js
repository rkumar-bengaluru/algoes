import { useContext, Fragment } from "react";
import WebSocketContext from "./websocketcontext";
import { UnControlled as CodeMirror } from 'react-codemirror2'
const Component = props => (
    <Fragment>
        <div className="col">
            <a href="javascript:void(0)" onClick={props.handleSelected}>{props.name}</a>
        </div>
    </Fragment>
);

const Components = () => {
    const value = useContext(WebSocketContext);

    return (
        <Fragment>
            <div className="row">
                {value.components.types.map(component => (
                    <Component
                        key={component.name}
                        name={component.name}
                        handleSelected={() => value.handleSelectedComponent(component.name)}
                    />
                ))}
            </div>
            <div className="row">
                <CodeMirror value={value.components.currentCode}
                    options={{
                        lineNumbers: true,
                        matchBrackets: true,
                        continueComments: "Enter",
                        extraKeys: { "Ctrl-Q": "toggleComment" },
                        mode: "javascript"
                    }} />
            </div>
        </Fragment>
    )
}
export default Components;