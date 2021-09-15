import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java16RecordClass = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('/**\n * \n */\npackage org.java.full.stack.java15;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n/**\n * Java 14 JEP 359 introduced the records as a preview feature. This JEP\n * enhanced the records with features like support sealed types, local records,\n * annotation on records, and Reflection APIs for records.\n * \n * @author Rupak Kumar...\n */\npublic class RecordJEP384 {\n\n\t@Retention(RetentionPolicy.RUNTIME)\n\t@Target(ElementType.FIELD)\n\tpublic @interface Custom {\n\t\tpublic String value() default \"\";\n\t}\n\n\tpublic sealed interface CoOrdinates permits Point, Rectangle {\n\t\tboolean doOverLap(Rectangle other);\n\t}\n\n\trecord Point(int x, int y) implements CoOrdinates {\n\t\tpublic boolean doOverLap(Rectangle other) {\n\t\t\tthrow new RuntimeException();\n\t\t}\n\t}\n\n\trecord Rectangle(@Custom Point l, @Custom Point r) implements CoOrdinates {\n\t\tpublic boolean doOverLap(Rectangle other) {\n\n\t\t\tif (this.l.x >= other.r.x || this.r.x <= other.l.x) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tif (this.r.y >= other.l.y || this.l.y <= other.r.y) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t}\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tRectangle r1 = new Rectangle(new Point(0, 10), new Point(10, 0));\n\t\tRectangle r2 = new Rectangle(new Point(5, 12), new Point(15, 0));\n\t\tSystem.out.println(r1.doOverLap(r2));\n\t\tRectangle r3 = new Rectangle(new Point(-1, 0), new Point(1, 1));\n\t\tRectangle r4 = new Rectangle(new Point(0, -1), new Point(0, 1));\n\t\tSystem.out.println(r3.doOverLap(r4));\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 16 Record Class</h6>
            <p>The record is finalized and becomes a standard feature.</p>
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
export default Java16RecordClass;