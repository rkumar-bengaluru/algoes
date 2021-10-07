import { UnControlled as CodeMirror } from "react-codemirror2"
export const Express = () => {
    const constructor = '// The express() function is a top-level function exported by the express module.\nvar express = require(\'express\');\n//Creates an Express application.\nvar app = express();'
    return (
        <>
            <h6>express()</h6>
            <CodeMirror
                value={constructor}
                />
            <h6>express.static</h6>
        </>
    )
}
