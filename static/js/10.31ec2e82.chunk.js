(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[10],{100:function(t,n,e){"use strict";e.r(n);e(86);var r=e(0);n.default=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h6",{children:"useReducer"}),Object(r.jsxs)("p",{children:["An alternative to ",Object(r.jsx)("mark",{children:"useState"}),". Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you\u2019re familiar with Redux, you already know how this works.)"]}),Object(r.jsx)("code",{children:"const [state, dispatch] = useReducer(reducer, initialArg, init);"}),Object(r.jsx)("div",{style:{height:"600px"},className:"row border",children:Object(r.jsx)("algoes-code",{src:"import {useEffect,\tuseReducer,\tuseState,\tlazy,\tSuspense} from \"react\"\nimport menus from '../megamenu/megamenu.json';\nimport SpringIntro from \"./home\";\nimport SpringController from \"./controller\";\nimport WebFlux from \"./webflux\";\nimport Hateaos from \"./hateaos\";\nimport LSErrorBoundary from \"../error\";\nconst SpringScheduling = lazy(() =>\timport ('./scheduling'));\nconst WebSocket = lazy(() =>import ('./websocket/index'));\nconst SpringRouter = lazy(() =>\timport ('./router'));\n\nconst SpringHome = () => {\n\t\tconst springView = {\n\t\t\tcurrent: < SpringIntro / > ,\n\t\t\tprev: ''\n\t\t};\n\t\tconst [state, dispatch] = useReducer(springReducer, springView);\n\t\tconst [springMenu, setSpringMenu] = useState([]);\n\n\t\tuseEffect(() => {\n\t\t\tmenus.offers.map((item, index) => {\n\t\t\t\tif (item.name === 'Spring.io') {\n\t\t\t\t\tsetSpringMenu(item.subMenus);\n\t\t\t\t}\n\t\t\t});\n\t\t}, [springMenu]);\n\n\t\tfunction springReducer(state, action) {\n\t\t\tconsole.log(action.type);\n\t\t\tswitch (action.type) {\n\t\t\t\tcase '0':\n\t\t\t\t\treturn {\n\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\tcurrent: < SpringIntro / >\n\t\t\t\t\t};\n\t\t\t\tcase '1':\n\t\t\t\t\treturn {\n\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\tcurrent: < SpringController / >\n\t\t\t\t\t};\n\t\t\t\tcase '2':\n\t\t\t\t\treturn {\n\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\tcurrent: < WebFlux / >\n\t\t\t\t\t};\n\t\t\t\tcase '4':\n\t\t\t\t\treturn {\n\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\tcurrent: () => {\n\t\t\t\t\t\t\treturn ( \n\t\t\t\t\t\t\t\t\t<Suspense fallback = { < div > loading... < /div>}> \n\t\t\t\t\t\t\t\t\t\t<SpringScheduling / >\n\t\t\t\t\t\t\t\t\t</Suspense>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t\tcase '9':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\t\t\tcurrent: < WebSocket / >\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\tcase '11':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\t\t\tcurrent: < Hateaos / >\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\tcase '25':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\t\t\tcurrent: () => {\n\t\t\t\t\t\t\t\t\treturn ( \n\t\t\t\t\t\t\t\t\t\t<LSErrorBoundary >\n\t\t\t\t\t\t\t\t\t\t\t<Suspense fallback = {\n\t\t\t\t\t\t\t\t\t\t\t() => {\n\t\t\t\t\t\t\t\t\t\t\t\treturn <h1 > Error happened in children. < /h1>}}> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<SpringRouter / >\n\t\t\t\t\t\t\t\t\t\t\t</Suspense> <\n\t\t\t\t\t\t\t\t\t\t/LSErrorBoundary>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\t\tprev: state.current,\n\t\t\t\t\t\t\t\t\t\tcurrent: 'TODO'\n\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tfunction renderMenu() {\n\t\t\t\t\t\t\t\treturn ( \n\t\t\t\t\t\t\t\t<ul > {springMenu.map((e, i) => {\n\t\t\t\t\t\t\t\t\t\t\treturn ( <div >\n\t\t\t\t\t\t\t\t\t\t\t\t<a key = {i}\n\t\t\t\t\t\t\t\t\t\t\t\t\thref = \"javascript:void(0)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tonClick = {\n\t\t\t\t\t\t\t\t\t\t\t\t\t() => dispatch({\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype: e.action\n\t\t\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t\t\t\t} >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li key = {i} > {\n\t\t\t\t\t\t\t\t\t\t\t\t\te.name\n\t\t\t\t\t\t\t\t\t\t\t\t\t} < /li> <\n\t\t\t\t\t\t\t\t\t\t\t\t/a> \n\t\t\t\t\t\t\t\t\t\t\t\t<ul > {\n\t\t\t\t\t\t\t\t\t\t\t\t\te.links.map((item, index) => {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn ( <\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ta key = {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tindex\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thref = \"javascript:void(0)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonClick = {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t() => dispatch({\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype: item.action\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t} >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tli key = {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tindex\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t} > {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\titem.name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t} < /li> <\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t\t\t} </ul> <\n\t\t\t\t\t\t\t\t\t\t\t/div>\n\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t} </ul>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tfunction renderCurrent() {\n\t\t\t\t\t\t\t\treturn ( <div > {state.current} < /div>)\n\t\t\t\t\t\t\t}\n\n\treturn ( \n\t\t\t\t\t\t\t<div className = \"container-fluid\" >\n\t\t\t\t\t\t\t\t<h6 > Spring.io < /h6> \n\t\t\t\t\t\t\t\t<div className = \"row\" >\n\t\t\t\t\t\t\t\t<div className = \"col-sm-3\" > {\n\t\t\t\t\t\t\t\t\trenderMenu()\n\t\t\t\t\t\t\t\t} </div> \n\t\t\t\t\t\t\t\t<div className = \"col-sm-9\" > {\n\t\t\t\t\t\t\t\t\trenderCurrent()\n\t\t\t\t\t\t\t\t} </div> \n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t</div>\n\t)\n}\nexport default SpringHome;\n"})})]})}},86:function(t,n,e){"use strict";var r=e(11),i=e.n(r),s=e(19),a=e(7),c=e(8),u=e(9),o=e(10),l=e(87),d=e(88),p=function(t){Object(u.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(a.a)(this,e),(t=n.call(this)).attachShadow({mode:"open"});var r=document.createElement("template");return r.innerHTML='<div className="border" id="editor"></div>',t.shadowRoot.appendChild(r.content.cloneNode(!0)),t.__element=null,t.__flask=null,t}return Object(c.a)(e,[{key:"connectedCallback",value:function(){var t=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.hasAttribute("src")?this.getAttribute("src"):"null",this.__element=this.shadowRoot.querySelector("#editor"),this.__flask=new d.a(this.__element,{language:"js",styleParent:this.shadowRoot,lineNumbers:!0}),this.__flask.updateCode(n);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"attributeChangedCallback",value:function(t,n,e){if("src"===t){var r=this.hasAttribute("src")?this.getAttribute("src"):"null";this.__flask&&this.__flask.updateCode(r)}}}],[{key:"observedAttributes",get:function(){return["src"]}}]),e}(Object(l.a)(HTMLElement));customElements.define("algoes-code",p)}}]);
//# sourceMappingURL=10.31ec2e82.chunk.js.map