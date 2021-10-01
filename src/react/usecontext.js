import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
const ReactUseContext = () => {
    const [code, setCode] = useState("import React from 'react';\nconst WebSocketContext = React.createContext();\nexport default WebSocketContext;\n");
    function handleClick(type) {
        switch (type) {
            case 1:
                setCode("import React from 'react';\nconst WebSocketContext = React.createContext();\nexport default WebSocketContext;\n");
                break;
            case 2:
                setCode('2');
                break;
            case 3:
                setCode('3');
                break;
            case 4:
                setCode('4');
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <h6>UseContext Hook</h6>
            <p>React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.</p>
            <p>It makes up part of React’s Context API (the other parts being the Provider and Consumer components, which we’ll see examples of below). Context can make a nice simple alternative to Redux when your data is simple or your app is small.</p>
            <p>React Context Api has 2 facets</p>
            <div className="row">
                <div className="col-sm-3">
                    <ul>
                        <li>
                            <a href="javascript:void(0)" onClick={() => handleClick(1)}>Create Context</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => handleClick(2)}>Create Provider</a>
                        </li>

                        <li>
                            <div>Consumer</div>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => handleClick(3)}>Create Consumer</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => handleClick(4)}>useContext</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="col-sm-9">
                    <CodeMirror value={code}
                        options={{ lineNumbers: true, matchBrakets: true, mode: "javascript" }} />
                </div>
            </div>
        </div>
    )
}
export default ReactUseContext;