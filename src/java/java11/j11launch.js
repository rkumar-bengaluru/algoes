import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11Lauch = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\n/**\n * This Single-File Source-Code Program means the entire Java program in a \n * single source code .java file. This JEP is a friendly feature in the \n * early stage of learning Java\n * \n * @author Rupak Kumar...\n *\n */\npublic class J11LaunchSingleJEP330 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tString message = \"\"\n\t\t\"\n\t\t\"Launch Me with \"\n\t\tjava org.java.full.stack.java11.LaunchSingleJEP330 \"\n\t\t\"\"\n\t\t\";\n\t\tSystem.out.println(message);\n\t}\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Launch Single-File Source-Code Programs</h6>
            <p>This Single-File Source-Code Program means the entire Java program in a single source code .java file. This JEP is a friendly feature in the early stage of learning Java, but not much benefit in Java development, we all use IDE.</p>
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
export default J11Lauch;