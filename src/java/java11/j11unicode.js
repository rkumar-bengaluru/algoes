import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11Unicode = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\n/**\n * It means more code points, more emoji icons The below example prints a Unicode code point.\n * \n * @author Rupak Kumar...\n *\n */\npublic class J11UnicodeJEP327 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tString codepoint = \"U+1F92A\"; // crazy face\n\t\tInteger i = Integer.valueOf(codepoint.substring(2), 16);\n\t\tchar[] chars = Character.toChars(i);\n\t\tSystem.out.println(chars);\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Unicode 10</h6>
            <p>It means more code points, more emoji icons 🙂 The below example prints a Unicode code point.</p>
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
export default J11Unicode;