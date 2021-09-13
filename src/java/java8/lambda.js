
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Lambda = (props) => {
    const [basic, setBasic] = useState('');
    const [predicate, setPredicate] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setBasic('/**\n * Basic Lambda Example with @FunctionalInterface\n **/\npublic class LambdaExpression {\n\t// the functional interface, this declaration is optional\n\t@FunctionalInterface\n\tinterface HelloLambda {\n\t\tvoid sayHello(String message);\n\t}\n\tpublic static void main(String[] args) {\n\t\t// anonymous lambda implementation of sayHello().\n\t\tHelloLambda lambda = (m) - > {\n\t\t\tSystem.out.println(\"Hello @ \" + m);\n\t\t};\n\t\t// invocation of lamda expression.\n\t\tlambda.sayHello(\"Lambda\");\n\t}\n}\n');
        setPredicate('import java.util.List;\nimport java.util.ArrayList;\nimport java.util.stream.Stream;\n/**\n * Filter data via anonyous lambda function\n **/\npublic class LambdaFilter {\n\t// test class to filter\n\tstatic class Person {\n\t\tpublic String gender;\n\t\tpublic int age;\n\t\tpublic Person(String g, int a) {\n\t\t\tthis.gender = g;\n\t\t\tthis.age = a;\n\t\t}\n\t\tpublic void print() {\n\t\t\tSystem.out.println(\"Gender->\" + gender + \", age->\" + age);\n\t\t}\n\t}\n\t// query interface, advantage is code can provide\n\t// differnt variants of filter type in lambda expression\n\t// with implementation of each function separately.\n\tinterface Predicate < Person > {\n\t\tboolean filter(Person t);\n\t}\n\t// utility function to filter\n\tpublic static void filter(\n\t\tList < Person > all, Predicate < Person > criteria) {\n\t\tall.forEach(p - > {\n\t\t\tif (criteria.filter(p)) {\n\t\t\t\tp.print();\n\t\t\t}\n\t\t});\n\t}\n\t// driver code\n\tpublic static void main(String[] args) {\n\t\tList < Person > all = new ArrayList < Person > ();\n\t\tall.add(new Person(\"M\", 45));\n\t\tall.add(new Person(\"F\", 43));\n\t\tall.add(new Person(\"M\", 49));\n\t\t// lambda passed as a filter\n\t\t// with age > 43\n\t\tfilter(all, (p) - > {\n\t\t\treturn p.age > 43;\n\t\t});\n\t\t// filter with age < 45\n\t\tfilter(all, (p) - > {\n\t\t\treturn p.age < 45;\n\t\t});\n\t}\n}\n');
    }, [basic, cm]);

    function renderBasicLambda() {
        return (
            <div>
                <h3>Lambda Basic Functional Interface</h3>
                <div className="row">
                    <div className="col">
                        <CodeMirror
                            value={basic}
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
    function renderPredicateLambda() {
        return (

            <div>
                <h3>Lambda Filter Expression</h3>
                <div className="row">
                    <div className="col">
                        <CodeMirror
                            value={predicate}
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
    return (
        <div className="container">
            <h2>Lambda Expressions</h2>
            <p>One issue with anonymous classes is that if the implementation of your anonymous class is very simple, such as an interface that contains only one method, then the syntax of anonymous classes may seem unwieldy and unclear. In these cases, you're usually trying to pass functionality as an argument to another method, such as what action should be taken when someone clicks a button. Lambda expressions enable you to do this, to treat functionality as method argument, or code as data.</p>
            <div className="row">
                <div className="col-sm-6">
                    {renderBasicLambda()}
                </div>
                <div className="col-sm-6">
                    {renderPredicateLambda()}
                </div>
            </div>
            <div className="row m-5">
                <div className="col-sm-12">
                    <h4>Use Aggregate Operations That Accept Lambda Expressions as Parameters</h4>
                    <code>List&#60;Person&#62; roster;<br/>&nbsp;roster
    .stream()
    .filter(
        p -&#62; p.getGender() == Person.Sex.MALE  &#38;&#38; p.getAge() &#62;= 18
        &#38;&#38; p.getAge() &#62;= 25)
    .map(p -&#62; p.getEmailAddress())
    .forEach(email -&#62; System.out.println(email));  </code>
                <p>the above Aggregate operation will filter persons 
                    who are male and age between 18 and 25, then map their email id's and print.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <h4>No Parameter Syntax</h4>
                    <code>() -&#62; &#123; // body &#125;  </code>
                </div>
                <div className="col-sm-4">
                    <h4>One Parameter Syntax</h4>
                    <code>(p) -&#62; &#123; // body &#125;  </code>
                </div>
                <div className="col-sm-4">
                    <h4>Two Parameter Syntax</h4>
                    <code>(p1,p2) -&#62; &#123; // body &#125;  </code>
                </div>
            </div>
        </div>
    )
}
export default Lambda;