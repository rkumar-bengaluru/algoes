import ExpressHeader from "./header";
import { UnControlled as CodeMirror } from "react-codemirror2";
const ExpressStatic = () => {
    const code = "const express = require('express')\nconst app = express();\nconst path = require('path');\nrequire('dotenv').config();\n\napp.use(\n\texpress.static(\n\t\tpath.join(__dirname, '../../client/build')\n\t)\n);\n\nconst port = process.env.PORT;\napp.listen(port, function () {\n\tconsole.log('Server started on port: ' + port);\n});\n";
    return (
        <>
            <ExpressHeader 
                name="express.static(rootDir,[options])" 
                description = "This is a built-in middleware function in Express. It serves static files and is based on serve-static."
                options={[
                { "name": "dotfiles", "description": "Determines how dotfiles (files or directories that begin with a dot “.”) are treated.", "type": "String", "default": "ignore" },
                { "name": "extensions", "type": "Mixed", "default": "false", "description": "Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found. Example: ['html', 'htm']." },
                { "name": "redirect", "type": "Boolean", "default": "true", "description": "Redirect to trailing “/” when the pathname is a directory." }
            ]} />
            <CodeMirror
                value={code}
                options={{ lineNumbers: true, mode: "javascript" }} />
        </>
    )
}
export default ExpressStatic;