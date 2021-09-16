import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9Factory = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java9;\n\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Set;\nimport java.util.function.Consumer;\n\n/**\n * Java 9 Collection library includes static factory methods for List, \n * Set and Map interface. These methods are useful to create small \n * number of collection.\n * \n * @author Rupak Kumar...\n *\n */\npublic class Java9Factory {\n\tpublic static void main(String[] args) {\n\t\tConsumer < Integer > c = (e) - > System.out.println(e);\n\t\tList < Integer > list = List.of(5, 4, 3, 2, 1, 0);\n\t\tlist.forEach(c);\n\t\tSet < Integer > set = Set.of(5, 4, 3, 2, 1, 0);\n\t\tset.forEach(c);\n\t\tMap < Integer, Integer > map = Map.of(1, \"Me\".hashCode(), 2, \"You\".hashCode(), 3, \"Them\".hashCode());\n\t\tmap.keySet().forEach(c);\n\t\tmap.values().forEach(c);\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java Collection Factory Methods</h6>
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
export default J9Factory;