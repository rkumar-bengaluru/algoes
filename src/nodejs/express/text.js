import ExpressHeader from "./header";
import { UnControlled as CodeMirror } from "react-codemirror2";
const ExpressText = () => {
    const code = "const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n// using text parser\napp.use(express.text());\n// post request\napp.post('/', function (req, res) {\n\tconsole.log(req.body);\n\tres.end();\n});\n// listen on port\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n";
    return (
        <>
            <ExpressHeader 
                name="express.text([options])" 
                description="This is a built-in middleware function in Express. It parses incoming request payloads into a string and is based on body-parser.Returns middleware that parses all bodies as a string and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body string containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred."
                options={[
                { "name": "inflate", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                { "name": "limit", "type": "Mixed", "default": "100kb", "description": "Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing." }
            ]} />
            <CodeMirror
                value={code}
                options={{ lineNumbers: true, mode: "javascript" }} />
        </>
    )
}
export default ExpressText;