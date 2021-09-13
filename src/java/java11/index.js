import { useEffect, useReducer } from "react";

const Java11Home = (props) => {
    const java11State = { current: '', prev: '' };
    const [state, dispatch] = useReducer(java11Reducer, java11State);

    function java11Reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: renderJava11HomePage() };
            case '1':
                return { prev: state.current, current: render01() };
            case '2':
                return { prev: state.current, current: render02() };
            case '3':
                return { prev: state.current, current: render03() };
            case '4':
                return { prev: state.current, current: render04() };
            case '5':
                return { prev: state.current, current: render05() };
            case '6':
                return { prev: state.current, current: render06() };
            case '7':
                return { prev: state.current, current: render07() };
            case '8':
                return { prev: state.current, current: render08() };
            case '9':
                return { prev: state.current, current: render09() };
            case '10':
                return { prev: state.current, current: render10() };
            default:
                throw new Error('Unexpected...');
        }
    }

    useEffect(() => {
        dispatch({ type: '0' });
    }, []);

    function render01() {
        return (
            <div>
                <h6>Nest-Based Access Control</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render02() {
        return (
            <div>
                <h6>Dynamic Class-File Constants</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render03() {
        return (
            <div>
                <h6>HTTP Client (Standard)</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render04() {
        return (
            <div>
                <h6>Local-Variable Syntax for Lambda Parameters</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render05() {
        return (
            <div>
                <h6>Key Agreement with Curve25519 and Curve448</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render06() {
        return (
            <div>
                <h6>Unicode 10</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render07() {
        return (
            <div>
                <h6>Flight Recorder</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render08() {
        return (
            <div>
                <h6>ChaCha20 and Poly1305 Cryptographic Algorithms</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render09() {
        return (
            <div>
                <h6>Launch Single-File Source-Code Programs</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render10() {
        return (
            <div>
                <h6>A Scalable Low-Latency Garbage Collector (Experimental)</h6>
                <div>TODO</div>
            </div>
        )
    }


    function renderJava11HomePage() {
        return (
            <div>
                <h6>Java 11 Features</h6>
                <p>Java 11 reached General Availability on 25 September 2018, this is a Long Term Support (LTS) version, download Java 11 <a href="https://jdk.java.net/java-se-ri/11" target="_blank"> here</a> or this openJDK archived.</p>
                <ul>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                            Nest-Based Access Control
                        </a>
                        <p>It supports private access within nest members directly, no more via an auto-generated bridge method access$000. Furthermore, new nested APIs for validation and allowed private reflection access within nest members.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                            Dynamic Class-File Constants
                        </a>
                        <p>Extends class-file format to support a new constant-pool form, CONSTANT_Dynamic, target language designers and compiler implementors.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                            HTTP Client (Standard)
                        </a>
                        <p>This HTTP Client API, in the java.net.http package was introduced in Java 9, updated in Java 10, now a standard feature in Java 11.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                            Local-Variable Syntax for Lambda Parameters
                        </a>
                        <p>This JEP adds support for the var keyword in lambda parameters.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                            Key Agreement with Curve25519 and Curve448
                        </a>
                        <p>Java Cryptography related item. It replaced the existing elliptic curve Diffie-Hellman (ECDH) scheme with Curve25519 and Curve448 algorithms, a key agreement scheme defined in RFC 7748.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                            Unicode 10
                        </a>
                        <p>It means more code points, more emoji icons 🙂 The below example prints a Unicode code point.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
                            Flight Recorder
                        </a>
                        <p>Java Flight Recorder (JFR) was a commercial product in Oracle JDK, now it is open source in OpenJDK 11. This JFR is a profiling tool that used to diagnose a running Java application. The below command starts a 60 seconds JFR recording on a Java application, dumps the recorded data into a ‘.jfr’ file.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '8' })}>
                            ChaCha20 and Poly1305 Cryptographic Algorithms
                        </a>
                        <p>ChaCha20 is a high-speed stream cipher, an encryption and decryption algorithm. ChaCha20-Poly1305 means ChaCha20 running in AEAD mode with the Poly1305 authenticator, encryption and authentication together, both are defined in RFC 7539. This JEP update of ChaCha20 cryptographic algorithms is a replacement for the insecure RC4 stream cipher.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '9' })}>
                            Launch Single-File Source-Code Programs
                        </a>
                        <p>This Single-File Source-Code Program means the entire Java program in a single source code .java file. This JEP is a friendly feature in the early stage of learning Java, but not much benefit in Java development, we all use IDE.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '10' })}>
                            A Scalable Low-Latency Garbage Collector (Experimental)
                        </a>
                        <p>The Z Garbage Collector (ZGC) is an experimental garbage collector; it has low pause times not exceed 10ms. This ZCG support only on Linux/64.</p>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-sm-3">
                    <ul>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '0' })}>
                                Java 11 Features
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                                Nest-Based Access Control
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                                Dynamic Class-File Constants
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                                HTTP Client (Standard)
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                                Local-Variable Syntax for Lambda Parameters
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                                Key Agreement with Curve25519 and Curve448
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                                Unicode 10
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
                                Flight Recorder
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '8' })}>
                                ChaCha20 and Poly1305 Cryptographic Algorithms
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '9' })}>
                                Launch Single-File Source-Code Programs
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '10' })}>
                                A Scalable Low-Latency Garbage Collector (Experimental)
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    {state.current}
                </div>
            </div>
        </div>
    )
}
export default Java11Home;