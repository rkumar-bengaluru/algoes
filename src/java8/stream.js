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
    const [totalCount, setTotalCount] = useState(5);
    //
    const [intermediate, setIntermediate] = useState('filter');
    const [terminal, setTerminal] = useState('forEach');
    const [ilambdas, setIlamdas] = useState([]);
    const [tlambdas, setTlamdas] = useState([]);
    const [iexpression, setIexpression] = useState(0);
    const [texpression, setTexpression] = useState(9);
    const [intermediateStream, setIntermediateStream] = useState([]);
    const [terminalResponse, setTerminalResponse] = useState([]);

    const allLambdas = [
        {
            id: 0, value: "Predicate<Integer> GT15 = (p) -> {return p > 15;};", type: 'predicate'
        },
        {
            id: 1, value: "Predicate<Integer> LT40 = (p) -> {return p < 40;};", type: 'predicate'
        },
        {
            id: 2, value: "Function<T,R> f = (t) = { Arrays.asList(t,t*t);}", type: 'function'
        },
        {
            id: 3, value: "1", type: 'number'
        },
        {
            id: 4, value: "2", type: 'number'
        },
        {
            id: 5, value: "3", type: 'number'
        },
        {
            id: 6, value: "4", type: 'number'
        },
        {
            id: 7, value: "", type: 'sorted'
        },
        {
            id: 8, value: "Comparator<T> c = ", type: 'compare'
        },
        {
            id: 9, value: "Consumer<T> c = (t) => {System.out.println(t)}", type: 'consumer'
        },
        {
            id: 8, value: "Consumer<T> c = ", type: 'consumer'
        },
        {
            id: 10, value: "Comparator<T> c = ", type: 'compare'
        },
        {
            id: 11, value: "Comparator<T> c = ", type: 'compare'
        },
        {
            id: 12, value: "Predicate<T> p3 = gr15.and(lt40)", type: 'predicate'
        },
        {
            id: 13, value: "Predicate<Integer> p4 = (p) -> { return p == 10; };", type: 'predicate'
        },
        {
            id: 14, value: "Predicate<Integer> p5 = GT15.and(LT40).or(p4);", type: 'predicate'
        }
    ]

    useEffect(() => {
        //cm.current.editor.display.wrapper.style.height = "200px";
        //cm.current.editor.display.wrapper.style.width = "200px";
        setCountCode('import java.util.stream.Stream;\n\npublic class StreamCountExample {\n\n\tpublic static void main(String[] args) {\n\t\t// create a new stream\n\t\tStream < Integer > s = Stream.of(5, 2, 6, 1, 0);\n\t\t// count no of elements in stream;\n\t\tlong noOfElements = s.count();\n\t\tSystem.out.println(noOfElements);\n\t}\n}\n');
        setCountDemo([5, 2, 6, 1, 0]);
        setTotalCount(5);
        setIntermediate('filter');
        setTerminal('forEach');
        var functions = allLambdas.filter((lambda, index) => {
            return lambda.type === 'predicate'
        });
        setIlamdas(functions);
        var functions = allLambdas.filter((lambda, index) => {
            return lambda.type === 'consumer'
        });
        setTlamdas(functions);
        setIexpression(0);
        setTexpression(9);
        setIntermediateStream([]);
        setTerminalResponse([]);
        createRandomStream(10, 25);
    }, [countCode]);



    function countClick() {
        setShowCount(!showCount);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function createRandomStream(min, max) {
        var howMany = getRandomInt(min, max);
        var nos = [];
        for (var i = 0; i <= howMany; i++) {
            nos.push(getRandomInt(0, 100));
        }
        setCountDemo(nos);
        setTotalCount(nos.length);
        setIntermediateStream([]);
        setTerminalResponse([]);
    }

    function msort(A, l, r) {
        if (l < r) {
            var m = l + Math.floor((r - l) / 2);
            msort(A, l, m);
            msort(A, m + 1, r);
            merge(A, l, m, r);
        }
    }

    function merge(A, l, m, r) {
        var i = l;
        var j = m + 1;
        while ((i <= m) && (j <= r)) {
            if (A[i] > A[j]) {
                swap(A, i, j);
                // make sure the right array is still sorted.
                i++; j++;
                for (var k = j; k <= r; k++) {
                    if (A[k - 1] > A[k]) {
                        swap(A, k - 1, k);
                    }
                }
                j = m + 1;
            } else {
                i++;
            }
        }
    }

    function swap(A, i, j) {
        var t = A[i];
        A[i] = A[j];
        A[j] = t;
    }

    function sort() {
        var data = [...countDemo];
        msort(data, 0, data.length - 1);
        setCountDemo(data);
    }
    // select intermediate operation event.
    function handleIntermediateFunctionChange(e) {
        setIntermediate(e.target.value);
        if (e.target.value === 'filter') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'predicate'
            });
            setIlamdas(functions);
        } else if (e.target.value === 'map' || e.target.value === 'flatMap') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'function'
            });
            setIlamdas(functions);
        } else if (e.target.value === 'distinct') {
            setIlamdas([]);
        } else if (e.target.value === 'limit' || e.target.value === 'skip') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'number'
            });
            setIlamdas(functions);
        } else if (e.target.value === 'compare') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'compare'
            });
            setIlamdas(functions);
        }
    }
    function handleTerminalOperationChange(e) {
        setTerminal(e.target.value);
        if (e.target.value === 'forEach' || e.target.value === 'forEachOrdered') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'consumer'
            });
            setTlamdas(functions);
        } else if (e.target.value === 'min' || e.target.value === 'max') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'compare'
            });
            setTlamdas(functions);
        }
    }
    function expressionIChange(e) {
        setIexpression(e.target.value);
        console.log('expression changed ' + e.target.value);
    }
    function expressionTChange(e) {
        setTexpression(e.target.value);
        console.log('expression changed ' + e.target.value);
    }

    function applyInterMediateStep() {
        if (parseInt(iexpression) === 0) {
            var intermediateStream = countDemo.filter((p) => {
                return p > 15;
            });
            setIntermediateStream(intermediateStream);
        } else if (parseInt(iexpression) === 1) {
            var intermediateStream = countDemo.filter((p) => {
                return p < 49;
            });
            setIntermediateStream(intermediateStream);
        } else if (parseInt(iexpression) === 12) {
            var intermediateStream = countDemo.filter((p) => {
                return p > 15;
            }).filter((p) => {
                return p < 40;
            });
            setIntermediateStream(intermediateStream);
        } else if (parseInt(iexpression) === 13) {
            var intermediateStream = countDemo.filter((p) => {
                return p === 10;
            });
            console.log(intermediateStream);
            setIntermediateStream(intermediateStream);
        } else if (parseInt(iexpression) === 14) {
            var intermediateStream = countDemo.filter((p) => {
                return p === 15;
            }).filter((p) => {
                return p > 15;
            }).filter( (p) => {
                return p < 20;
            } );
            console.log(intermediateStream);
            setIntermediateStream(intermediateStream);
        }
    }
    function applyTerminalStep() {
        console.log(texpression);
        var res = [];
        if (parseInt(texpression) === 9) {
            intermediateStream.map((e) => {
                console.log(e);
                res.push(e);
                setTerminalResponse(res);
            });
        }
    }

    return (
        <div className="container-fluid">
            <h1>Java 8 Stream</h1>
            <h2 className="m-3">Java Stream Demo</h2>
            <div className="row border">
                {/* <div className="col-sm-4">
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
                </div> */}
                <div className="col-sm-12">
                    {/* <div className="row m-2">
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
                            <button onClick={() => createRandomStream(2, 10)}>Create Stream</button>
                        </div>
                        <div className="col-sm-4">
                            <button onClick={() => countClick()}>Show Count</button>
                        </div>
                        <div className="col-sm-4">
                            <button onClick={() => sort()}>Sort Demo</button>
                        </div>
                    </div>
                    <div className="row m-2">
                        {showCount &&
                            <div className="col-sm-12" style={{ color: "red" }}>Stream Count = {totalCount}</div>
                        }
                    </div> */}
                    <div className="border">
                        <div className="row m-2">
                            <button onClick={() => createRandomStream(10, 50)}>Create Random Stream</button>
                        </div>
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
                            <div className="col-sm-2 border p-2">
                                <span className="h6">Select Intermediate</span>
                                <div>
                                    <select value={intermediate}
                                        onChange={handleIntermediateFunctionChange.bind(this)} className="form-control form-control-sm">
                                        <option value="map">map()</option>
                                        <option value="map">flatMap()</option>
                                        <option value="filter">filter()</option>
                                        <option value="distinct">distinct()</option>
                                        <option value="sorted">sorted()</option>
                                        <option value="limit">limit()</option>
                                        <option value="skip">skip()</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4 border p-2">
                                <span className="h6">Select Function </span>
                                <div>
                                    <select value={iexpression} onChange={expressionIChange.bind(this)}
                                        className="form-control-sm">
                                        {ilambdas.map((p, i) => {
                                            return (
                                                <option key={i} value={p.id}>{p.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="cold-sm-2 border p-2">
                                <span className="h6">Select Terminal Operation</span>
                                <div>
                                    <select value={terminal} onChange={handleTerminalOperationChange.bind(this)}
                                        className="form-control-sm">
                                        <option value="forEach">forEach()</option>
                                        <option value="forEachOrdered">forEachOrdered()</option>
                                        <option value="count">count()</option>
                                        <option value="min">min()</option>
                                        <option value="max">max()</option>
                                        <option value="collect">collect()</option>
                                        <option value="reduce">reduce()</option>
                                        <option value="toArray">toArray()</option>
                                        <option value="anyMatch">anyMatch()</option>
                                        <option value="allMatch">allMatch()</option>
                                        <option value="noneMatch">noneMatch()</option>
                                        <option value="findFirst">findFirst()</option>
                                        <option value="findAny">findAny()</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-3 border p-2">
                                <span className="h6">Select Lamda </span>
                                <div>
                                    <select value={texpression} onChange={expressionTChange.bind(this)}
                                        className="form-control-sm">
                                        {tlambdas.map((p, i) => {
                                            return (
                                                <option key={i} value={p.id}>{p.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 border">
                            <div className="col-sm-6 border p-2">
                                <span className="h6">Intermediate Operation Result</span>
                                <div className="row m-2">
                                    <button onClick={() => applyInterMediateStep()}>Apply InterMediate Step</button>
                                </div>
                                <div className="row">
                                    {intermediateStream.map((d, index) => {
                                        return (
                                            <span key={index} className="col border">{d}</span>
                                        )
                                    })}
                                    {intermediateStream.length <= 0 &&
                                        <div>no data in stream</div>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6 border p-2">
                                <span className="h6">Terminal Operation Result</span>
                                <div className="row m-2">
                                    <button onClick={() => applyTerminalStep()}>Apply Terminal Step</button>
                                </div>
                                <div className="row m-2">
                                    <div className="col-sm-12">
                                        {terminalResponse.map((d, index) => {
                                            return (
                                                <div key={index} className="row">{d}</div>
                                            )
                                        })}
                                        {terminalResponse.length <= 0 &&
                                            <div>no data in terminal</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Java8Stream;