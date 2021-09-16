
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J16PatternMatch = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java16;\n\n/**\n * The pattern matching for instanceof is a standard or product feature in Java\n * 16.\n * \n * @author Rupak Kumar...\n *\n */\npublic class J16PatternMatchingJEP394 {\n\n\tpublic sealed interface Shape permits Square, Rectangle {}\n\n\tpublic final record Square(int size) implements Shape {}\n\n\tpublic final record Rectangle(int length, int breadth) implements Shape {}\n\n\tpublic static int calcArea(Shape shape) throws Exception {\n\t\tif (shape instanceof Square s) {\n\t\t\treturn s.size() * s.size();\n\t\t} else if (shape instanceof Rectangle r) {\n\t\t\treturn r.length() * r.breadth();\n\t\t} else {\n\t\t\tthrow new Exception(\"Unexpected Shape...\");\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tShape square = new Square(10);\n\t\tShape rectangle = new Rectangle(10, 5);\n\t\ttry {\n\t\t\tSystem.out.println(\"square area is -->\" + calcArea(square));\n\t\t\tSystem.out.println(\"rectangle area is -->\" + calcArea(rectangle));\n\t\t} catch (Exception e) {\n\t\t\te.printStackTrace();\n\t\t}\n\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Pattern Matching for instanceof</h6>
            <p>The pattern matching for instanceof is a standard or product feature in Java 16.</p>
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
export default J16PatternMatch;