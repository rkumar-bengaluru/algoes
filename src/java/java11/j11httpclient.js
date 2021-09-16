import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11HttpClient = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpHeaders;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.time.Duration;\n\n/**\n * This HTTP Client API, in the java.net.http package was introduced in Java 9,\n * updated in Java 10, now a standard feature in Java 11\n * \n * @author Rupak Kumar...\n */\npublic class J11HTTPClientJEP321 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\tHttpClient httpClient = HttpClient.newBuilder().version(HttpClient.Version.HTTP_1_1)\n\t\t\t.connectTimeout(Duration.ofSeconds(10)).build();\n\t\tHttpRequest request = HttpRequest.newBuilder().GET().uri(URI.create(\"https://www.vlocalshop.in\"))\n\t\t\t.setHeader(\"User-Agent\", \"Java 11 HttpClient Bot\").build();\n\t\tHttpResponse < String > response = null;\n\t\ttry {\n\t\t\tresponse = httpClient.send(request, HttpResponse.BodyHandlers.ofString());\n\t\t} catch (IOException | InterruptedException e) {\n\t\t\te.printStackTrace();\n\t\t}\n\n\t\tHttpHeaders headers = response.headers();\n\t\theaders.map().forEach((k, v) - > System.out.println(k + \":\" + v));\n\n\t\tSystem.out.println(response.statusCode());\n\t\tSystem.out.println(response.body());\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>HTTP Client (Standard)</h6>
            <p>This HTTP Client API, in the java.net.http package was introduced in Java 9, updated in Java 10, now a standard feature in Java 11.</p>
            <div className="row p-2">
                <CodeMirror
                    value={code}
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
export default J11HttpClient;