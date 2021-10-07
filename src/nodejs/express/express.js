import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
export const Express = () => {
    const defaultCode = "const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n\napp.use(\n\texpress.static(\n\t\tpath.join(__dirname, '../../client/build')\n\t)\n);\n\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n";
    const defaultHeading = "express.static(root, [options])";
    const defaultDescription = "This is a built-in middleware function in Express. It serves static files and is based on serve-static.";
    const [code, setCode] = useState(defaultCode);
    const [heading, setHeading] = useState(defaultHeading);
    const [description, setDescription] = useState(defaultDescription);

    function showCode(e, f) {
        e.preventDefault();
        switch (f) {
            case 'static':
                setCode(defaultCode);
                setHeading(defaultHeading);
                setDescription(defaultDescription);
                break;
            case 'Router':
                setCode("// apirouter.js\nvar express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function (req, res) {\n\tres.status(200).json({response : \"Hello World!\"});\n});\n\nmodule.exports = router;\n\n// usage\n// main.js\nvar api = require('apirouter');\napp.use('/api',api);\n");
                setHeading('express.Router([options])');
                setDescription('Creates a new router object.You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application.');
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
                    options={{ lineNumbers: true, mode: "javascript" }} />
            </div>
        </>
    )
}
