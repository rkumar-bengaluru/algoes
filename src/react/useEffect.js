import { useEffect, useState } from 'react';
import '../react/component/algoescode';

const ReactUseEffect = () => {
    const [code, setCode] = useState('');

    // mount.
    useEffect(() => {
        // set the current code state.
        setCode("import {useEffect,useState} from 'react';\n// editor web component\nimport '../react/component/algoescode'; \n\nconst ReactUseEffect = () => {\n\tconst [code, setCode] = useState('');\n\n\t// mount.\n\tuseEffect(() => {\n\t\t// set the current code state.\n\t\tsetCode(\"somecode\");\n\t\t// unmount.\n\t\treturn () => {\n\t\t\tsetCode(null);\n\t\t}\n\t}, [code]);\n\n\treturn ( \n\t\t<>\n\t\t\t<h6 > Using the Effect Hook < /h6> \n\t\t\t< p > The Effect Hook lets you perform side effects \n\t\t\t\tin function components.If you’ re familiar \n\t\t\t\twith React class lifecycle methods, you can \n\t\t\t\tthink of useEffect Hook as componentDidMount, \n\t\t\t\tcomponentDidUpdate, and componentWillUnmount \n\t\t\t\tcombined. < /p> \n\t\t\t<div style = {{\t\"height\": \"600px\"}}\tclassName = \"row border\" >\n\t\t\t\t<algoes - code src = {code} > < /algoes-code> \n\t\t\t</div> \n\t\t</>\n\t)\n}\nexport default ReactUseEffect;\n");
        // unmount.
        return () => {
            setCode(null);
        }
    }, [code]);

    return (
        <div className="container">
            <h6>Using the Effect Hook</h6>
            <p>The Effect Hook lets you perform side effects in function components.If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
            <div style={{ "height": "600px" }} className="row border">
                <algoes-code src={code}></algoes-code>
            </div>
        </div>
    )
}
export default ReactUseEffect;