(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[10],{93:function(r,t,e){"use strict";e.r(t);var n=e(2),o=e(1),c=e(3),a=e(0);t.default=function(){var r="/**\n * Error boundaries are React components that catch JavaScript errors anywhere \n * in their child component tree, log those errors, and display a fallback UI \n * instead of the component tree that crashed. Error boundaries catch errors \n * during rendering, in lifecycle methods, and in constructors of the whole \n * tree below them.\n */\nimport React from 'react';\n\nclass LSErrorBoundary extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\terrored: false\n\t\t};\n\t}\n\t/**\n\t * Custom Error Boundary class must implments getDerivedStateFromError()\n\t */\n\tstatic getDerivedStateFromError(error) {\n\t\treturn {\n\t\t\terrored: true\n\t\t};\n\t}\n\t/**\n\t * Custom Error Boundary can override the lifecycle method componentDidCatch()\n\t * method to log the error and errorInfo \n\t */\n\tcomponentDidCatch(error, errorInfo) {\n\t\tconsole.log('error happened in child components' + error);\n\t}\n\n\trender() {\n\t\tif (this.state.errored) {\n\t\t\treturn ( <\n\t\t\t\tdiv > Something Went Wrong loading this component. < /div>\n\t\t\t)\n\t\t}\n\t\treturn this.props.children;\n\t}\n}\nexport default LSErrorBoundary;\n",t={current:r,prev:""},e=Object(o.useReducer)((function(t,e){switch(e.type){case 0:return{prev:t.current,current:r};case 1:return{prev:t.current,current:"< LSErrorBoundary >\n\t// use React.Suspense as fallback.\n\t<Suspense fallback = {\n\t\t() => {\n\t\t\treturn <h1 > Error happened in children. < /h1>}}> \n\t\t// one or more child components, any error in loading\n\t\t// child component will be caught by LSErrorBoundary\n\t\t<SpringRouter / >\n\t</Suspense> \n</LSErrorBoundary>\n"}}}),t),s=Object(n.a)(e,2),i=s[0],d=s[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h6",{children:"React Error Boundary"}),Object(a.jsx)("p",{children:"Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"javascript:void(0)",onClick:function(){return d({type:0})},children:"Define Custom ErrorBoundary"})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"javascript:void(0)",onClick:function(){return d({type:1})},children:"Usage Of ErrorBoundary"})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(c.UnControlled,{value:i.current,options:{lineNumbers:!0,mode:"javascript"}})})]})}}}]);
//# sourceMappingURL=10.b835c1a2.chunk.js.map