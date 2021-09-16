import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11Nac = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\n/**\n * It supports private access within nest members directly, no more \n * via an auto-generated bridge method access$000. Furthermore, \n * new nested APIs for validation and allowed private reflection \n * access within nest members.\n * \n * @author Rupak Kumar...\n */\npublic class J11NACJEP181 {\n\n\tpublic class Parent {\n\t\tprivate String parentName;\n\t\tpublic Parent(String name) {\n\t\t\tthis.parentName = name;\n\t\t}\n\n\t\tprivate class Child {\n\t\t\tprivate String childName;\n\t\t\tpublic Child(String name) {\n\t\t\t\tthis.childName = name;\n\t\t\t}\n\n\t\t\tpublic void printParentName() {\n\t\t\t\tSystem.out.println(parentName);\n\t\t\t}\n\n\t\t\tpublic void printChildName() {\n\t\t\t\tSystem.out.println(this.childName);\n\t\t\t}\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tJ11NACJEP181.Parent.Child p = new J11NACJEP181().new Parent(\"Rupak Kumar...\").new Child(\"Raj\");\n\t\tp.printChildName();\n\t\tp.printParentName();\n\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Nest-Based Access Control</h6>
            <p>It supports private access within nest members directly, no more via an auto-generated bridge method access$000. Furthermore, new nested APIs for validation and allowed private reflection access within nest members.</p>
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
export default J11Nac;