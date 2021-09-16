import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9Process = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java9;\n\n/**\n * Java has improved its process API in Java 9 version that helps to manage and\n * control operating system processes.\n * \n * @author Rupak Kumar...\n *\n */\npublic class Java9Process {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tProcessHandle currentProcess = ProcessHandle.current(); // Current processhandle\n\t\tSystem.out.println(\"Process Id: \" + currentProcess.pid()); // Process id\n\t\tSystem.out.println(\"Direct children: \" + currentProcess.children()); // Direct children of the process\n\t\tSystem.out.println(\"Class name: \" + currentProcess.getClass()); // Class name\n\t\tSystem.out.println(\"All processes: \" + ProcessHandle.allProcesses()); // All current processes\n\t\tSystem.out.println(\"Process info: \" + currentProcess.info()); // Process info\n\t\tSystem.out.println(\"Is process alive: \" + currentProcess.isAlive());\n\t\tSystem.out.println(\"Process's parent \" + currentProcess.parent()); // Parent of the processs\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java Process API Improvement</h6>
            <p>Java has improved its process API in Java 9 version that helps to manage and control operating system processes.</p>
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
export default J9Process;