import ExpressHeader from "./header";
import { UnControlled as CodeMirror } from "react-codemirror2";
const ExpressRouter = () => {
    const code = "// apirouter.js\nvar express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function (req, res) {\n\tres.status(200).json({response : \"Hello World!\"});\n});\n\nmodule.exports = router;\n\n// usage\n// main.js\nvar api = require('apirouter');\napp.use('/api',api);\n";
    return (
        <>
            <ExpressHeader 
                name="express.Router([options])" 
                description="Creates a new router object.You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application."
                options={[
                { "name": "caseSensitive", "type": "Disabled by default", "default": "", "description": "Enable case sensitivity." },
                { "name": "mergeParams", "type": "Boolean", "default": "false", "description": "Preserve the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence." }
            ]} />
            <CodeMirror
                value={code}
                options={{ lineNumbers: true, mode: "javascript" }} />
        </>
    )
}
export default ExpressRouter;