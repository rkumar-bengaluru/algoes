
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java16SealedInterface = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java15;\n/**\n * This JEP introduced few new keywords, sealed, non-seal, permits to \n * support sealed classes and interfaces. The sealed classes and interfaces \n * restrict who can be a subtype.\n * \n * @author Rupak Kumar...\n */\npublic class SealedJEP360 {\n\t// sealed interface with allowed sub types.\n\tpublic abstract sealed interface Shape permits Circle, Square, AbstractRectangle {\n\t\tvoid draw();\n\t\tvoid rotate(double angle);\n\t}\n\n\t/**\n\t * no more extension possible.\n\t */\n\tpublic final class Circle implements Shape {\n\t\t@Override\n\t\tpublic void draw() {\n\t\t\tSystem.out.println(\"drawing circle...\");\n\t\t}\n\n\t\t@Override\n\t\tpublic void rotate(double angle) {\n\t\t\tSystem.out.println(\"rotate circle...\" + angle);\n\t\t}\n\t}\n\n\t// can still be subclassed with Rectangle class.\n\tpublic sealed class AbstractRectangle implements Shape permits Rectangle {\n\t\t@Override\n\t\tpublic void draw() {\n\t\t\tSystem.out.println(\"drawing abstract rectangle...\");\n\t\t}\n\n\t\t@Override\n\t\tpublic void rotate(double angle) {\n\t\t\tSystem.out.println(\"rotate AbstractRectangle...\" + angle);\n\t\t}\n\t}\n\n\t// final\n\tpublic final class Rectangle extends AbstractRectangle {\n\n\t\t@Override\n\t\tpublic void draw() {\n\t\t\tSystem.out.println(\"drawing real rectangle...\");\n\t\t}\n\n\t\t@Override\n\t\tpublic void rotate(double angle) {\n\t\t\tSystem.out.println(\"rotate Rectangle...\" + angle);\n\t\t}\n\t}\n\n\t// non sealed\n\tpublic non - sealed class Square implements Shape {\n\n\t\t@Override\n\t\tpublic void draw() {\n\t\t\tSystem.out.println(\"drawing Square...\");\n\t\t}\n\n\t\t@Override\n\t\tpublic void rotate(double angle) {\n\t\t\tSystem.out.println(\"rotate Square...\" + angle);\n\t\t}\n\t}\n\n\tpublic sealed interface Expr permits ConstantExpr, PlusExpr {}\n\n\tpublic record ConstantExpr(int i) implements Expr {}\n\n\tpublic record PlusExpr(Expr a, Expr b) implements Expr {}\n\n\tpublic void rotate1(Shape shape, double angle) {\n\t\tif (shape instanceof Circle)\n\t\t\tshape.rotate(angle);\n\t\telse if (shape instanceof Rectangle)\n\t\t\tshape.rotate(angle);\n\t\telse if (shape instanceof Square)\n\t\t\tshape.rotate(angle);\n\t}\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 16 Sealed Interface</h6>
            <p>Java 15 JEP 360 introduced sealed classes and interfaces to restrict which class can extend or implement them. This JEP is the second preview with some improvements.</p>
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
export default Java16SealedInterface;