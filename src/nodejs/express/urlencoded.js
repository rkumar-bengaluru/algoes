import ExpressHeader from "./header";
import { UnControlled as CodeMirror } from "react-codemirror2";
const ExpressUrlEncoded = () => {
    const code = "const express = require('express');\nconst app = express();\napp.use(express.urlencoded({ extended: true }));";
    return (
        <>
            <ExpressHeader 
                name="express.urlencoded([options])" 
                description="This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred. This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true)."
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
export default ExpressUrlEncoded;