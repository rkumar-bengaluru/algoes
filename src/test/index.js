import menus from './testing.json';
import ParentComponent from "../nodejs/collapse/parentcomponent";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { useState } from 'react';
const ReactTesting = () => {
    const [code,setCode] = useState('');
    function showComponent(name) {
        switch (name) {
            case 'text match':
                setCode("// app.js\nimport React, {useState} from 'react';\nconst App = (props) => {\n\treturn ( <div >\n\t\t<h1 > {\tprops.message} < /h1>\n\t\t/div>\n\t)\n}\nexport default App;\n// app.test.js\nimport React from 'react';\nimport {render,\tscreen} from '@testing-library/react';\nimport UserEvent from '@testing-library/user-event';\nimport '@testing-library/jest-dom';\nimport App from './app';\n\ndescribe('Testing App', () => {\n\ttest('render h1 element', () => {\n\t\trender( < App message = \"Hello World\" / > );\n\t\texpect(screen.getByText(/Hello/)).toBeInTheDocument();\n\t});\n});\n");
                break;
            case 'UserEvent':
                setCode("// app.js\nimport React, {\tuseState} from 'react';\n\nconst App = (props) => {\n\tconst [counter, setCounter] = useState(0);\n\n\tconst increment = () => {\n\t\tsetCounter((prev) => ++prev);\n\t}\n\tconst decrement = () => {\n\t\tsetCounter((prev) => --prev);\n\t}\n\n\treturn ( <div >\n\t\t<h1 > {\tprops.message} < /h1> \n\t\t<h2 data - testid = \"counter\" > {counter} < /h2> \n\t\t<button onClick = {increment} > Increment < /button> <\n\t\tbutton onClick = {decrement} > Decrement < /button> <\n\t\t/div>\n\t)\n}\nexport default App;\n\n// app.test.js\nimport React from 'react';\nimport {render,screen} from '@testing-library/react';\nimport UserEvent from '@testing-library/user-event';\nimport '@testing-library/jest-dom';\nimport App from './app';\n\ndescribe('Testing App', () => {\n\ttest('increment', () => {\n\t\trender( < App message = \"Something\" / > );\n\t\tconst counter = screen.getByTestId('counter');\n\t\tconst incrementButton = screen.getByText('Increment');\n\t\tUserEvent.click(incrementButton);\n\t\tUserEvent.click(incrementButton);\n\t\texpect(counter.textContent).toEqual('2');\n\t\tscreen.debug();\n\t});\n\n\ttest('decrement', () => {\n\t\trender( < App message = \"\" / > );\n\t\tconst counter = screen.getByTestId('counter');\n\t\tconst decrementButton = screen.getByText('Decrement');\n\t\tUserEvent.click(decrementButton);\n\t\texpect(counter.textContent).toEqual('-1');\n\t\tUserEvent.click(decrementButton);\n\t\texpect(counter.textContent).toEqual('-2');\n\t});\n});\n");
            default:
                break;
        }
    }
    return (
        <div className="container-fluid">
            <h6>React Basic Testing</h6>
            <p>You can test React components similar to testing other JavaScript code.You can test React components similar to testing other JavaScript code</p>
            <ul>
                <li><strong>Rendering component trees</strong> in a simplified test environment and asserting on their output.</li>
                <li><strong>Running a complete app</strong> in a realistic browser environment (also known as “end-to-end” tests).</li>
            </ul>
            <div className="row">
                <div className="col-sm-3">
                    {menus.subMenus.map((feature, index) => {
                        return <ParentComponent
                            key={index}
                            name={feature.name}
                            childs={feature.links}
                            showComponent={showComponent} />
                    })}
                </div>
                <div className="col-sm-9">
                    <CodeMirror
                        value={code}
                        options={{lineNumbers:true,mode:"javascript"}}/>
                </div>
            </div>
        </div>
    )
}
export default ReactTesting;