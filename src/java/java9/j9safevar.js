import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9SafeVar = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java9;\n\nimport java.util.Map;\n\n/**\n * It is an annotation which applies on a method or constructor that takes\n * varargs parameters. It is used to ensure that the method does not perform\n * unsafe operations on its varargs parameters.\n * \n * It was included in Java7 and can only be applied on - Final methods - Static\n * methods - Constructors\n * \n * From Java 9, it can also be used with private instance methods.\n * \n * @author Rupak Kumar...\n *\n */\npublic class Java9SafeVarargsExample {\n\t// on constructors\n\t@SafeVarargs\n\tpublic Java9SafeVarargsExample(Map < String, String > ...props) {\n\t\t// TODO\n\t}\n\n\t// final methods\n\t@SafeVarargs\n\tpublic final void scanProps(Map < String, String > ...props) {\n\t\tscanPrivate(props);\n\t}\n\n\t@SafeVarargs\n\tpublic static void scanStaticProps(Map < String, String > ...props) {\n\t\t// TODO\n\t}\n\n\t@SafeVarargs\n\tprivate void scanPrivate(Map < String, String > ...props) {\n\t\t// TODO\n\t}\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java @SafeVarargs Annotation</h6>
            <p>It is an annotation which applies on a method or constructor that takes varargs parameters. It is used to ensure that the method does not perform unsafe operations on its varargs parameters.</p>
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
export default J9SafeVar;