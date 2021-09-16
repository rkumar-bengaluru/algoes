import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11LocalVar = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n/**\n * This JEP adds support for the var keyword in lambda parameters\n * \n * @author Rupak Kumar...\n */\npublic class J11LocalVarJEP323 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tList < String > list = Arrays.asList(\"a\", \"b\", \"c\");\n\t\tString result = list.stream().map(\n\t\t\t(var x) - > x.toUpperCase()).collect(Collectors.joining(\",\"));\n\t\tSystem.out.println(result);\n\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Local-Variable Syntax for Lambda Parameters</h6>
            <p>This JEP adds support for the var keyword in lambda parameters.</p>
            <div className="row p-2">
                <CodeMirror
                    value={code}
                    ref={cm}
                    className="cm-java-small"
                    options={{
                        lineNumbers: true,
                        matchBrackets: true,
                        continueComments: "Enter",
                        extraKeys: { "Ctrl-Q": "toggleComment" },
                        mode: "javascript"
                    }}
                />
            </div>
            <div className="row p-2">
                All source code is available &nbsp;<a href="https://github.com/rkumar-bengaluru/java-full-stack/" target="_blank"> here</a>
            </div>
        </div>
    )
}
export default J11LocalVar;