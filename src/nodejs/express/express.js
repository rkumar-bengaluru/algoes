import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
export const Express = () => {
    const defaultCode = "const express = require('express')\nconst app = express();\nconst port = process.env.PORT;\nconst path = require('path');\nvar logger = require('./src/logger/logger');\napp.use(\n\texpress.static(\n\t\tpath.join(__dirname, '../client/build')\n\t)\n);\napp.listen(port, function () {\n\tlogger.debug('Server started on port: ' + port);\n});\n";
    const defaultHeading = "express.static(root, [options])";
    const defaultDescription = "This is a built-in middleware function in Express. It serves static files and is based on serve-static.";
    const [code,setCode] = useState(defaultCode);
    const [heading, setHeading] = useState(defaultHeading);
    const [description, setDescription] = useState(defaultDescription);
    
    function showCode(e,f) {
        e.preventDefault();
        switch(f) {
            case 'static':
                setCode(defaultCode);
                setHeading(defaultHeading);
                setDescription(defaultDescription);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <h6>express()</h6>
            <div className="row border m-2">
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'static')}>express.static()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'Router')}> express.Router()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'urlencoded')}> express.urlencoded()</a>
                </div>
            </div>
            <div className="row border m-2">
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'json')}> express.json()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'raw')}> express.raw()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'text')}> express.text()</a>
                </div>
            </div>
            <h6>{heading}</h6>
                <p>{description}</p>
            <div className="row">
                <CodeMirror 
                    value={code}
                    options={{lineNumbers:true,mode:"javascript"}}/>
            </div>
        </>
    )
}
