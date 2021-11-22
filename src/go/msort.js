import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

const GoMSort = () => {
    const [cm, setCm] = useState(React.createRef());
    const [code, setCode] = useState('package main\n\nimport (\n\t\"fmt\"\n\t\"math\"\n)\n\nfunc main() {\n\t// array variable declaration\n\tinput: = [] int {\t5,\t4,\t3,\t2,\t1\t}\n\tsort(input, 0, len(input) - 1)\n\tfmt.Println(input)\n}\n\nfunc sort(input[] int, l int, r int) {\n\tif l < r {\n\t\t// math floor\n\t\tvar m float64 = float64(l) + math.Floor((float64(r) - float64(l)) / 2)\n\t\tvar middle = int(m)\n\t\tsort(input, l, middle)\n\t\tsort(input, middle + 1, r)\n\t\tmerge(input, l, middle, r)\n\t}\n}\n\nfunc swap(input[] int, i int, j int) {\n\tvar tmp = input[i]\n\tinput[i] = input[j]\n\tinput[j] = tmp\n}\n\nfunc merge(input[] int, l int, m int, r int) {\n\tvar i = l\n\tvar j = m + 1\n\n\tfor i <= m && j <= r {\n\t\tif input[i] > input[j] {\n\t\t\t// swap\n\t\t\tswap(input, i, j)\n\t\t\ti++\n\t\t\tj++\n\t\t\tfor k: = j;\n\t\t\tk <= r;\n\t\t\tk++{\n\t\t\t\tif input[k - 1] > input[k] {\n\t\t\t\t\tswap(input, k - 1, k)\n\t\t\t\t}\n\t\t\t}\n\t\t\tj = m + 1\n\t\t} else {\n\t\t\ti++\n\t\t\tj++\n\t\t}\n\t}\n}\n');

    return (
        <div className="container-fluid">
            <h5>Merge Sort with GoLang</h5>
            <div >
                <CodeMirror
                    value={code}
                    ref={cm}
                    options={{
                        lineNumbers: true,
                        matchBrackets: true,
                        continueComments: "Enter",
                        extraKeys: { "Ctrl-Q": "toggleComment" }
                    }}
                    style={{ "height": "800px" }}
                />
            </div>
        </div>
    )
}
export default GoMSort;