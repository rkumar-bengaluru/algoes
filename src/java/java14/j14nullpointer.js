import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J14NullPointer = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java14;\n\n/**\n * Improved the description of NullPointerExceptions by telling which variable\n * was null. Add -XX:+ShowCodeDetailsInExceptionMessages option to enable this\n * feature.\n * \n * @author Rupak Kumar...\n *\n */\npublic class J14NullPointerJEP358 {\n\n\tpublic static String changeCase(String str) {\n\t\treturn str.toUpperCase();\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tString input = null;\n\t\t/**\n\t\t * Before Java 14.\n\t\t * Exception in thread \"main\" java.lang.NullPointerException\n\t\t * \t\tat NullPointerJEP358.changeCase(Test.java:13)\n\t\t * \t\tat Test.main(Test.java:17)\n\t\t */\n\t\tString result = changeCase(input);\n\t\t/**\n\t\t * Now\n\t\t * Exception in thread \"main\" java.lang.NullPointerException:\n\t\t * \tCannot invoke \"String.toUpperCase()\" because \"<parameter1>\" is null\n\t\t * \tat NullPointerJEP358.changeCase(Test.java:13)\n\t\t * \tat Test.main(Test.java:17)\n\t\t */\n\t\tSystem.out.println(result);\n\t}\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Helpful NullPointerExceptions</h6>
            <p>mproved the description of NullPointerExceptions by telling which variable was null. Add -XX:+ShowCodeDetailsInExceptionMessages option to enable this feature.</p>
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
export default J14NullPointer;