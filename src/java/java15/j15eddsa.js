import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J15EDSA = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java15;\n\nimport java.nio.charset.StandardCharsets;\nimport java.security.InvalidKeyException;\nimport java.security.KeyPair;\nimport java.security.KeyPairGenerator;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.Signature;\nimport java.security.SignatureException;\nimport java.util.Base64;\n\n/**\n * Java 15 implements an additional digital signature scheme using the\n * Edwards-Curve Digital Signature Algorithm (EdDSA) as described by RFC 8032.\n * The EdDSA signature scheme is popular due to its improved security and\n * performance (faster) over other signature schemes, and it is also one of the\n * signatures schemes that are allowed in TLS 1.3\n * \n * @author Rupak Kumar...\n */\npublic class J15EdDSAJEP339 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\ttry {\n\t\t\tKeyPairGenerator kpg = KeyPairGenerator.getInstance(\"Ed25519\");\n\t\t\tKeyPair kp = kpg.generateKeyPair();\n\n\t\t\tbyte[] msg = \"Rupak Kumar...\".getBytes(StandardCharsets.UTF_8);\n\n\t\t\tSignature sig = Signature.getInstance(\"Ed25519\");\n\t\t\tsig.initSign(kp.getPrivate());\n\t\t\tsig.update(msg);\n\t\t\tbyte[] s = sig.sign();\n\n\t\t\tSystem.out.println(Base64.getEncoder().encodeToString(s));\n\t\t} catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException e) {\n\t\t\te.printStackTrace();\n\t\t}\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Edwards-Curve Digital Signature Algorithm (EdDSA)</h6>
            <p>Cryptography related stuff, Java 15 implements an additional digital signature scheme using the Edwards-Curve Digital Signature Algorithm (EdDSA) as described by RFC 8032.</p>
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
export default J15EDSA;