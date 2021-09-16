import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java15TextBlock = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java15;\n\npublic class TextBlocks {\n\n\tprivate static final String twoDimensionalCodeBlock = \"\"\n\t\" <\n\thtml >\n\t\t<\n\t\tbody >\n\t\t<\n\t\tp > Hello, world < /p> <\n\t\t/body> <\n\t\t/html>\n\t\"\"\n\t\";\n\tprivate static final String jsonCodeBlock = \"\"\n\t\" <\n\tproduct >\n\t\t<\n\t\tid > 20001 < /id> <\n\t\ttitle > Apacs Ziggler Badminton Racquet < /title> <\n\t\tmrp > 1900 < /mrp> <\n\t\t/product>\n\t\"\"\n\t\";\n\tprivate static final String sqlQueryBlock = \"\"\n\t\"\n\tSELECT \"EMP_ID\", \"LAST_NAME\"\n\tFROM \"EMPLOYEE_TB\"\n\tWHERE \"CITY\" = 'INDIANAPOLIS'\n\tORDER BY \"EMP_ID\", \"LAST_NAME\";\n\t\"\"\n\t\";\n\n\t// driver code.\n\tpublic static void main(String[] args) {\n\t\ttry {\n\t\t\tSystem.out.println(twoDimensionalCodeBlock);\n\t\t\tSystem.out.println(jsonCodeBlock);\n\t\t\tSystem.out.println(sqlQueryBlock);\n\t\t} catch (Throwable e) {\n\t\t\te.printStackTrace();\n\t\t}\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 15 Text Block</h6>
            <p>Finally, the multi-line string or text blocks is a permanent feature in Java 15.</p>
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
export default Java15TextBlock;