import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './editor.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Java8Stream = (props) => {
    const [countCode, setCountCode] = useState('');
    const [cm, setCm] = useState(React.createRef());
    const [countDemo, setCountDemo] = useState([5, 2, 6, 1, 0]);
    const [showCount, setShowCount] = useState(false);
    const [totalCount, setTotalCount] = useState(false);

    useEffect(() => {
        cm.current.editor.display.wrapper.style.height = "200px";
        setCountCode('import java.util.stream.Stream;\n\npublic class StreamCountExample {\n\n\tpublic static void main(String[] args) {\n\t\t// create a new stream\n\t\tStream < Integer > s = Stream.of(5, 2, 6, 1, 0);\n\t\t// count no of elements in stream;\n\t\tlong noOfElements = s.count();\n\t\tSystem.out.println(noOfElements);\n\t}\n}\n');
        setCountDemo([5, 2, 6, 1, 0]);
        setTotalCount(5);
    }, [countCode]);

    function countClick() {
        setShowCount(!showCount);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function createRandomStream() {
        var howMany = getRandomInt(2,10);
        var nos = [];
        for(var i = 0; i <= howMany;i++) {
            nos.push(getRandomInt(0,100));
        }
        setCountDemo(nos);
        setTotalCount(nos.length);
    }

    return (
        <div className="container-fluid">
            <h1>Java 8 Stream</h1>
            <h2 className="m-3">Java Stream count()</h2>
            <div className="row border">
                <div className="col-sm-6">
                    <CodeMirror
                        value={countCode}
                        ref={cm}
                        className="cm-small"
                        options={{
                            lineNumbers: true,
                            matchBrackets: true,
                            continueComments: "Enter",
                            extraKeys: { "Ctrl-Q": "toggleComment" },
                            mode: "javascript"
                        }}
                    />
                </div>
                <div className="col-sm-6">
                    <div className="row m-2">
                        {countDemo.map((element, index) => {
                            return (
                                <div key={index} className="col border">
                                    {element}
                                </div>
                            )
                        })}
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-4">
                            <button onClick={() => createRandomStream()}>Create Stream</button>
                        </div>
                        <div className="col-sm-4">
                            <button onClick={() => countClick()}>Show Count</button>
                        </div>
                        {showCount &&
                            <div className="col-sm-4" style={{ color: "red" }}>{totalCount}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Java8Stream;