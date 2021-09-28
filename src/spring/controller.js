import React, { useState, useEffect, useReducer } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const SpringController = () => {
    const [code, setCode] = useState('');
    const [customerController, setCustomerController] = useState('package org.java.full.stack.spring.io.controller;\n\nimport java.util.List;\n\nimport org.java.full.stack.spring.io.model.LocalShopCustomer;\nimport org.java.full.stack.spring.io.service.CustomerService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @RestController = @Controller + @ResponseBody\n * @ResponseBody = Serializes JSON response to response body.\n * \n * @author Rupak Kumar...\n *\n */\n@RestController\n@RequestMapping(\"/customers\")\npublic class CustomerController {\n\n\tLogger logger = LoggerFactory.getLogger(getClass());\n\n\t@Autowired\n\tprivate CustomerService svc;\n\n\t@GetMapping(\"\")\n\tpublic List < LocalShopCustomer > all() {\n\t\treturn svc.findAll();\n\t}\n\n\t@GetMapping(\"/{name}\")\n\tpublic List < LocalShopCustomer > findByName(@PathVariable String name) {\n\t\tlogger.info(\"/name->\" + name);\n\t\treturn svc.findByName(name);\n\t}\n\n\t@PostMapping(\"/create\")\n\tpublic LocalShopCustomer newEmployee(@RequestBody LocalShopCustomer newProduct) {\n\t\treturn svc.save(newProduct);\n\t}\n\n\t@GetMapping(\"/{id}\")\n\tpublic LocalShopCustomer findById(@PathVariable Long id) {\n\t\treturn svc.findById(id);\n\t}\n\n\t@PutMapping(\"/update\")\n\tpublic LocalShopCustomer update(@RequestBody LocalShopCustomer newProduct) {\n\t\treturn svc.save(newProduct);\n\t}\n\n\t@DeleteMapping(\"/employees/{id}\")\n\tpublic void delete(@PathVariable Long id) {\n\t\tsvc.repo().getProductRepo().deleteById(id);\n\t}\n\n}\n');
    const [productController, setProductController] = useState('package org.java.full.stack.spring.io.controller;\n\nimport java.util.List;\nimport java.util.Set;\n\nimport org.java.full.stack.spring.io.model.LocalShopProduct;\nimport org.java.full.stack.spring.io.service.ProductService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @RestController = @Controller + @ResponseBody\n * @ResponseBody = Serializes JSON response to response body.\n * \n * @author Rupak Kumar...\n *\n */\n@RestController\n@RequestMapping(\"/products\")\npublic class ProductController {\n\n\tLogger logger = LoggerFactory.getLogger(getClass());\n\n\t@Autowired\n\tprivate ProductService productService;\n\n\t@GetMapping(\"\")\n\tpublic List < LocalShopProduct > all() {\n\t\treturn productService.findAll();\n\t}\n\n\t@GetMapping(\"name/{name}\")\n\tpublic Set < LocalShopProduct > findByName(@PathVariable String name) {\n\t\tlogger.info(\"/name->\" + name);\n\t\treturn productService.findByName(name);\n\t}\n\n\t@PostMapping(\"/create\")\n\tpublic LocalShopProduct newEmployee(@RequestBody LocalShopProduct newProduct) {\n\t\tlogger.debug(\"product recvd-->\" + newProduct.getName());\n\t\treturn productService.save(newProduct);\n\t}\n\n\t@GetMapping(\"id/{id}\")\n\tpublic LocalShopProduct findById(@PathVariable Long id) {\n\t\treturn productService.findById(id);\n\t}\n\n\t@PutMapping(\"/update\")\n\tpublic LocalShopProduct update(@RequestBody LocalShopProduct newProduct) {\n\t\treturn productService.save(newProduct);\n\t}\n\n\t@DeleteMapping(\"/{id}\")\n\tpublic void delete(@PathVariable Long id) {\n\t\tproductService.repo().getProductRepo().deleteById(id);\n\t}\n\t@GetMapping(\"/hangapi\")\n\tpublic List < LocalShopProduct > hangapi() {\n\t\tlogger.info(\"this api will take 2 minutes to execute\");\n\t\ttry {\n\t\t\tThread.sleep(120000 L);\n\t\t} catch (InterruptedException e) {\n\t\t\t// TODO Auto-generated catch block\n\t\t\te.printStackTrace();\n\t\t}\n\t\treturn productService.findAll();\n\t}\n}\n');
    const [orderController, setOrderController] = useState('package org.java.full.stack.spring.io.controller;\n\nimport java.util.List;\nimport java.util.Set;\n\nimport org.java.full.stack.spring.io.model.LocalShopOrder;\nimport org.java.full.stack.spring.io.model.LocalShopProduct;\nimport org.java.full.stack.spring.io.service.OrderService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @RestController = @Controller + @ResponseBody\n * @ResponseBody = Serializes JSON response to response body.\n * \n * @author Rupak Kumar...\n *\n */\n@RestController\n@RequestMapping(\"/orders\")\npublic class OrderController {\n\n\tLogger logger = LoggerFactory.getLogger(getClass());\n\n\t@Autowired\n\tprivate OrderService service;\n\n\t@GetMapping(\"\")\n\tpublic List < LocalShopOrder > all() {\n\t\treturn service.findAll();\n\t}\n\n\t@PostMapping(\"/create\")\n\tpublic LocalShopOrder newEmployee(@RequestBody LocalShopOrder newProduct) {\n\t\treturn service.save(newProduct);\n\t}\n\n\t@GetMapping(\"/{id}\")\n\tpublic LocalShopOrder findById(@PathVariable Long id) {\n\t\treturn service.findById(id);\n\t}\n\n\t@PutMapping(\"/update\")\n\tpublic LocalShopOrder update(@RequestBody LocalShopOrder newProduct) {\n\t\treturn service.save(newProduct);\n\t}\n}\n    ');
    const [errorController, setErrorController] = useState('package org.java.full.stack.spring.io.controller;\n\nimport javax.servlet.RequestDispatcher;\nimport javax.servlet.http.HttpServletRequest;\n\nimport org.springframework.boot.web.servlet.error.ErrorController;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class DefaultErrorController implements ErrorController {\n\t@RequestMapping(\"/error\")\n\tpublic String handleError(HttpServletRequest request) {\n\t\tObject status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);\n\n\t\tif (status != null) {\n\t\t\tInteger statusCode = Integer.valueOf(status.toString());\n\n\t\t\tif (statusCode == HttpStatus.NOT_FOUND.value()) {\n\t\t\t\treturn \"error-404\";\n\t\t\t} else if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {\n\t\t\t\treturn \"error-500\";\n\t\t\t}\n\t\t}\n\t\treturn \"default error handler\";\n\t}\n}\n');
    const [cm, setCm] = useState(React.createRef());
    const initial = { currentCode: productController };
    const [state, dispatch] = useReducer(reducer, initial);

    function reducer(state, action) {
        switch (action.type) {
            case 1:
                return { currentCode: productController };
            case 2:
                return { currentCode: customerController };
            case 3:
                return { currentCode: orderController };
            case 4:
                return { currentCode: errorController };
            default:
                throw new Error('Unexpected....');
        }
    }

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode('package org.java.full.stack.spring.io.controller;\n\nimport java.util.List;\nimport java.util.Set;\n\nimport org.java.full.stack.spring.io.model.LocalShopProduct;\nimport org.java.full.stack.spring.io.service.ProductService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @RestController = @Controller + @ResponseBody\n * @ResponseBody = Serializes JSON response to response body.\n * \n * @author Rupak Kumar...\n *\n */\n@RestController\n@RequestMapping(\"/products\")\npublic class ProductController {\n\n\tLogger logger = LoggerFactory.getLogger(getClass());\n\n\t@Autowired\n\tprivate ProductService productService;\n\n\t@GetMapping(\"\")\n\tpublic List < LocalShopProduct > all() {\n\t\treturn productService.findAll();\n\t}\n\n\t@GetMapping(\"name/{name}\")\n\tpublic Set < LocalShopProduct > findByName(@PathVariable String name) {\n\t\tlogger.info(\"/name->\" + name);\n\t\treturn productService.findByName(name);\n\t}\n\n\t@PostMapping(\"/create\")\n\tpublic LocalShopProduct newEmployee(@RequestBody LocalShopProduct newProduct) {\n\t\tlogger.debug(\"product recvd-->\" + newProduct.getName());\n\t\treturn productService.save(newProduct);\n\t}\n\n\t@GetMapping(\"id/{id}\")\n\tpublic LocalShopProduct findById(@PathVariable Long id) {\n\t\treturn productService.findById(id);\n\t}\n\n\t@PutMapping(\"/update\")\n\tpublic LocalShopProduct update(@RequestBody LocalShopProduct newProduct) {\n\t\treturn productService.save(newProduct);\n\t}\n\n\t@DeleteMapping(\"/{id}\")\n\tpublic void delete(@PathVariable Long id) {\n\t\tproductService.repo().getProductRepo().deleteById(id);\n\t}\n\t@GetMapping(\"/hangapi\")\n\tpublic List < LocalShopProduct > hangapi() {\n\t\tlogger.info(\"this api will take 2 minutes to execute\");\n\t\ttry {\n\t\t\tThread.sleep(120000 L);\n\t\t} catch (InterruptedException e) {\n\t\t\t// TODO Auto-generated catch block\n\t\t\te.printStackTrace();\n\t\t}\n\t\treturn productService.findAll();\n\t}\n}\n');
    }, [code, cm]);


    return (
        <div>
            <h6>Spring Controller</h6>
            <p>
                Spring 4.0 introduced the <code>@RestController</code> annotation in order to simplify the creation of
                RESTful web services. It's a convenient annotation that combines <code>@Controller</code> and <code>@ResponseBody</code>,
                which eliminates the need to annotate every request handling method of the controller class with
                the <code>@ResponseBody</code>annotation.
            </p>
            <h6>Click on the controller class to check the code</h6>
            <div className="row">
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 1 })}><h6>@ProductController</h6></a></div>
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 2 })}><h6>@CustomerController</h6></a></div>
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 3 })}><h6>@OrderController</h6></a></div>
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 4 })}><h6>@DefaultErrorController</h6></a></div>
            </div>

            <div className="row border">
                <CodeMirror
                    value={state.currentCode}
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
            <div className="row p-2">
                All source code is available &nbsp;<a href="https://github.com/rkumar-bengaluru/java-full-stack/" target="_blank"> here</a>
            </div>
        </div>
    )
}
export default SpringController;