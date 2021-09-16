import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java14RecordClass = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java14;\n\n/**\n * A new class called record (aka data class), it is a final class, not\n * abstract, and all of its fields are final as well. The record will\n * automatically generate the tedious constructors, public get, equals(),\n * hashCode(), toString() during compile time.\n * \n * @author Rupak Kumar...\n *\n */\npublic class RecordJEP359 {\n\trecord Point(int x, int y) {}\n\n\trecord Rectangle(Point l, Point r) {}\n\n\t/**\n\t * Check if 2 rectangle overlaps.\n\t * \n\t * @param r1\n\t * @param r2\n\t */\n\tpublic static boolean checkOverlap(Rectangle r1, Rectangle r2) {\n\n\t\tif (r1.l.x >= r2.r.x || r2.l.x >= r1.r.x) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (r1.r.y >= r2.l.y || r2.r.y >= r1.l.y) {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t}\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tRectangle r1 = new Rectangle(new Point(0, 10), new Point(10, 0));\n\t\tRectangle r2 = new Rectangle(new Point(5, 12), new Point(15, 0));\n\t\tSystem.out.println(checkOverlap(r1, r2));\n\t\tRectangle r3 = new Rectangle(new Point(-1, 0), new Point(1, 1));\n\t\tRectangle r4 = new Rectangle(new Point(0, -1), new Point(0, 1));\n\t\tSystem.out.println(checkOverlap(r3, r4));\n\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 14 Record Class</h6>
            <p>A new class called record (aka data class), it is a final class, not abstract, and all of its fields are final as well. The record will automatically generate the tedious constructors, public get, equals(), hashCode(), toString() during compile time.</p>
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
export default Java14RecordClass;