import { useState } from "react"
import WebSocketContext from "./websocketcontext"
const WebSocketProvider = (props) => {
    
    const[components,setComponents] = useState(
        {
            "types" : [ 
                {"name": "Controller", "code" : "@Controller\npublic class GreetingController {\n\t@MessageMapping(\"/hello\")\n\t@SendTo(\"/topic/greetings\")\n\tpublic Greeting greeting(String message) throws Exception {\n\t\tThread.sleep(1000); // simulated delay\n\t\treturn new Greeting(\"Hello, \" + HtmlUtils.htmlEscape(message.getName()) + \"!\");\n\t}\n}\n"},
                {"name" : "WebSocketConfig", "code" : "@Configuration\n@EnableWebSocketMessageBroker\npublic class WebSocketConfig implements WebSocketMessageBrokerConfigurer {\n\t@Override\n\tpublic void configureMessageBroker(MessageBrokerRegistry config) {\n\t\tconfig.enableSimpleBroker(\"/topic\");\n\t\tconfig.setApplicationDestinationPrefixes(\"/app\");\n\t}\n\n\t@Override\n\tpublic void registerStompEndpoints(StompEndpointRegistry registry) {\n\t\tregistry.addEndpoint(\"/localshop-websocket\").withSockJS();\n\t}\n}\n"},
                {"name" : "Modal", "code" : "public record Greeting(String message) {}"},
                {"name" : "Script", "code" : "var stompClient = null;\n\nfunction setConnected(connected) {\n\t$(\"#connect\").prop(\"disabled\", connected);\n\t$(\"#disconnect\").prop(\"disabled\", !connected);\n\tif (connected) {\n\t\t$(\"#conversation\").show();\n\t} else {\n\t\t$(\"#conversation\").hide();\n\t}\n\t$(\"#greetings\").html(\"\");\n}\n\nfunction connect() {\n\tvar socket = new SockJS('/localshop-websocket');\n\tstompClient = Stomp.over(socket);\n\tstompClient.connect({}, function (frame) {\n\t\tsetConnected(true);\n\t\tconsole.log('Connected: ' + frame);\n\t\tstompClient.subscribe('/topic/greetings', function (greeting) {\n\t\t\tshowGreeting(JSON.parse(greeting.body).content);\n\t\t});\n\t});\n}\n\nfunction disconnect() {\n\tif (stompClient !== null) {\n\t\tstompClient.disconnect();\n\t}\n\tsetConnected(false);\n\tconsole.log(\"Disconnected\");\n}\n\nfunction sendName() {\n\tstompClient.send(\"/app/hello\", {}, JSON.stringify({\n\t\t'name': $(\"#name\").val()\n\t}));\n}\n\nfunction showGreeting(message) {\n\t$(\"#greetings\").append(\"<tr><td>\" + message + \"</td></tr>\");\n}\n\n$(function () {\n\t$(\"form\").on('submit', function (e) {\n\t\te.preventDefault();\n\t});\n\t$(\"#connect\").click(function () {\n\t\tconnect();\n\t});\n\t$(\"#disconnect\").click(function () {\n\t\tdisconnect();\n\t});\n\t$(\"#send\").click(function () {\n\t\tsendName();\n\t});\n});\n"},
                {"name" : "Html", "code" : "<!DOCTYPE html>\n<html>\n <head>\n <title>Hello WebSocket</title>\n <link href=\"/webjars/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n <link href=\"/main.css\" rel=\"stylesheet\">\n <script src=\"/webjars/jquery/jquery.min.js\"></script>\n <script src=\"/webjars/sockjs-client/sockjs.min.js\"></script>\n <script src=\"/webjars/stomp-websocket/stomp.min.js\"></script>\n <script src=\"/app.js\"></script>\n </head>\n <body>\n <noscript>\n <h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript! Websocket relies on Javascript being\n enabled. Please enable\n Javascript and reload this page!\n </h2>\n </noscript>\n <div id=\"main-content\" class=\"container\">\n <div class=\"row\">\n <div class=\"col-md-6\">\n <form class=\"form-inline\">\n <div class=\"form-group\">\n <label for=\"connect\">WebSocket connection:</label>\n <button id=\"connect\" class=\"btn btn-default\" type=\"submit\">Connect</button>\n <button id=\"disconnect\" class=\"btn btn-default\" type=\"submit\" disabled=\"disabled\">Disconnect\n </button>\n </div>\n </form>\n </div>\n <div class=\"col-md-6\">\n <form class=\"form-inline\">\n <div class=\"form-group\">\n <label for=\"name\">What is your name?</label>\n <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Your name here...\">\n </div>\n <button id=\"send\" class=\"btn btn-default\" type=\"submit\">Send</button>\n </form>\n </div>\n </div>\n <div class=\"row\">\n <div class=\"col-md-12\">\n <table id=\"conversation\" class=\"table table-striped\">\n <thead>\n <tr>\n <th>Greetings</th>\n </tr>\n </thead>\n <tbody id=\"greetings\">\n </tbody>\n </table>\n </div>\n </div>\n </div>\n </body>\n</html>\n"}
            ],
            "currentCode" : '@Controller\npublic class GreetingController {\n\t@MessageMapping(\"/hello\")\n\t@SendTo(\"/topic/greetings\")\n\tpublic Greeting greeting(String message) throws Exception {\n\t\tThread.sleep(1000); // simulated delay\n\t\treturn new Greeting(\"Hello, \" + HtmlUtils.htmlEscape(message.getName()) + \"!\");\n\t}\n}\n'
        }
    );

    return (
        <WebSocketContext.Provider value={{
            components: components,
            handleSelectedComponent: cid => {
                var all = {...components};
                var target = all.types.filter(component => component.name === cid);
                all.currentCode = target[0].code;
                setComponents(all);
            }
        }}>
            {props.children}
        </WebSocketContext.Provider>
    )
}
export default WebSocketProvider;