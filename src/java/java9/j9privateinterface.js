import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9PrivateInterface = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java9;\n\n/**\n * In Java 9, we can create private methods inside an interface. Interface\n * allows us to declare private methods that help to share common code between\n * non-abstract methods.\n * \n * @author Rupak Kumar...\n *\n */\ninterface Greeting {\n\tdefault void sayHello() {\n\t\tcallPrivateHello();\n\t}\n\n\tprivate void callPrivateHello() {\n\t\tSystem.out.println(\"hello from private interface method...\");\n\t}\n}\n\npublic class Java9PrivateInterface implements Greeting {\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tGreeting g = new Java9PrivateInterface();\n\t\tg.sayHello();\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Interface Private Methods</h6>
            <p>In Java 9, we can create private methods inside an interface. Interface allows us to declare private methods that help to share common code between non-abstract methods.</p>
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
export default J9PrivateInterface;