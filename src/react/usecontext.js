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
                setCode("import WebSocketContext from './websocketcontext';\nimport {\n\tuseState\n} from \"react\"\nconst WebSocketProvider = () => {\n\tconst [components, setComponents] = useState({\n\t\t\"types\": [{\n\t\t\t\t\"name\": \"Controller\",\n\t\t\t\t\"code\": \"@RestController\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"WebSocketConfig\",\n\t\t\t\t\"code\": \"@WebSocketConfigurer\"\n\t\t\t}\n\t\t],\n\t\t\"currentCode\": \"@RestController\"\n\t});\n\treturn ( <\n\t\tWebSocketContext.Provider value = {\n\t\t\t{\n\t\t\t\tcomponents: components,\n\t\t\t\thandleComponentChange: selectedComponents => {\n\t\t\t\t\t// copy components\n\t\t\t\t\tvar copy = { ...components\n\t\t\t\t\t};\n\t\t\t\t\tvar target = copy.types.filter(component => component.name === selectedComponent);\n\t\t\t\t\tcopy.currentCode = target[0].code;\n\t\t\t\t\tsetComponents(copy);\n\t\t\t\t}\n\t\t\t}\n\t\t} > {\n\t\t\tprops.children\n\t\t} <\n\t\t/WebSocketContext.Provider>\n\t);\n}\nexport default WebSocketProvider;\n");
                break;
            case 3:
                setCode("import WebSocketContext from './websocketcontext';\n\nconst WebSocketContextConsumer = () => {\n\treturn ( <\n\t\tWebSocketContext.Consumer >\n\t\t// all data from WebSocketContext.Provider is\n\t\t// passed on to the child components\n\t\t<\n\t\tComponents / >\n\t\t<\n\t\t/WebSocketContex.Consumer>\n\t);\n}\nconst Component = () => {\n\treturn ( <\n\t\ta href = \"javascript:void(0)\"\n\t\tonClick = {\n\t\t\tprops.handleSelected\n\t\t} > {\n\t\t\tprops.name\n\t\t} <\n\t\t/a>\n\t);\n}\nconst Components = () => {\n\t\treturn ( <\n\t\t\tReact.Fragment > {\n\t\t\t\tcontext => {\n\t\t\t\t\t{\n\t\t\t\t\t\tcontext.components.types.map(component => { <\n\t\t\t\t\t\t\tComponent name = {\n\t\t\t\t\t\t\t\tcomponent.name\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\thandleSelected = {\n\t\t\t\t\t\t\t\t() => context.handleComponentChange(\n\t\t\t\t\t\t\t\t\tcomponent.name\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t} <\n\t\t\t\tdiv > {\n\t\t\t\t\tcontext.components.currentCode\n\t\t\t\t} < /div> <\n\t\t\t\t/React.Fragment>\n\t\t\t);\n\t\t}\n\n\t\texport default WebSocketContextConsumer;\n");
                break;
            case 4:
                setCode("import WebSocketContext from './websocketcontext'\nconst WebSocketContextConsumer = () => {\n\tconst ctx = React.useContext(WebSocketContext);\n\treturn ( <React.Fragment >\n\t\t\t\t<Components / >\n\t\t\t</React.Fragement>\n\t)\n}\nconst Component = () => {\n\treturn ( <a href = \"javascript:void(0)\"\n\t\t\t\tonClick = {\n\t\t\t\t\tprops.handleSelected\n\t\t\t} > {props.name} </a>\n\t);\n}\nconst Components = () => {\n\treturn ( <React.Fragment > {\n\t\t\tctx.components.types.map(componenet => { <\n\t\t\t\tComponent name = {\n\t\t\t\t\tcomponent.name\n\t\t\t\t}\n\t\t\t\thandleSelected = {\n\t\t\t\t\t() => ctx.handleComponentChange(component.name)\n\t\t\t\t}\n\t\t\t})\n\t\t} <div > {ctx.component.currentCode} < /div>\n\t\t</React.Fragement>\n\t);\n}\nexport default WebSocketContextConsumer;\n");
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