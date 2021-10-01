import WebSocketProvider from "./websocketprovider";
import WebSocketContext from "./websocketcontext";
import React, { Fragment, useContext } from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'

const Component = props => (
    <Fragment>
        <div className="col">
            <a href="javascript:void(0)" onClick={props.handleSelected}>{props.name}</a>
        </div>
    </Fragment>
);

const Components = () => (
    
    <WebSocketContext.Consumer>
        {context => (
            <Fragment>
                <div className="row">
                    {context.c.types.map(component => (
                        <Component
                            key={component.name}
                            name={component.name}
                            handleSelected={() => context.handleSelectedComponent(component.name)}
                        />
                    ))}
                </div>
                <div className="row">
                    <CodeMirror value={context.c.currentCode}
                    options={{
                        lineNumbers: true,
                        matchBrackets: true,
                        continueComments: "Enter",
                        extraKeys: { "Ctrl-Q": "toggleComment" },
                        mode: "javascript"
                    }}/>
                </div>
            </Fragment>
        )}
    </WebSocketContext.Consumer>
);

const WebSocket = () => {

    return (
        <WebSocketProvider>
            <div className="row">
                <h6>WebSocket </h6>
                <p>The WebSocket protocol has only two agendas : 1.) to open up a handshake, and 2.) to help the data transfer. Once the server and client both have their handshakes in, they can send data to each other with less overhead at will.</p>
            </div>
            <Components />
        </WebSocketProvider>
    )
}
export default WebSocket;