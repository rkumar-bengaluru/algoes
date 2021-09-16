import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
const Java16LinkerApi = (props) => {
    const [cm, setCm] = useState(React.createRef());
    const [example, setExample] = useState('');
    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setExample('import jdk.incubator.foreign.CLinker;\nimport jdk.incubator.foreign.FunctionDescriptor;\nimport jdk.incubator.foreign.LibraryLookup;\n\nimport java.lang.invoke.MethodHandle;\nimport java.lang.invoke.MethodType;\nimport java.nio.file.Path;\nimport java.util.Optional;\n\npublic class JEP389 {\n\n\tpublic static void main(String[] args) throws Throwable {\n\t\t// load the c library with method sayHello\n\t\tPath path = Path.of(\"native.so\");\n\t\t// load the native library\n\t\tLibraryLookup libraryLookup = LibraryLookup.ofPath(path);\n\t\t// lookup method symbol\n\t\tOptional < LibraryLookup.Symbol > optionalSymbol = \n\t\t\tlibraryLookup.lookup(\"sayHello\");\n\t\t// if method found in library\n\t\tif (optionalSymbol.isPresent()) {\n\t\t\t// retrieve the symbol\n\t\t\tLibraryLookup.Symbol symbol = optionalSymbol.get();\n\t\t\t// function descriptor\n\t\t\tFunctionDescriptor functionDescriptor = \n\t\t\t\tFunctionDescriptor.ofVoid();\n\t\t\t// method type\n\t\t\tMethodType methodType = \n\t\t\t\tMethodType.methodType(Void.TYPE);\n\t\t\t// call the linker api wth address, method type\n\t\t\t// and method descriptor\n\t\t\tMethodHandle methodHandle = CLinker.getInstance().downcallHandle(\n\t\t\t\tsymbol.address(),\n\t\t\t\tmethodType,\n\t\t\t\tfunctionDescriptor);\n\t\t\t// invoke the native method.\n\t\t\tmethodHandle.invokeExact();\n\t\t}\n\t}\n}\n');
    }, [example, cm]);
    
    return (
        <div className="container-fluid">
            <h6>Foreign Linker API (Incubator)</h6>
            <p>This JEP enables Java code to call or can be called by native code written in other languages like C or C++, replace Java Native Interface (JNI)</p>
            <div className="row p-2">
                <div className="col-sm-12">
                    <CodeMirror
                        value={example}
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
            </div>
        </div>
    )
}
export default Java16LinkerApi;