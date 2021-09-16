import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9Anonymous = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java9;\n\n/**\n * Java 9 introduced a new feature that allows us to use diamond operator with\n * anonymous classes\n * \n * @author Rupak Kumar...\n */\ninterface Circle < T > {\n\tT area(T a);\n}\n\npublic class Java9Anonymous {\n\n\tinterface Square < T > {\n\t\tT area(T a);\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tCircle < Integer > circleAnonymous = new Circle < > () {\n\t\t\t@Override\n\t\t\tpublic Integer area(Integer radius) {\n\t\t\t\treturn (22 * radius * radius) / 7;\n\t\t\t}\n\t\t};\n\n\t\tSquare < Integer > squareAnonymous = new Square < > () {\n\t\t\t@Override\n\t\t\tpublic Integer area(Integer edge) {\n\t\t\t\treturn edge * edge;\n\t\t\t}\n\t\t};\n\t\tSystem.out.println(circleAnonymous.area(2));\n\t\tSystem.out.println(squareAnonymous.area(2));\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Anonymous Classes Improvement</h6>
            <p>Java 9 introduced a new feature that allows us to use diamond operator with anonymous classes. Using the diamond with anonymous classes was not allowed in Java 7.</p>
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
export default J9Anonymous;