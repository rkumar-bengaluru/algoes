import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J8Optional = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java8;\n\nimport java.util.Optional;\n\n/**\n * Java introduced a new class Optional in jdk8. It is a public \n * final class and used to deal with NullPointerException in \n * Java application. You must import java.util package to use \n * this class. It provides methods which are used to check \n * the presence of value for particular variable.\n * \n * @author Rupak Kumar...\n *\n */\npublic class J8OptionalExample {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tString[] str = new String[10];\n\t\tOptional < String > checkNull = Optional.ofNullable(str[5]);\n\t\tif (checkNull.isPresent()) { // check for value is present or not \n\t\t\tString lowercaseString = str[5].toLowerCase();\n\t\t\tSystem.out.print(lowercaseString);\n\t\t} else\n\t\t\tSystem.out.println(\"string value is not present\");\n\t}\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Optional class</h6>
            <p>Java introduced a new class Optional in Java 8. It is a public final class which is used to deal with NullPointerException in Java application. We must import java.util package to use this class. It provides methods to check the presence of value for particular variable.</p>
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
export default J8Optional;