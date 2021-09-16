import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9TryResource = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java9;\n\n/**\n * @author Rupak Kumar...\n *\n */\npublic class Java9TryResource {\n\n\tpublic class SomeResource implements AutoCloseable {\n\t\t@Override\n\t\tpublic void close() throws Exception {\n\t\t\t// close resource.\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tSomeResource resource = new Java9TryResource().new SomeResource();\n\t\ttry (resource) {\n\t\t\tSystem.out.println(\"using try with resouces as local variable...\");\n\t\t} catch (Exception e) {\n\t\t\tSystem.out.println(e);\n\t\t}\n\t}\n\n}©\n2021 GitHub, Inc.\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Try With Resouces</h6>
            <p>In Java 7, try-with-resources has a limitation that requires resource to declare locally within its block.</p>
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
export default J9TryResource;