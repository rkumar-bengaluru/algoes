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
            id: 2, value: "Function<Integer,Integer> square = (r) -> {return r*r;}", type: 'function'
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
            id: 8, value: "max = (a,b) -> {if(a == b) return 0;return a > b ? 1 : -1;};", type: 'compare'
        },
        {
            id: 9, value: "Consumer<Integer> consume = (e) -> {System.out.println(e);};", type: 'consumer'
        },
        {
            id: 20, value: "Consumer<Integer> check = (e) -> {if(e == 4) {System.out.println(\"found ->\" + e);}};", type: 'consumer'
        },
        {
            id: 10, value: "min = (a,b) -> {if(a == b) return 0;return a > b ? -1 : 1;};", type: 'compare'
        },
        {
            id: 12, value: "Predicate<T> p3 = gr15.and(lt40)", type: 'predicate'
        },
        {
            id: 13, value: "Predicate<Integer> p4 = (p) -> { return p == 10; };", type: 'predicate'
        },
        {
            id: 14, value: "Predicate<Integer> p5 = GT15.and(LT40).or(p4);", type: 'predicate'
        },
        {
            id: 15, value: "Function<Integer,Integer> plus1 = (r) -> {return r+1;}", type: 'function'
        },
        {
            id: 16, value: "forFlatMap = (r) -> Arrays.asList(r,r*r).stream()", type: 'flatMap'
        },
        {
            id: 17, value: "Collectors.toList()", type: 'collect'
        },
        {
            id: 18, value: "Collectors.joining(\",\")", type: 'collect'
        },
        {
            id: 19, value: "BinaryOperator<Integer> sum = (t, u) -> t + u;", type: 'reduce'
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
            setIexpression(0);
        } else if (e.target.value === 'map') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'function'
            });
            setIlamdas(functions);
            setIexpression(2);
        } else if (e.target.value === 'distinct') {
            setIlamdas([]);
        } else if (e.target.value === 'limit' || e.target.value === 'skip') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'number'
            });
            setIlamdas(functions);
            setIexpression(3);
        } else if (e.target.value === 'compare') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'compare'
            });
            setIlamdas(functions);
        } else if (e.target.value === 'sorted') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'compare'
            });
            setIlamdas(functions);
            setIexpression(8);
        } else if (e.target.value === 'flatMap') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'flatMap'
            });
            setIlamdas(functions);
            setIexpression(16);
        }
    }
    function handleTerminalOperationChange(e) {
        setTerminal(e.target.value);
        if (e.target.value === 'forEach' || e.target.value === 'forEachOrdered') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'consumer'
            });
            setTlamdas(functions);
            setIexpression(9);
        } else if (e.target.value === 'min' || e.target.value === 'max') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'compare'
            });
            setTlamdas(functions);
            setIexpression(8);
        } else if (e.target.value === 'allMatch' || e.target.value === 'anyMatch' || e.target.value === 'noneMatch') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'predicate'
            });
            setTlamdas(functions);
            setTexpression(0);
        } else if (e.target.value === 'count' || e.target.value === 'toArray'
            || e.target.value === 'findFirst' || e.target.value === 'findAny') {
            setTlamdas([]);
        } else if (e.target.value === 'collect') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'collect'
            });
            setTlamdas(functions);
            setTexpression(17);
        } else if (e.target.value === 'reduce') {
            var functions = allLambdas.filter((lambda, index) => {
                return lambda.type === 'reduce'
            });
            setTlamdas(functions);
            setTexpression(19);
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

    function filterPredicate() {
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
            }).filter((p) => {
                return p < 20;
            });
            console.log(intermediateStream);
            setIntermediateStream(intermediateStream);
        }
    }

    function applyMapFunction() {
        // 2,15
        if (parseInt(iexpression) === 2) {
            var intermediateStream = countDemo.map((p) => {
                return p * p;
            });
            setIntermediateStream(intermediateStream);
        } else if (parseInt(iexpression) === 15) {
            var intermediateStream = countDemo.map((p) => {
                return p + 1;
            });
            setIntermediateStream(intermediateStream);
        }
    }
    function applyFlatMapFunction() {
        if (parseInt(iexpression) === 16) {
            var i = countDemo.flatMap((p) => {
                return [p, p * p];
            });
            setIntermediateStream(i);
        }
    }

    function applyInterMediateStep() {
        console.log('intermediate method -' + intermediate + ', expression ' + iexpression);
        if (intermediate === 'filter') {
            filterPredicate();
        } else if (intermediate === 'map') {
            applyMapFunction();
        } else if (intermediate === 'flatMap') {
            applyFlatMapFunction();
        } else if (intermediate === 'distinct') {
            const uniqueAges = countDemo.filter((value, index, self) => self.indexOf(value) === index);
            setIntermediateStream([uniqueAges.length]);
        } else if (intermediate === 'limit') {
            const i = countDemo.slice(0, parseInt(iexpression) - 1);
            setIntermediateStream(i);
        } else if (intermediate === 'skip') {
            const i = countDemo.slice(parseInt(iexpression) - 1, countDemo.length - 1);
            setIntermediateStream(i);
        } else if (intermediate === 'sorted') {
            // 8 max, 10 min
            if (parseInt(iexpression) === 8) {
                const i = countDemo.sort((a, b) => {
                    return (a - b);
                });
                setIexpression(8);
                setIntermediateStream(i);
            } else if (parseInt(iexpression) === 10) {
                const i = countDemo.sort((a, b) => {
                    return (b - a);
                });
                setIexpression(10);
                setIntermediateStream(i);
            }

        }
    }
    function applyTerminalStep() {
        if (terminal === 'forEach' || terminal === 'forEachOrdered') {
            if (parseInt(texpression) === 9) {
                var res = [];
                intermediateStream.map((e) => {
                    res.push(e);
                    setTerminalResponse(res);
                });
            } else if (parseInt(texpression) === 20) {
                var res = [];
                intermediateStream.map((e) => {
                    if (e === 4) {
                        res.push(e);
                        setTerminalResponse(res);
                    }
                });
            }
        } else if (terminal === 'count') {
            setTerminalResponse([intermediateStream.length]);
        } else if (terminal === 'min') {
            var min = Math.min(...intermediateStream)
            setTerminalResponse([min]);
        } else if (terminal === 'max') {
            var min = Math.max(...intermediateStream)
            setTerminalResponse([min]);
        } else if (terminal === 'collect') {
            if (parseInt(texpression) === 17) {
                setTerminalResponse(intermediateStream);
            } else if (parseInt(texpression) === 18) {
                var newMap = intermediateStream.join(',');
                setTerminalResponse([newMap]);
            }
        } else if (terminal === 'reduce') {
            var sum = intermediateStream.reduce((a, b) => a + b);
            setTerminalResponse([sum]);
        } else if (terminal === 'toArray') {
            setTerminalResponse(intermediateStream);
        } else if (terminal === 'anyMatch') {
            if (parseInt(texpression) === 0) {
                var res = intermediateStream.some((p) => {
                    return p > 15;
                });
                console.log('terminal:' + terminal + ',' + res);
                if (res) {
                    setTerminalResponse(["Found"]);
                } else {
                    setTerminalResponse(["Not Found"]);
                }
            } else if (parseInt(texpression) === 1) {
                var res = intermediateStream.some((p) => {
                    return p > 15;
                });
                if (res) {
                    setTerminalResponse(["Found"]);
                } else {
                    setTerminalResponse(["Not Found"]);
                }
            } else if (parseInt(texpression) === 12) {
            } else if (parseInt(texpression) === 13) {
            } else if (parseInt(texpression) === 14) {
            }
        } else if (terminal === 'allMatch') {
            if (parseInt(texpression) === 0) {
                var res = intermediateStream.every((p) => {
                    return p > 15;
                });
                console.log('terminal:' + terminal + ',' + res);
                if (res) {
                    setTerminalResponse(["Found"]);
                } else {
                    setTerminalResponse(["Not Found"]);
                }
            } else if (parseInt(texpression) === 1) {

            } else if (parseInt(texpression) === 12) {
            } else if (parseInt(texpression) === 13) {
            } else if (parseInt(texpression) === 14) {
            }
        } else if (terminal === 'noneMatch') {
            if (parseInt(texpression) === 0) {
                var nonMatch = 'false';
                var res = intermediateStream.some((p) => {
                    return p > 15;
                });
                if (!res) {
                    nonMatch = 'true';
                }
                setTerminalResponse([nonMatch]);
            } else if (parseInt(texpression) === 1) {
                var nonMatch = 'false';
                var res = intermediateStream.some((p) => {
                    return p < 40;
                });
                if (!res) {
                    nonMatch = 'true';
                }
                setTerminalResponse([nonMatch]);
            } else if (parseInt(texpression) === 12) {
                var i = intermediateStream.filter(e => e > 15).filter(e => e < 40);
                setTerminalResponse(i);
            } else if (parseInt(texpression) === 13) {
                var nonMatch = 'false';
                var res = intermediateStream.some((p) => {
                    return p === 10;
                });
                if (!res) {
                    nonMatch = 'true';
                }
                setTerminalResponse([nonMatch]);
            } else if (parseInt(texpression) === 14) {
            }
        } else if (terminal === 'findFirst') {
            setTerminalResponse([intermediateStream[0]]);
        }else if (terminal === 'findAny') {
            setTerminalResponse([intermediateStream[0]]);
        }

    }

    return (
        <div className="container-fluid">
            <h1>Java 8 Stream Demo</h1>
           
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
                                        <option value="flatMap">flatMap()</option>
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