import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
export const Express = () => {
    const defaultCode = "const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n\napp.use(\n\texpress.static(\n\t\tpath.join(__dirname, '../../client/build')\n\t)\n);\n\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n";

    const defaultDescription = "This is a built-in middleware function in Express. It serves static files and is based on serve-static.";
    const [code, setCode] = useState(defaultCode);
    const Heading = (props) => {
        return (
            <>
                <h6>{props.name}</h6>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Property</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th scope="col">Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.options.map((opt, index) => {
                            return (
                                <tr>
                                    <td>{opt.name}</td>
                                    <td>{opt.description}</td>
                                    <td>{opt.type}</td>
                                    <td>{opt.default}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
    const defaultHeading = <Heading name="express.static(rootDir,[options])" options={[
        { "name": "dotfiles", "description": "Determines how dotfiles (files or directories that begin with a dot “.”) are treated.", "type": "String", "default": "ignore" },
        { "name": "extensions", "type": "Mixed", "default": "false", "description": "Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found. Example: ['html', 'htm']." },
        { "name": "redirect", "type": "Boolean", "default": "true", "description": "Redirect to trailing “/” when the pathname is a directory." }
    ]} />

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
                setHeading(<Heading name="express.Router([options])" options={[
                    { "name": "caseSensitive", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                    { "name": "mergeParams", "type": "Boolean", "default": "false", "description": "Preserve the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence." }
                ]} />);
                setDescription('Creates a new router object.You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application.');
                break;
            case 'urlencoded':
                setCode("const express = require('express');\nconst app = express();\napp.use(express.urlencoded({ extended: true }));");
                setHeading(<Heading name="express.urlencoded([options])" options={[
                    { "name": "inflate", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                    { "name": "limit", "type": "Mixed", "default": "100kb", "description": "Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing." }
                ]} />);
                setDescription('This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred. This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).');
                break;
            case 'json':
                setCode("const express = require('express');\nconst app = express();\napp.use(express.json());");
                setHeading(<Heading name="express.json([options])" options={[
                    { "name": "inflate", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                    { "name": "limit", "type": "Mixed", "default": "100kb", "description": "Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing." }
                ]} />);
                setDescription('This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.');
                break;
            case 'raw':
                setCode("const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n// using raw parser\napp.use(express.raw());\n// post request\napp.post('/', function (req, res) {\n\tconsole.log(req.body);\n\tres.end();\n});\n// listen on port\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n");
                setHeading(<Heading name="express.raw([options])" options={[
                    { "name": "inflate", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                    { "name": "limit", "type": "Mixed", "default": "100kb", "description": "Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing." }
                ]} />);
                setDescription('This is a built-in middleware function in Express. It parses incoming request payloads into a Buffer and is based on body-parser.Returns middleware that parses all bodies as a Buffer and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body Buffer containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.');
                break;
            case 'text':
                setCode("const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n// using text parser\napp.use(express.text());\n// post request\napp.post('/', function (req, res) {\n\tconsole.log(req.body);\n\tres.end();\n});\n// listen on port\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n");
                setHeading(<Heading name="express.text([options])" options={[
                    { "name": "inflate", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                    { "name": "limit", "type": "Mixed", "default": "100kb", "description": "Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing." }
                ]} />);
                setDescription('This is a built-in middleware function in Express. It parses incoming request payloads into a string and is based on body-parser.Returns middleware that parses all bodies as a string and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body string containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.');
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
                <div className="col-sm-12">
                    <CodeMirror
                        value={code}
                        options={{ lineNumbers: true, mode: "javascript" }} />
                </div>

            </div>
        </>
    )
}
