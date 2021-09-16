
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J16ValueBased = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java16;\n\n/**\n * This JEP provides a new warning if we synchronize instances of value-based classes.\n * The annotation @jdk.internal.ValueBased tells if a class is a value-based class\n * \n * @author Rupak Kumar...\n */\npublic class J16JEP390 {\n\n\tpublic static void main(String[] args) {\n\t\tDouble d = 20.0;\n\t\t// A program may produce unpredictable results if it attempts to \n\t\t// distinguish two references to equal values of a value-based class, \n\t\t// whether directly via reference equality or indirectly via an appeal \n\t\t// to synchronization, identity hashing, serialization, or any other \n\t\t// identity-sensitive mechanism. Use of such identity-sensitive operations\n\t\t// on instances of value-based classes may have unpredictable effects and \n\t\t// should be avoided.\n\t\tsynchronized(d) {\n\t\t\t// do something with d\n\t\t}\n\n\t}\n\n}©\n2021 GitHub, Inc.\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Warnings for Value-Based Classes</h6>
            <p>This JEP provides a new warning if we synchronize instances of value-based classes; Also deprecating the primitive wrapper class (value-based) constructors for removal.</p>
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
export default J16ValueBased;