import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';
//var CodeMirror = require('react-codemirror2');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
const Java16VectorApi = (props) => {
    const [title, setTitle] = useState('Java 16 Vector API');
    const [cm, setCm] = useState(React.createRef());
    const [example1, setExample1] = useState('');
    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setExample1('static final VectorSpecies < Float > SPECIES = FloatVector.SPECIES_PREFERRED;\n\nvoid vectorComputation(float[] a, float[] b, float[] c,\n\tVectorSpecies < Float > species) {\n\tint i = 0;\n\tint upperBound = species.loopBound(a.length);\n\tfor (; i < upperBound; i += species.length()) {\n\t\t//FloatVector va, vb, vc;\n\t\tvar va = FloatVector.fromArray(species, a, i);\n\t\tvar vb = FloatVector.fromArray(species, b, i);\n\t\tvar vc = va.mul(va).\n\t\tadd(vb.mul(vb)).\n\t\tneg();\n\t\tvc.intoArray(c, i);\n\t}\n\n\tfor (; i < a.length; i++) {\n\t\tc[i] = (a[i] * a[i] + b[i] * b[i]) * -1.0 f;\n\t}\n}\nvectorComputation(a, b, c, SPECIES);');
    }, [example1, cm]);
    return (
        <div className="container-fluid">
            <h6>{title}</h6>
            <div className="row p-2">
                <p>
                    When you use Vector API, jdk compiles your code into optimized hardware instructions
                    on supported CPU architectures.
                </p>
                <h6>Highlights</h6>
                <ul>
                    <li><p>SIMD is short for Single Instruction/Multiple Data</p></li>
                    <li><p>a sequence of vector operations to a corresponding sequence of vector hardware instructions, such as those supported by Streaming SIMD Extensions (SSE) and Advanced Vector Extensions (AVX) extensions</p></li>
                    <li><p>runtime compilation and performance on x64 and AArch64 architectures:</p></li>
                </ul>
            </div>
            <h6>Example from <a href='https://openjdk.java.net/jeps/338' target='_blank'>JEP 338</a></h6>
            <div className="row p-2">
                <div className="col-sm-12">
                    <CodeMirror
                        value={example1}
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
export default Java16VectorApi;