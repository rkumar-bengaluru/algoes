(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"@context":"http://schema.org","@type":"Product","offers":[{"@type":"Offer","name":"Algorithms","availability":"https://schema.org/InStock","url":"/algorithm","subMenus":[{"name":"Sorts","url":"/algorithm/sorts/","links":[{"name":"Remove Duplicate From Array","url":"/algorithm/sorts/duplicates"},{"name":"Comming Soon...","url":"/"}]},{"name":"Strings","links":[{"name":"Comming Soon...","url":"/"}]},{"name":"Search","links":[{"name":"Comming Soon...","url":"/"}]},{"name":"Backtracking","links":[{"name":"Comming Soon...","url":"/"}]},{"name":"Bit-Manipulation","links":[{"name":"Comming Soon...","url":"/"}]},{"name":"Cache","links":[{"name":"Comming Soon...","url":"/#"}]},{"name":"Dynamic-Programming","links":[{"name":"Comming Soon...","url":"/#"}]},{"name":"Trees","links":[{"name":"Comming Soon...","url":"/#"}]},{"name":"Timing-Functions","links":[{"name":"Comming Soon...","url":"/#"}]}]},{"@type":"Offer","name":"Design Patterns","availability":"https://schema.org/InStock","url":"/designpatterns/","subMenus":[{"name":"Comming Soon...","links":[{"name":"Comming Sooon...","url":"/"}]}]}],"mpn":"","productId":"","brand":{"name":"Lakme India"},"name":"","description":"","category":"","url":"","sku":"","image":{"@type":"ImageObject","url":"","image":"","name":"","width":"1024","height":"1024"}}')},32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(24),c=n.n(a),i=n(26),o=n(2),l=(n(32),n(33),n(0)),u=function(e){return Object(l.jsx)("div",{className:"footer-basic",children:Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("a",{href:"https://www.facebook.com/vlocal.s/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"icon ion-social-facebook"})}),Object(l.jsx)("a",{href:"https://twitter.com/vlocalshop",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"icon ion-social-twitter"})}),Object(l.jsx)("a",{href:"https://in.pinterest.com/vlocalshop/_saved/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"icon ion-social-pinterest"})}),Object(l.jsx)("a",{href:"https://www.instagram.com/vlocalshop.in12/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"icon ion-social-instagram"})}),Object(l.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=919113584362",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"icon ion-social-whatsapp"})})]}),Object(l.jsxs)("ul",{className:"list-inline",children:[Object(l.jsx)("li",{className:"list-inline-item",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/",target:"_blank",rel:"noopener noreferrer",children:"Home"})}),Object(l.jsx)("li",{className:"list-inline-item",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/blog/about.html",target:"_blank",rel:"noopener noreferrer",children:"About"})}),Object(l.jsx)("li",{className:"list-inline-item",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/blog/techblogs.html",target:"_blank",rel:"noopener noreferrer",children:"Blog"})}),Object(l.jsx)("li",{className:"list-inline-item",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/blog/contact.html",target:"_blank",rel:"noopener noreferrer",children:"Contact"})})]}),Object(l.jsxs)("p",{className:"copyright",children:["Algoes \xa9 ",(new Date).getFullYear()]})]})})},h=n(8),m=n(9),d=n(11),j=n(10),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={focusedSuggestion:null,isFocused:!1,searchTerm:null,value:"Search Algoes - Example Quick Sort..."},r}return Object(m.a)(n,[{key:"toggleFocus",value:function(){this.setState({isFocused:!this.state.isFocused})}},{key:"handleChange",value:function(e){var t=e.target.value;console.log(t)}},{key:"handleKeyDown",value:function(e){switch(e.key){case"ArrowUp":case"ArrowDown":this.props.suggestions.length>0&&(e.preventDefault(),this.setFocusedSuggestion("ArrowDown"===e.key));break;case"Backspace":this.handleBackspace();break;case"Enter":this.search();break;case"Escape":this.handleEscape()}}},{key:"handleEscape",value:function(){this.setState({focusedSuggestion:null,searchTerm:""}),this.input.blur(),this.props.onClear()}},{key:"renderClearButton",value:function(){return Object(l.jsx)("button",{className:"clear-button",onClick:this.clearInput,children:Object(l.jsx)("i",{className:"fas fa-clear"})})}},{key:"renderSearchButton",value:function(){return Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.search,children:Object(l.jsx)("i",{className:"fas fa-search"})})}},{key:"search",value:function(){this.props.onClear(),this.props.onSearch(this.state.value.trim())}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"header-basic",children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary static-top",children:[Object(l.jsx)("a",{className:"ml-auto",href:"https://www.vlocalshop.in",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"img/logo.svg",alt:"LocalShop"})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("p",{className:"font-weight-bold text-white ml-auto",children:"JavaScript Algoes"}),Object(l.jsx)("div",{className:"text-white ml-auto",children:'"Learn Algorithms By Coding...!"'}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:[Object(l.jsxs)("div",{className:"input-group",ref:function(t){return e.container=t},children:[Object(l.jsx)("input",{placeholder:this.state.value,className:"form-control ml-5",id:"ex3",type:"text",autoFocus:!0,onChange:this.handleChange,ref:function(t){return e.input=t}}),this.renderClearButton(),this.renderSearchButton()]}),Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsxs)("a",{className:"nav-link ml-2 mr-2",href:"https://github.com/rkumar-bengaluru/algoes",target:"_blank",rel:"noopener noreferrer",children:["GitHub",Object(l.jsx)("span",{className:"sr-only",children:"(current)"})]})})})]})]})]})})}}]),n}(s.a.Component);b.defaultProps={autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:!1,delay:0,maxLength:100,placeholder:"",shouldRenderClearButton:!0,shouldRenderSearchButton:!0,styles:{wrapper:"search-container",field:"field",focusedField:"field--focused",hasSuggestions:"react-search-bar__field--has-suggestions",input:"input",clearButton:"clear-button",submitButton:"submit-button",suggestions:"suggestions",suggestion:"suggestion"},suggestionRenderer:function(e){return Object(l.jsx)("div",{children:e})}};var p=b,g=function(e){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(p,{}),e.children,Object(l.jsx)(u,{})]})})},f=n(13),x=n.n(f),O=n(17),v=n(14),w=(n(36),n(18)),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return console.log("data length "+w.offers.length),Object(l.jsx)("header",{className:"light",children:Object(l.jsxs)("nav",{role:"navigation",children:[Object(l.jsxs)("a",{href:"/",className:"ic menu",tabIndex:"1",children:[Object(l.jsx)("span",{className:"line"}),Object(l.jsx)("span",{className:"line"}),Object(l.jsx)("span",{className:"line"})]}),Object(l.jsx)("ul",{className:"main-nav border-bottom",children:w.offers.map((function(e,t){return Object(l.jsxs)("li",{className:"top-level-link",children:[Object(l.jsx)("a",{href:"/",className:"mega-menu text-secondary",children:Object(l.jsx)("span",{children:e.name})}),Object(l.jsx)("div",{className:"sub-menu-block",children:Object(l.jsxs)("div",{className:"row",children:[e.subMenus.map((function(e,t){return Object(l.jsxs)("div",{className:"col-md-4 col-lg-4 col-sm-4",id:t,children:[Object(l.jsx)("span",{children:Object(l.jsx)("h2",{className:"sub-menu-head",children:e.name})}),Object(l.jsx)("ul",{className:"sub-menu-lists",children:e.links.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.url,children:e.name})},t)}))})]},t)})),Object(l.jsxs)("div",{className:"row banners-area",children:[Object(l.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-4",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/product/WHUI3GWZ6H",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{alt:"ziggler",src:"https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/WHUI3GWZ6H/01.webp",width:"100%;"})})}),Object(l.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-4",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/product/Y0C38CGPRA",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{alt:"ziggler",src:"https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/Y0C38CGPRA/01.webp",width:"100%;"})})}),Object(l.jsx)("div",{className:"col-md-4 col-lg-4 col-sm-4",children:Object(l.jsx)("a",{href:"https://www.vlocalshop.in/product/Y7Q7KIZQZT",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{alt:"ziggler",src:"https://rkumar-bengaluru.github.io/vlocalshop.webp/catalog/Y7Q7KIZQZT/01.webp",width:"100%;"})})})]})]})})]},t)}))})]})})}}]),n}(s.a.Component),y=n(25);n(37);n(38),n(39);var N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).handleClick=Object(O.a)(x.a.mark((function e(){var t,n,s,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleClick ->"),e.next=3,r.togglePromise();case 3:for(console.log(r.cm.current.editor.getValue()),document.getElementById("error_area").innerHTML="",t=r.createIFrame(),n=r.getCodetoExec(),t.open(),t.write(n),t.close(),s=t.getElementsByTagName("SPAN"),a=0;a<s.length;a++)s[a].style.color="white";return e.next=14,r.togglePromise();case 14:console.log("handleClick ->"+r.state.isRunning);case 15:case"end":return e.stop()}}),e)}))),r.state={isRunning:!1},r.cm=s.a.createRef(),r.result=s.a.createRef(),r.handleClick=r.handleClick.bind(Object(v.a)(r)),r.code="// quick sort algorithm\nfunction quickSort (items) {\n\tconst length = items.length;\n\tif (length <= 1) {\n\t\treturn items;\n\t}\n\tconst PIVOT = items[0];\n\tconst GREATER = [];\n\tconst LESSER = [];\n\tfor (let i = 1; i < length; i++) {\n\t\tif (items[i] > PIVOT) {\n\t\t\tGREATER.push(items[i]);\n\t\t} else {\n\t\t\tLESSER.push(items[i]);\n\t\t}\n\t}\n\tlet sorted = quickSort(LESSER);\n\tsorted.push(PIVOT);\n\tsorted = sorted.concat(quickSort(GREATER));\n\treturn sorted;\n}\nlet ar = [0, 5, 3, 2, 2];\n// Array before Sort\nconsole.log(ar);\nar = quickSort(ar);\n// Array after sort\nconsole.log(ar);",r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.cm.current.editor.setSize(600,"100%")}},{key:"toggle",value:function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isRunning){e.next=5;break}return e.next=3,this.setState({isRunning:!1});case 3:e.next=7;break;case 5:return e.next=7,this.setState({isRunning:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"togglePromise",value:function(){var e=this;return this.state.isRunning?new Promise((function(t){e.setState({isRunning:!1},(function(){return t()}))})):new Promise((function(t){e.setState({isRunning:!0},(function(){return t()}))}))}},{key:"getStartScript",value:function(){return"<script>document.write(\"<span>starting execution of the script...</span>\");document.write('<br/>');\n<\/script>"}},{key:"getEndScript",value:function(){return"<script>document.write(\"<span >end execution of the script...</span>\");document.write('<br/>');\n<\/script>"}},{key:"getConsoleScript",value:function(){return'console.log = function(m){document.write("<span >" + ">>> " + m + "</span><br>")};'}},{key:"createIFrame",value:function(){document.getElementById("result")&&document.getElementById("result").remove();var e=document.createElement("IFRAME");return e.id="result",e.className="console-output",e.style.height="600px",e.style.color="red",e.style.width="100%",document.getElementById("results_area").appendChild(e),e.contentDocument}},{key:"getCodetoExec",value:function(){var e=this.cm.current.editor.getValue(),t=e.toLowerCase(),n=!1;return-1===t.indexOf("<script")&&(n=!0),!0===n&&(e=this.getStartScript()+"<script>\n"+this.getConsoleScript()+e+"\n<\/script>\n"+this.getEndScript()),-1===t.indexOf("onerror")&&(e='<script>\nwindow.onerror = function(message, url, linenumber) {  parent.alert_message("error", "<b>JavaScript error:</b> " + message + " on line " + linenumber);};\n<\/script>\n'+e),e}},{key:"render",value:function(){var e=this;return console.log("loading..."),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)(k,{}),Object(l.jsxs)("div",{className:"row justify-content-around m-1",children:[Object(l.jsx)("h1",{children:"let's code to learn algorithm ..."}),Object(l.jsxs)("p",{children:["In mathematics and computer science, an ",Object(l.jsx)("mark",{className:"text-primary font-weight-bold",children:"algorithm"}),"is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of specific problems or to ",Object(l.jsx)("mark",{className:"text-primary font-weight-bold",children:"perform a computation."}),"hold on so are we discovering something here... No not at all - they are mostly being solved, if there is a completely new algorithms to solve a complex problem like - image compression - to an extent which reduces memory to what is already being discovered then Hurray :), you have made a discovery of new algorithm. the recent discovered one which i use is webp image compression."]})]}),Object(l.jsx)("div",{className:"row justify-content-left m-1",children:Object(l.jsxs)("p",{children:["This tool is a kick-starter for ",Object(l.jsx)("mark",{className:"text-primary text-light bg-dark",children:"students"}),",",Object(l.jsx)("mark",{className:"text-primary text-light bg-dark",children:"developers"})," to try writing a piece of code directly in the browser and see the simulative results in terms of ",Object(l.jsx)("mark",{className:"text-primary text-light bg-dark",children:"time and space complexity."})]})}),Object(l.jsx)("h2",{children:"Below is how this online tool is going to help :- "}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row justify-content-around m-1",children:Object(l.jsx)("div",{className:"col overflow-auto border",children:Object(l.jsx)("span",{children:Object(l.jsxs)("ol",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("mark",{className:"text-primary font-weight-bold",children:"Instant Search"}),"for an algorithm/regex/patterns for your project. (Example Search - ",Object(l.jsx)("mark",{className:"text-primary",children:"Remove Duplicates from Array)"})]}),Object(l.jsxs)("li",{children:["You can ",Object(l.jsx)("mark",{className:"text-primary font-weight-bold",children:"write your code here"}),"and test with your inputs and see the ",Object(l.jsx)("mark",{className:"text-primary font-weight-bold",children:"time and space complexity of your code."})]})]})})})}),Object(l.jsx)("h2",{children:"See the below sample code, run it and see it live in action :- "}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row justify-content-around m-1",children:Object(l.jsx)("div",{className:"col overflow-auto border"})}),Object(l.jsx)("div",{className:"row justify-content-around m-1",children:Object(l.jsx)("button",{onClick:function(){return e.handleClick()},type:"button",className:"btn btn-outline-secondary",id:"runscript",children:"Run"})}),Object(l.jsxs)("div",{className:"row justify-content-around border-bottom",children:[Object(l.jsxs)("div",{className:"col overflow-auto border cm-jsstudio",children:[Object(l.jsx)("label",{children:"Write the JavaScript below & Click Run"}),this.state.isRunning&&Object(l.jsx)("div",{id:"input-spinner",className:"spinner-border text-primary hidden",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(l.jsx)("div",{id:"error-display",className:"hidden"}),Object(l.jsx)("div",{children:Object(l.jsx)(y.UnControlled,{value:this.code,ref:this.cm,options:{lineNumbers:!0,matchBrackets:!0,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"}}})})]}),Object(l.jsxs)("div",{className:"col overflow-auto border cm-jsstudio-small",children:[Object(l.jsx)("label",{children:"Console Log"}),Object(l.jsx)("div",{id:"error_area",className:"jsstudio-error",children:" "}),Object(l.jsx)("div",{id:"results_area",ref:this.result,className:"jsstudio-results",children:" "})]})]})]})}}]),n}(s.a.Component);c.a.render(Object(l.jsx)(i.a,{basename:window.location.pathname||"",children:Object(l.jsx)(g,{children:Object(l.jsx)(o.c,{children:Object(l.jsx)(o.a,{exact:!0,path:"/",component:N})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8e126123.chunk.js.map