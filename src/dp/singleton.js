import React, { useState,useEffect  } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './index.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');


const Singleton = (props) => {

    const [code, setCode] = useState('public class DBConnection {\n\t// Eager initialization\n\tprivate static final DBConnection instance\n\t\t = new DBConnection();\n\t// private constructor\n\tprivate DBConnection(){}\n\t// public method to access instance\n\tpublic static DBConnection getConnection() {\n\t\treturn instance;\n\t}\n}');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
    },[code,cm]);

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
                    <h3 className="m-3">Solution - Eager initialization</h3>
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
                    <div className="col">
                        <h3 className="m-3"> Solution - Eager initialization</h3>
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