import React, { useReducer } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

const SpringRouter = () => {

    const def = "@Component\npublic class ProductHandler {\n\n\tpublic Mono < ServerResponse > hello(ServerRequest request) {\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)\n\t\t\t.body(BodyInserters.fromValue(\"Hello, Spring!\"));\n\t}\n\n\tpublic Mono < ServerResponse > findProduct(ServerRequest request) {\n\t\tMono < LocalShopProduct3 > oneProduct = Mono.just(new LocalShopProduct3(\"2002\", \"Yonex 18i\"));\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(oneProduct, LocalShopProduct3.class);\n\t}\n\n\tpublic Mono < ServerResponse > findAll(ServerRequest request) {\n\t\tFlux < LocalShopProduct3 > all = Flux.just(new LocalShopProduct3(\"2001\", \"Apacs Ziggler\"),\n\t\t\tnew LocalShopProduct3(\"2002\", \"Yonex 18i\"));\n\t\treturn ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(all, LocalShopProduct3.class);\n\t}\n}\n";
    const initial = { current: def, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);
    function reducer(state, action) {
        switch (action.type) {
            case 0:
                return { prev: state.current, current: def };
            case 1:
                return { prev: state.current, current: "@Configuration(proxyBeanMethods = false)\npublic class ProductRouter {\n\tLogger log = LoggerFactory.getLogger(getClass());\n\n\t@Bean\n\tpublic RouterFunction < ServerResponse > route(ProductHandler greetingHandler) {\n\t\treturn RouterFunctions\n\t\t\t.route(GET(\"/hello\").and(accept(MediaType.APPLICATION_JSON)), greetingHandler::hello);\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > home(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET(\"/products/findOne\"),\n\t\t\thandler::findProduct);\n\t\treturn r;\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > all(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET(\"/products/all\"),\n\t\t\thandler::findAll);\n\t\treturn r;\n\t}\n\n\t@Bean\n\tRouterFunction < ServerResponse > nested(ProductHandler handler) {\n\t\tRouterFunction < ServerResponse > r = RouterFunctions.route(GET(\"/nested/one\"),\n\t\t\thandler::findProduct).and(RouterFunctions.route(GET(\"/nested/all\"), handler::findAll));\n\t\treturn r;\n\t}\n\n}\n" };
            case 2:
                return { prev: state.current, current: "public record LocalShopProduct3(String productID, String name) {}" };
            default:
                break;
        }
    }
    return (
        <>
            <h6>Spring WebFlux</h6>


            <p>The functional web framework introduces a new programming model where we use functions to route and handle requests.</p>

            <div className="row">
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => dispatch({ type: 0 })}>Handler</a>
                </div>
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => dispatch({ type: 1 })}>Router</a>
                </div>
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => dispatch({ type: 2 })}>Model</a>
                </div>
            </div>
            <div className="row">
                <CodeMirror
                    value={state.current}
                    options={{
                        lineNumbers: true,
                        mode: "javascript"
                    }}
                />
            </div>
        </>
    )
}
export default SpringRouter;