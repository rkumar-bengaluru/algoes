import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11KeyGen = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java11;\n\nimport java.security.InvalidAlgorithmParameterException;\nimport java.security.KeyPair;\nimport java.security.KeyPairGenerator;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.PrivateKey;\nimport java.security.PublicKey;\nimport java.security.spec.NamedParameterSpec;\n\n/**\n * It replaced the existing elliptic curve Diffie-Hellman (ECDH) scheme with\n * Curve25519 and Curve448 algorithms, a key agreement scheme defined in RFC\n * 7748\n * \n * @author Rupak Kumar...\n *\n */\npublic class J11KeyAgrJEP324 {\n\n\t/**\n\t * @param args\n\t */\n\tpublic static void main(String[] args) {\n\t\ttry {\n\t\t\tKeyPairGenerator kpg = KeyPairGenerator.getInstance(\"X25519\");\n\t\t\tKeyPair kp = kpg.generateKeyPair();\n\n\t\t\tSystem.out.println(\"--- Public Key ---\");\n\t\t\tPublicKey publicKey = kp.getPublic();\n\n\t\t\tSystem.out.println(publicKey.getAlgorithm()); // XDH\n\t\t\tSystem.out.println(publicKey.getFormat()); // X.509\n\n\t\t\t// save this public key\n\t\t\tbyte[] pubKey = publicKey.getEncoded();\n\n\t\t\tSystem.out.println(\"---\");\n\n\t\t\tSystem.out.println(\"--- Private Key ---\");\n\t\t\tPrivateKey privateKey = kp.getPrivate();\n\n\t\t\tSystem.out.println(privateKey.getAlgorithm()); // XDH\n\t\t\tSystem.out.println(privateKey.getFormat()); // PKCS#8\n\n\t\t\t// save this private key\n\t\t\tbyte[] priKey = privateKey.getEncoded();\n\n\t\t} catch (NoSuchAlgorithmException e) {\n\t\t\te.printStackTrace();\n\t\t}\n\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Key Agreement with Curve25519 and Curve448</h6>
            <p>Java Cryptography related item. It replaced the existing elliptic curve Diffie-Hellman (ECDH) scheme with Curve25519 and Curve448 algorithms, a key agreement scheme defined in RFC 7748.</p>
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
export default J11KeyGen;