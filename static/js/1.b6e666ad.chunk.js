(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[1],{96:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(1),c=t(3),u=t(0);n.default=function(){var e='@Component\npublic class ProductHandler {\n\n\tpublic Mono < ServerResponse > hello(ServerRequest request) {\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)\n\t\t\t.body(BodyInserters.fromValue("Hello, Spring!"));\n\t}\n\n\tpublic Mono < ServerResponse > findProduct(ServerRequest request) {\n\t\tMono < LocalShopProduct3 > oneProduct = Mono.just(new LocalShopProduct3("2002", "Yonex 18i"));\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(oneProduct, LocalShopProduct3.class);\n\t}\n\n\tpublic Mono < ServerResponse > findAll(ServerRequest request) {\n\t\tFlux < LocalShopProduct3 > all = Flux.just(new LocalShopProduct3("2001", "Apacs Ziggler"),\n\t\t\tnew LocalShopProduct3("2002", "Yonex 18i"));\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(all, LocalShopProduct3.class);\n\t}\n}\n',n={current:e,prev:""},t=Object(o.useReducer)((function(n,t){switch(t.type){case 0:return{prev:n.current,current:e};case 1:return{prev:n.current,current:'@Configuration(proxyBeanMethods = false)\npublic class ProductRouter {\n\tLogger log = LoggerFactory.getLogger(getClass());\n\n\t@Bean\n\tpublic RouterFunction < ServerResponse > route(ProductHandler greetingHandler) {\n\t\treturn RouterFunctions\n\t\t\t.route(GET("/hello").and(accept(MediaType.APPLICATION_JSON)), greetingHandler::hello);\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > home(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET("/products/findOne"),\n\t\t\thandler::findProduct);\n\t\treturn r;\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > all(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET("/products/all"),\n\t\t\thandler::findAll);\n\t\treturn r;\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > nested(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET("/nested/one"),\n\t\t\thandler::findProduct).and(RouterFunctions.route(GET("/nested/all"), handler::findAll));\n\t\treturn r;\n\t}\n\n}\n'};case 2:return{prev:n.current,current:"public record LocalShopProduct3(String productID, String name) {}"}}}),n),s=Object(r.a)(t,2),l=s[0],a=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h6",{children:"Spring WebFlux"}),Object(u.jsx)("p",{children:"The functional web framework introduces a new programming model where we use functions to route and handle requests."}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("a",{href:"javascript:void(0)",onClick:function(){return a({type:0})},children:"Handler"})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("a",{href:"javascript:void(0)",onClick:function(){return a({type:1})},children:"Router"})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("a",{href:"javascript:void(0)",onClick:function(){return a({type:2})},children:"Model"})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(c.UnControlled,{value:l.current,options:{lineNumbers:!0,mode:"javascript"}})})]})}}}]);
//# sourceMappingURL=1.b6e666ad.chunk.js.map