import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J14SwitchExp = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java14;\n\n/**\n * The switch expression was a preview feature in Java 12 and Java 13; now it is\n * officially JDK standard feature.\n * \n * There are 2 approaches for this, yield and array function.\n * \n * @author Rupak Kumar...\n */\npublic class J14SwitchExpressionsJEP361 {\n\n\t/**\n\t * Switch expression with yield.\n\t * \n\t * @param shape\n\t * @return\n\t */\n\tpublic static int calcAreaByYield(Shape shape) {\n\t\tvar result =\n\t\t\tswitch (shape.type()) {\n\t\t\t\tcase 0, 1:\n\t\t\t\t\t{\n\t\t\t\t\t\tif (shape instanceof Square s) {\n\t\t\t\t\t\t\tyield s.size() * s.size();\n\t\t\t\t\t\t} else if (shape instanceof Rectangle r) {\n\t\t\t\t\t\t\tyield r.length * r.breadth;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\tcase 2:\n\t\t\t\t\t{\n\t\t\t\t\t\tif (shape instanceof Circle c) {\n\t\t\t\t\t\t\tyield(22 * c.radius * c.radius) / 7;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\tdefault:\n\t\t\t\t\tyield - 1;\n\t\t\t};\n\t\treturn result;\n\t}\n\t/**\n\t * Switch expression with arrow function\n\t * \n\t * @param shape\n\t * @param type\n\t * @return\n\t */\n\tpublic static int calAreaByArrow(Shape shape) {\n\n\t\tvar result =\n\t\t\tswitch (shape.type()) {\n\t\t\t\tcase 0, 1 - > {\n\t\t\t\t\tvar area = 0;\n\t\t\t\t\tif (shape instanceof Square s) {\n\t\t\t\t\t\tarea = s.size() * s.size();\n\t\t\t\t\t} else if (shape instanceof Rectangle r) {\n\t\t\t\t\t\tarea = r.length * r.breadth;\n\t\t\t\t\t}\n\t\t\t\t\tyield area;\n\t\t\t\t}\n\t\t\t\tcase 2 - > {\n\t\t\t\t\tvar area = 0;\n\t\t\t\t\tif (shape instanceof Circle c) {\n\t\t\t\t\t\tarea = (22 * c.radius * c.radius) / 7;\n\t\t\t\t\t}\n\t\t\t\t\tyield area;\n\t\t\t\t}\n\t\t\t\tdefault - > -1;\n\t\t\t};\n\t\treturn result;\n\n\t}\n\n\tpublic sealed interface Shape permits Square, Rectangle, Circle {\n\t\tint type();\n\t}\n\n\tpublic final record Square(int size) implements Shape {\n\n\t\t@Override\n\t\tpublic int type() {\n\t\t\t// TODO Auto-generated method stub\n\t\t\treturn 0;\n\t\t}\n\t}\n\n\tpublic final record Rectangle(int length, int breadth) implements Shape {\n\n\t\t@Override\n\t\tpublic int type() {\n\t\t\t// TODO Auto-generated method stub\n\t\t\treturn 1;\n\t\t}\n\t}\n\n\tpublic final record Circle(int radius) implements Shape {\n\n\t\t@Override\n\t\tpublic int type() {\n\t\t\t// TODO Auto-generated method stub\n\t\t\treturn 2;\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tShape square = new Square(10);\n\t\tRectangle rectangle = new Rectangle(10, 5);\n\t\tCircle circle = new Circle(5);\n\t\tassert calcAreaByYield(square) == 100: \"failed\";\n\t\tassert calcAreaByYield(rectangle) == 50: \"failed\";\n\t\tassert calcAreaByYield(circle) == 78: \"failed\";\n\t\tassert calAreaByArrow(square) == 100: \"failed\";\n\t\tassert calAreaByArrow(rectangle) == 50: \"failed\";\n\t\tassert calAreaByArrow(circle) == 78: \"failed\";\n\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Switch Expressions (Standard)</h6>
            <p>The switch expression was a preview feature in Java 12 and Java 13; now it is officially JDK standard feature, it means from Java 14 and onward, we can return value via switch expressions without specifying the --enable-preview option.</p>
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
export default J14SwitchExp;