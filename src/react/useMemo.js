import { useRef, useMemo, useState } from 'react';
import '../react/component/algoescode'
const ReactUseMemo = () => {
    const code = "import {useRef,useMemo,useState} from 'react';\nimport '../react/component/algoescode'\nconst ReactUseMemo = () => {\n\tconst code = \"\";\n\tconst inputEl = useRef(null);\n\tconst [value, setValue] = useState(5);\n\tconst [counter, setCounter] = useState('0');\n\n\tconst memoizedResult = useMemo(() => fact(value), [value]);\n\n\tfunction handleClick() {\n\t\tconsole.log('input ' + inputEl.current.value);\n\t\tsetValue(Number(inputEl.current.value));\n\t}\n\n\tfunction fact(n) {\n\t\tsetCounter((prev) => ++prev);\n\t\treturn factorial(n);\n\t}\n\n\tfunction inputChanged(e) {\n\t\tsetCounter(0);\n\t\tsetValue(Number(e.target.value));\n\t}\n\n\tfunction factorial(n) {\n\t\treturn (n <= 0 ? 1 : n * factorial(n - 1));\n\t}\n\treturn ( \n\t\t<div className = \"container\" >\n\t\t\t<h6 > useMemo < /h6> \n\t\t\t<code >\n\t\t\t\tconst memoizedValue = useMemo(() = & gt; computeExpensiveValue(a, b), [a, b]); \n \t\t\t< /code> \n \t\t\t<p >\n\t\t\tuseMemo() is a built - in React hook that accepts 2 arguments— a\n\t\t\tfunction compute that computes a result and the depedencies array:\n\t\t\t</p> \n\t\t\t<code >\n\t\t\tconst memoizedResult = useMemo(compute, dependencies); < /code> \n\t\t\t<div className = \"row\" >\n\t\t\t\t<div className = \"col-sm-6\" >\n \t<div className = \"row\" >\n\t\t\t\t\t\t<h6 > Code < /h6> \n\t\t\t\t\t</div> \n\t\t\t\t\t<div className = \"row\" >\n\t\t\t\t\t\t<div style = {{\t\"heigth\": \"500px\"}} className = \"border\" >\n\t\t\t\t\t\t<algoes - code src = {\tcode} > < /algoes-code> \n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div> \n\t\t\t\t</div> \n\t\t\t\t<div className = \"col-sm-6\" >\n\t\t\t\t\t<div className = \"row\" >\n\t\t\t\t\t\t<h6 > Find Factorial Demo < /h6> \n\t\t\t\t\t</div> \n\t\t\t\t\t<div className = \"row\" >\n\t\t\t\t\t<div className = \"col\" > < input ref = {\n\t\t\t\t\t\tinputEl\n\t\t\t\t\t\t} onChange = {(e) => inputChanged(e)}\n\t\t\t\t\t\tplaceholder = {\tvalue}/>\n\t\t\t\t\t</div >\n\t\t\t\t\t<div className = \"col\" > < button onClick = {\n\t\t\t\t\t\t() => handleClick()\n\t\t\t\t\t\t} > Calculate < /button>\n\t\t\t\t\t</div >\n\t\t\t\t\t<div className = \"col\" > Result {\n\t\t\t\t\t\tmemoizedResult\n\t\t\t\t\t} < /div> \n\t\t\t\t</div> \n\t\t\t\t<div className = \"row\" >\n\t\t\t\t\t<div className = \"col\" >\n\t\t\t\t\t\tfor input {\tvalue} no of times\n\t\t\t\t\t\tfunction called {counter} < /div> \n\t\t\t\t</div> \n\t\t\t</div> \n\t\t</div> \n\t\t</div>\n\t)\n}\nexport default ReactUseMemo;\n";
    const inputEl = useRef(null);
    const [value, setValue] = useState(5);
    const [counter, setCounter] = useState('0');

    const memoizedResult = useMemo(() => fact(value), [value]);

    function handleClick() {
        console.log('input ' + inputEl.current.value);
        setValue(Number(inputEl.current.value));
    }
    function fact(n) {
        setCounter((prev) => ++prev);
        return factorial(n);
    }
    function inputChanged(e) {
        setCounter(0);
        setValue(Number(e.target.value));
    }
    function factorial(n) {
        return (n <= 0 ? 1 : n * factorial(n - 1));
    }
    return (
        <div className="container">
            <h6>useMemo</h6>
            <code>const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);</code>
            <p>
                useMemo() is a built-in React hook that accepts 2 arguments — a function
                compute that computes a result and the depedencies array:
            </p>
            <code>const memoizedResult = useMemo(compute, dependencies);</code>
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <h6>Code</h6>
                    </div>
                    <div className="row">
                        <div style={{ "height": "500px" }} className="border">
                            <algoes-code src={code}></algoes-code>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <h6>Find Factorial Demo</h6>
                    </div>
                    <div className="row">
                        <div className="col"><input ref={inputEl} onChange={(e)=>inputChanged(e)} placeholder={value} /></div>
                        <div className="col"><button onClick={() => handleClick()}>Calculate</button></div>
                        <div className="col">Result {memoizedResult}</div>
                    </div>
                    <div className="row">
                        <div className="col">for input {value} no of times function called {counter}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReactUseMemo;