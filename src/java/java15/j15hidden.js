import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java15HiddenClass = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java15;\n\npublic class Hidden {\n\tpublic static String lookup() {\n\t\tSystem.out.println(\"Hello from inside of Hidden class...\");\n\t\treturn \"Hello World from Java 15 Hidden Class...my name is -->\" + Hidden.class.getName();\n\t}\n}\n\npackage org.java.full.stack.java15;\n\nimport java.lang.invoke.MethodHandle;\nimport java.lang.invoke.MethodHandles;\nimport java.lang.invoke.MethodType;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.Base64;\n\npublic class HiddenClassDemo {\n\t/**\n\t * Reads the hidden class byte codes as base64 encoded string.\n\t * \n\t * @return\n\t * @throws Exception\n\t */\n\tpublic static String readByteCodesOfClass() throws Exception {\n\t\tbyte[] array = Files.readAllBytes(Paths.get(\"./bin/main/org/java/full/stack/java15/Hidden.class\"));\n\t\tString s = Base64.getEncoder().encodeToString(array);\n\t\treturn s;\n\t}\n\n\t/**\n\t * Making the method call in hidden class.\n\t * \n\t * @param encoded\n\t * @throws Throwable\n\t */\n\tpublic static void callHiddenClass(String encoded) throws Throwable {\n\t\tbyte[] classInBytes = Base64.getDecoder().decode(encoded);\n\t\tClass << ? > proxy = MethodHandles.lookup()\n\t\t\t.defineHiddenClass(\n\t\t\t\tclassInBytes,\n\t\t\t\ttrue,\n\t\t\t\tMethodHandles.Lookup.ClassOption.NESTMATE).lookupClass();\n\t\tMethodHandle mh = MethodHandles.lookup().findStatic(\n\t\t\tproxy,\n\t\t\t\"lookup\",\n\t\t\tMethodType.methodType(String.class));\n\t\tString status = (String) mh.invokeExact();\n\t\tSystem.out.println(status);\n\t}\n\t// driver code.\n\tpublic static void main(String[] args) {\n\t\ttry {\n\t\t\tString encoded = readByteCodesOfClass();\n\t\t\tcallHiddenClass(encoded);\n\t\t} catch (Throwable e) {\n\t\t\te.printStackTrace();\n\t\t}\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 15 Hidden Class</h6>
            <p>This JEP introduces hidden classes that are not discoverable and have a limited lifecycle (shorter live), good for developers that generate classes dynamically at runtime. And now we can use this new Lookup::defineHiddenClass API to create a hidden class or interface from bytes.</p>
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
export default Java15HiddenClass;