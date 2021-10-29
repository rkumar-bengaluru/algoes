(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[7],{106:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(1),s=n(46),r=n(92),o=(n(86),n(0));t.default=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],l=t[1];Object(c.useEffect)((function(){l(Object(o.jsx)(b,{}))}),[]);var a=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Single Responsibility Principle"}),Object(o.jsxs)("p",{children:["a ",Object(o.jsx)("code",{children:"class should only have one responsibility"}),". Furthermore, it should only have one reason to change"]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{style:{height:"500px"},className:"border",children:Object(o.jsx)("algoes-code",{src:e.code})})})]})},d=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Open Close Principle"}),Object(o.jsx)("p",{children:Object(o.jsx)("code",{children:"classes should be open for extension but closed for modification"})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{style:{height:"500px"},className:"border",children:Object(o.jsx)("algoes-code",{src:e.code})})})]})},h=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Liskov Substituion Principle"}),Object(o.jsx)("p",{children:Object(o.jsx)("code",{children:"if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program"})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{style:{height:"500px"},className:"border",children:Object(o.jsx)("algoes-code",{src:e.code})})})]})},p=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Interface Segregation Principle"}),Object(o.jsx)("p",{children:Object(o.jsx)("code",{children:"larger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them"})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{style:{height:"500px"},className:"border",children:Object(o.jsx)("algoes-code",{src:e.code})})})]})},j=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Dependency Inversion Principle"}),Object(o.jsx)("p",{children:Object(o.jsx)("code",{children:"The principle of dependency inversion refers to the decoupling of software modules. This way, instead of high-level modules depending on low-level modules, both will depend on abstractions"})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{style:{height:"500px"},className:"border",children:Object(o.jsx)("algoes-code",{src:e.code})})})]})},b=function(){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{children:"Solid Home"}),Object(o.jsx)("p",{children:"SOLID is one of the most popular sets of design principles in object-oriented software development. It\u2019s a mnemonic acronym for the following five design principles:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/algoes",onClick:function(e){return u(e)},children:"Single Responsibility Priniciple"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/algoes",onClick:function(e){return u(e)},children:"Open Closed Principle"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/algoes",onClick:function(e){return u(e)},children:"Liskov Substituion Principle"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/algoes",onClick:function(e){return u(e)},children:"Interface Segregation Principle"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/algoes",onClick:function(e){return u(e)},children:"Dependency Inversion Principle"})})]})]})};function u(e){e.preventDefault(),f(e.target.textContent)}function f(e){switch(console.log(e),e){case"Single Responsibility Priniciple":l(Object(o.jsx)(a,{code:"public class MovieTicketBooking {\n\tpublic Ticket bookTicket(Movie movie, Screen screen, Slot slot) {\n\t\t// code to book ticket.\n\t}\n\n\tpublic Ticket getTicket(Long ticketId) {\n\t\t// since this class booked the ticket and hence make sense to \n\t\t// to retrieve the ticket from this class.\n\t}\n\n\tpublic Invoide getInvoice(Long ticketId) {\n\t\t// this method violates Single Responsibility Principle,\n\t\t// because any change in invoicing method will lead to\n\t\t// change in this class, even though this class is not\n\t\t// responsible for invoice.\n\t\t// assumption is invoicing is not this class responsibility\n\t}\n}\n"}));break;case"Open Closed Principle":l(Object(o.jsx)(d,{code:"interface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\n// initially you have just standard ticket type.\nclass StandardTicket extends Ticket {}\n// later in the development cycle you want to \n// add Gold Tier, so instead of changing the standard\n// ticket class and retrofit Gold type you extend StandardTicket\n// this is Open Closed Principle.\n// StandardTicket is Closed for enhancements.\n// StandardTicket is Open for extension\nclass GoldTicket extends StandardTicket {}\n"}));break;case"Liskov Substituion Principle":l(Object(o.jsx)(h,{code:"interface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\n// gold ticket has additional features.\n// this interface helps achieve Liskov Substition Principle.\ninterface AddOns {\n\tvoid deliverSnacks();\n}\n// initially you have just standard ticket type.\n// since StandardTicket has no AddOns, it need not implement it.\nclass StandardTicket extends Ticket {}\n// later in the development cycle you want to \n// add Gold Tier, so instead of changing the standard\n// ticket class and retrofit Gold type you extend StandardTicket\n// this is Open Closed Principle.\n// StandardTicket is Closed for enhancements.\n// StandardTicket is Open for extension\nclass GoldTicket extends StandardTicket implements AddOns {}\n"}));break;case"Interface Segregation Principle":l(Object(o.jsx)(p,{code:"/**\n * The ticket interface has 2 reponsibility.\n * ticket attributes.\n * printing ticket.\n **/\ninterface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n\tvoid printTicket();\n}\n// this needs to broken into 2 interface as below.\n// single interface with multiple responsibility\n// is broken down into smaller responsibility.\ninterface InterfaceSegregationTicket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\ninterface InterfaceSegregationTicketPrinter {\n\tvoid printTicket();\n}\n"}));break;case"Dependency Inversion Principle":l(Object(o.jsx)(j,{code:"interface Ticket {}\ninterface SilverTicket extends Ticket {}\ninterface GoldTicket extends SilverTicket {}\ninterface PlatinumTicket extends GoldTicket {}\n\npublic class MovieTicketBooking {\n\t// violates dependency inversion principle.\n\tprivate GoldTicket ticket; // wrong.\n\t// the implementation class should operate on interface\n\t// this helps avoid strongly types implementations.\n\tprivate Ticket ticket; // correct\n}\n"}));break;default:l(Object(o.jsx)(b,{}))}}return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-3",children:Object(o.jsx)(s.a,{name:r.name,childs:r.items,showComponent:f})}),Object(o.jsx)("div",{className:"col-sm-9",children:n})]})})}},86:function(e,t,n){"use strict";var i=n(11),c=n.n(i),s=n(19),r=n(7),o=n(8),l=n(9),a=n(10),d=n(87),h=n(88),p=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n),(e=t.call(this)).attachShadow({mode:"open"});var i=document.createElement("template");return i.innerHTML='<div className="border" id="editor"></div>',e.shadowRoot.appendChild(i.content.cloneNode(!0)),e.__element=null,e.__flask=null,e}return Object(o.a)(n,[{key:"connectedCallback",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.hasAttribute("src")?this.getAttribute("src"):"null",this.__element=this.shadowRoot.querySelector("#editor"),this.__flask=new h.a(this.__element,{language:"js",styleParent:this.shadowRoot,lineNumbers:!0}),this.__flask.updateCode(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"attributeChangedCallback",value:function(e,t,n){if("src"===e){var i=this.hasAttribute("src")?this.getAttribute("src"):"null";this.__flask&&this.__flask.updateCode(i)}}}],[{key:"observedAttributes",get:function(){return["src"]}}]),n}(Object(d.a)(HTMLElement));customElements.define("algoes-code",p)},92:function(e){e.exports=JSON.parse('{"name":"Solid Design Priniciples","items":[{"name":"Single Responsibility Priniciple"},{"name":"Open Closed Principle"},{"name":"Liskov Substituion Principle"},{"name":"Interface Segregation Principle"},{"name":"Dependency Inversion Principle"}]}')}}]);
//# sourceMappingURL=7.c0d8b6b1.chunk.js.map