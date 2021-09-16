import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J8Functional = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java8;\n\n/**\n * An Interface that contains exactly one abstract method is known as functional\n * interface. It can have any number of default, static methods but can contain\n * only one abstract method. It can also declare methods of object class.\n * \n * @author Rupak Kumar...\n */\npublic class J8Functional {\n\n\t@FunctionalInterface\n\tinterface Greeting {\n\t\tvoid functional();\n\n\t\tdefault void sayHello() {\n\t\t\tSystem.out.println(\"from default say hello...\");\n\t\t}\n\n\t\tstatic void sayStaticHello() {\n\t\t\tSystem.out.println(\"from static method say hello...\");\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tGreeting g = () - > {\n\t\t\tSystem.out.println(\"from functional method say hello...\");\n\t\t};\n\t\tGreeting.sayStaticHello();\n\t\tg.sayHello();\n\t\tg.functional();\n\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Functional interfaces</h6>
            <p>An Interface that contains only one abstract method is known as functional interface. It can have any number of default and static methods. It can also declare methods of object class.</p>
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
export default J8Functional;