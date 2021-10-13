(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[13],{90:function(t){t.exports=JSON.parse('{"@type":"Offer","name":"React Testing","availability":"https://schema.org/InStock","url":"/algoes/#/react/testing","subMenus":[{"name":"React Testing","links":[{"name":"text match","url":"/algoes/#/react/testing/text","sublinks":[]},{"name":"UserEvent","url":"/algoes/#/react/testing/userevt","sublinks":[]}]}]}')},99:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n(90),c=n(48),o=n(3),i=n(1),a=n(0);e.default=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],p=e[1];function m(t){switch(t){case"text match":p("// app.js\nimport React, {useState} from 'react';\nconst App = (props) => {\n\treturn ( <div >\n\t\t<h1 > {\tprops.message} < /h1>\n\t\t/div>\n\t)\n}\nexport default App;\n// app.test.js\nimport React from 'react';\nimport {render,\tscreen} from '@testing-library/react';\nimport UserEvent from '@testing-library/user-event';\nimport '@testing-library/jest-dom';\nimport App from './app';\n\ndescribe('Testing App', () => {\n\ttest('render h1 element', () => {\n\t\trender( < App message = \"Hello World\" / > );\n\t\texpect(screen.getByText(/Hello/)).toBeInTheDocument();\n\t});\n});\n");break;case"UserEvent":p("// app.js\nimport React, {\tuseState} from 'react';\n\nconst App = (props) => {\n\tconst [counter, setCounter] = useState(0);\n\n\tconst increment = () => {\n\t\tsetCounter((prev) => ++prev);\n\t}\n\tconst decrement = () => {\n\t\tsetCounter((prev) => --prev);\n\t}\n\n\treturn ( <div >\n\t\t<h1 > {\tprops.message} < /h1> \n\t\t<h2 data - testid = \"counter\" > {counter} < /h2> \n\t\t<button onClick = {increment} > Increment < /button> <\n\t\tbutton onClick = {decrement} > Decrement < /button> <\n\t\t/div>\n\t)\n}\nexport default App;\n\n// app.test.js\nimport React from 'react';\nimport {render,screen} from '@testing-library/react';\nimport UserEvent from '@testing-library/user-event';\nimport '@testing-library/jest-dom';\nimport App from './app';\n\ndescribe('Testing App', () => {\n\ttest('increment', () => {\n\t\trender( < App message = \"Something\" / > );\n\t\tconst counter = screen.getByTestId('counter');\n\t\tconst incrementButton = screen.getByText('Increment');\n\t\tUserEvent.click(incrementButton);\n\t\tUserEvent.click(incrementButton);\n\t\texpect(counter.textContent).toEqual('2');\n\t\tscreen.debug();\n\t});\n\n\ttest('decrement', () => {\n\t\trender( < App message = \"\" / > );\n\t\tconst counter = screen.getByTestId('counter');\n\t\tconst decrementButton = screen.getByText('Decrement');\n\t\tUserEvent.click(decrementButton);\n\t\texpect(counter.textContent).toEqual('-1');\n\t\tUserEvent.click(decrementButton);\n\t\texpect(counter.textContent).toEqual('-2');\n\t});\n});\n")}}return Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("h6",{children:"React Basic Testing"}),Object(a.jsx)("p",{children:"You can test React components similar to testing other JavaScript code.You can test React components similar to testing other JavaScript code"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Rendering component trees"})," in a simplified test environment and asserting on their output."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Running a complete app"})," in a realistic browser environment (also known as \u201cend-to-end\u201d tests)."]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-3",children:s.subMenus.map((function(t,e){return Object(a.jsx)(c.a,{name:t.name,childs:t.links,showComponent:m},e)}))}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)(o.UnControlled,{value:n,options:{lineNumbers:!0,mode:"javascript"}})})]})]})}}}]);
//# sourceMappingURL=13.8accf0c5.chunk.js.map