import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J11ChaCha20 = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("/**\n * \n */\npackage org.java.full.stack.java11;\n\nimport java.security.InvalidAlgorithmParameterException;\nimport java.security.InvalidKeyException;\nimport java.security.NoSuchAlgorithmException;\n\nimport javax.crypto.BadPaddingException;\nimport javax.crypto.Cipher;\nimport javax.crypto.IllegalBlockSizeException;\nimport javax.crypto.NoSuchPaddingException;\nimport javax.crypto.SecretKey;\nimport javax.crypto.spec.ChaCha20ParameterSpec;\n\n/**\n * ChaCha20 is a high-speed stream cipher, an encryption and decryption \n * algorithm. ChaCha20-Poly1305 means ChaCha20 running in AEAD mode \n * with the Poly1305 authenticator, encryption and authentication \n * together, both are defined in RFC 7539. This JEP update of \n * ChaCha20 cryptographic algorithms is a replacement for the \n * insecure RC4 stream cipher.\n * \n * The inputs to ChaCha20 are:\n * \t- A 256-bit secret key (32 bytes)\n * - A 96-bit nonce (12 bytes)\n * - A 32-bit initial count (4 bytes)\n * \n * @author Rupak Kumar...\n */\npublic class J11ChaCha20JEP329 {\n\n\tpublic static byte[] encrypt(byte[] nonce,\n\t\tint counter,\n\t\tSecretKey key,\n\t\tString textToEncrypt)\n\tthrows NoSuchAlgorithmException,\n\tNoSuchPaddingException,\n\tInvalidKeyException,\n\tInvalidAlgorithmParameterException,\n\tIllegalBlockSizeException,\n\tBadPaddingException {\n\t\tCipher cipher = Cipher.getInstance(\"ChaCha20\");\n\t\tChaCha20ParameterSpec param = new ChaCha20ParameterSpec(nonce, counter);\n\t\tcipher.init(Cipher.ENCRYPT_MODE, key, param);\n\t\tbyte[] encryptedText = cipher.doFinal(textToEncrypt.getBytes());\n\t\treturn encryptedText;\n\t}\n\n\tpublic static byte[] decrypt(byte[] nonce,\n\t\tint counter,\n\t\tSecretKey key,\n\t\tbyte[] toDecrypt)\n\tthrows NoSuchAlgorithmException,\n\tNoSuchPaddingException,\n\tInvalidKeyException,\n\tInvalidAlgorithmParameterException,\n\tIllegalBlockSizeException,\n\tBadPaddingException {\n\t\tCipher cipher = Cipher.getInstance(\"ChaCha20\");\n\t\tChaCha20ParameterSpec param = new ChaCha20ParameterSpec(nonce, counter);\n\t\tcipher.init(Cipher.DECRYPT_MODE, key, param);\n\t\tbyte[] decrypted = cipher.doFinal(toDecrypt);\n\t\treturn decrypted;\n\t}\n\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>ChaCha20 and Poly1305 Cryptographic Algorithms</h6>
            <p>ChaCha20 is a high-speed stream cipher, an encryption and decryption algorithm. ChaCha20-Poly1305 means ChaCha20 running in AEAD mode with the Poly1305 authenticator, encryption and authentication together, both are defined in RFC 7539. This JEP update of ChaCha20 cryptographic algorithms is a replacement for the insecure RC4 stream cipher.</p>
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
export default J11ChaCha20;