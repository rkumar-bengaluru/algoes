import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J8MethodRef = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.java8;\n\nimport java.util.function.BiFunction;\n\n/**\n * Java provides a new feature called method reference in Java 8. Method \n * reference is used to refer method of functional interface. It is \n * compact and easy form of lambda expression. Each time when you are \n * using lambda expression to just referring a method, you can replace \n * your lambda expression with method reference.\n * \n * @author Rupak Kumar...\n *\n */\npublic class J8MethodReference {\n\t// merge with passed lambda\n\tpublic static < T > T appendWithLambda(T a, T b, BiFunction < T, T, T > merger) {\n\t\treturn merger.apply(a, b);\n\t}\n\t// merge static\n\tpublic static String appendWithStaticMethod(String a, String b) {\n\t\treturn a + b;\n\t}\n\t// merge instance methods\n\tpublic String appendWithInstanceMethod(String a, String b) {\n\t\treturn a + b;\n\t}\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tJ8MethodReference ref = new J8MethodReference();\n\t\t// Calling the methodappendWithLambda with a lambda expression\n\t\tSystem.out.println(J8MethodReference.appendWithLambda(\n\t\t\t\"Rupak \",\n\t\t\t\"Kumar\",\n\t\t\t(a, b) - > (a + b)\n\t\t));\n\t\t// Reference to a static method\n\t\tSystem.out.println(J8MethodReference.appendWithLambda(\n\t\t\t\"Rupak \",\n\t\t\t\"Kumar\",\n\t\t\tJ8MethodReference::appendWithStaticMethod\n\t\t));\n\t\t// Reference to an instance method of a particular object \n\t\tSystem.out.println(J8MethodReference.appendWithLambda(\n\t\t\t\"Rupak \",\n\t\t\t\"Kumar\",\n\t\t\tref::appendWithInstanceMethod\n\t\t));\n\t\t// Reference to an instance method of an arbitrary object of a\n\t\t// particular type\n\t\tSystem.out.println(J8MethodReference.appendWithLambda(\n\t\t\t\"Rupak \",\n\t\t\t\"Kumar\",\n\t\t\tString::concat\n\t\t));\n\t}\n\n}\n');
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Method references</h6>
            <p>Lambda expression helps us to write our code in functional style. It provides a clear and concise way to implement SAM interface(Single Abstract Method) by using an expression. It is very useful in collection library in which it helps to iterate, filter and extract data.</p>
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
export default J8MethodRef;