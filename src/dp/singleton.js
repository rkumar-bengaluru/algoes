import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './index.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');


const Singleton = (props) => {

    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('/**\n * Singleton class DBConnection\n */\npublic class DBConnection implements Serializable {\n\t// private constructor.\n\tprivate DBConnection() {\n\t\t// stop from reflection being used to intialize\n\t\t// another instance.\n\t\tif (instance != null) {\n\t\t\tthrow new RuntimeException(\"already initialized...\");\n\t\t}\n\t}\n\t// private singleton instance, lazy loading.\n\tprivate static volatile DBConnection instance = null;\n\t// public method to get instance.\n\tpublic static DBConnection getInstance() {\n\t\tif (instance == null) {\n\t\t\tsynchronized(DBConnection.class) {\n\t\t\t\t// double check if any other thread has \n\t\t\t\t// initialized instance.\n\t\t\t\tif (instance == null) {\n\t\t\t\t\tinstance = new DBConnection();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn instance;\n\t}\n\t// make sure serialization does not break singleton rule.\n\tObject readResolve() throws ObjectStreamException {\n\t\treturn getInstance();\n\t}\n\t// test method\n\tpublic void sayHello() {\n\t\tSystem.out.println(\"hello from singleton...\");\n\t}\n\tpublic static void main(String[] args) {\n\t\tDBConnection instance = DBConnection.getInstance();\n\t\tinstance.sayHello();\n\t}\n}\n');
    }, [code, cm]);

    function renderIntent() {
        return (
            <div>
                <h1>Singleton Design Pattern</h1>
                <div>Singleton is a <mark>creational design pattern</mark> that that restricts the instantiation of a class to one "single" instance.
                    This is useful when exactly one object is needed to coordinate actions across the system.</div>
                <div className="row">
                    <div className="col">
                        <img src='/algoes/img/dp/singleton.jpg'></img>
                    </div>
                    <div className="col">
                        Best way to understand this from a programming example. Consider an Organization, its Employee and Payroll
                        application. The datastore has three tables OrganizationTable, EmployeeTable, PayrollTable, each of these
                        tables are being accessed through OrganizationObject, EmployeeObject and PayrollObject. Each Object can call
                        DBConnection.getConnection() to get the reference of the Connection instance. Each object is using the same
                        connection object reference to access it's table entries.

                        In this use case DBConnection is a singleton object reference being shared across all Object references in the
                        application.
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3 className="m-3">Solution - Lazy initialization</h3>
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
                </div>
                <h3 className="mp-3">Other Methods</h3>
                <div className="row m-3">

                    <div className="col">
                        <ul>
                            <li>
                                <div>Eager initialization</div>
                                <code>private static DBConnection = new DBConnection();</code>
                            </li>

                            <li>
                                <div>Using Enums</div>
                                <code>public enum DBConnection &#123;INSTANCE&#125;</code>
                            </li>

                        </ul>
                    </div>
                </div>
                <h3 className="mp-3">Issues</h3>
                <p>The singleton holds good in a single classloader, if there are application classloader,
                    then each application classloader will have its own singleton instance.
                </p>
            </div>
        )
    }

    return (
        <div className="container">
            {renderIntent()}
        </div>
    )

}
export default Singleton;