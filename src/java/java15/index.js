import { useEffect, useReducer } from "react";

import Java15HiddenClass from './hidden';
import Java15TextBlock from "./textblock";

const Java15Home = (props) => {
    const initialState = { current: '', prev: '' };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: renderHomePage() }
            case '1':
                return { prev: state.current, current: render01() }
            case '2':
                return { prev: state.current, current: render02() }
            case '3':
                return { prev: state.current, current: render03() }
            case '4':
                return { prev: state.current, current: render04() }
            case '5':
                return { prev: state.current, current: render05() }
            default:
                throw new Error('Unexpected...');
        }
    }

    useEffect(() => {
        dispatch({ type: '0' });
    }, []);

    // case 1
    function render01() {
        return (
            <div>
                <h6>Edwards-Curve Digital Signature Algorithm (EdDSA)</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 2
    function render02() {
        return (
            <div>
                <h6>Hidden Classes</h6>
                <Java15HiddenClass/>
            </div>
        )
    }
    // case 3
    function render03() {
        return (
            <div>
                <h6>A Scalable Low-Latency Garbage Collector</h6>
                <p>Java 11 <a href="https://openjdk.java.net/jeps/333">JEP 333</a> introduced the ZGC garbage collector as an experimental feature.</p>
                <ul>
                    <li>This JEP fixed some bugs, added some features and enhancements, and now supported major platforms like Linux/x86_64, Linux/aarch64, Windows, and macOS.</li>
                    <li>This JEP also changes the Z Garbage Collector from an experimental feature into a product feature. However, the default garbage collector remains G1.</li>
                </ul>
                <code>java -XX:+UseZGC className</code>
            </div>
        )
    }
    // case 4
    function render04() {
        return (
            <div>
                <h6>Text Blocks</h6>
                <Java15TextBlock/>
            </div>
        )
    }
    // case 5
    function render05() {
        return (
            <div>
                <h6>A Low-Pause-Time Garbage Collector</h6>
                <p>Java 12 <a href="https://openjdk.java.net/jeps/189">JEP 189</a> introduced the Shenandoah garbage collector as an experimental feature, and now become a product feature in Java 15.</p>
                <p>Before Java 15, we need -XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC to enable the Shenandoah GC.</p>
                <code>java -XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC</code>
                <p>In Java 15, we only need -XX:+UseShenandoahGC to enable the Shenandoah GC.</p>
                <code>java -XX:+UseShenandoahGC</code>
            </div>
        )
    }

    function renderHomePage() {
        return (
            <div className="">
                <h6>Java 15 Features</h6>
                <ul>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                            Edwards-Curve Digital Signature Algorithm (EdDSA)
                        </a>
                        <p>Cryptography related stuff, Java 15 implements an additional digital signature scheme using the Edwards-Curve Digital Signature Algorithm (EdDSA) as described by RFC 8032. </p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                            Hidden Classes
                        </a>
                        <p>This JEP introduces hidden classes that are not discoverable and have a limited lifecycle (shorter live), good for developers that generate classes dynamically at runtime. And now we can use this new Lookup::defineHiddenClass API to create a hidden class or interface from bytes.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                            A Scalable Low-Latency Garbage Collector
                        </a>
                        <p>Java 11 JEP 333 introduced the ZGC garbage collector as an experimental feature.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                            Text Blocks
                        </a>
                        <p>Finally, the multi-line string or text blocks is a permanent feature in Java 15.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                            A Low-Pause-Time Garbage Collector
                        </a>
                        <p>Java 12 JEP 189 introduced the Shenandoah garbage collector as an experimental feature, and now become a product feature in Java 15.</p>
                    </li>

                </ul>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-sm-3">
                    <ul>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '0' })}>
                                Java 15 Features
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                                Edwards-Curve Digital Signature Algorithm (EdDSA)
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                                Hidden Classes
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                                A Scalable Low-Latency Garbage Collector
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                                Text Blocks
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                                A Low-Pause-Time Garbage Collector
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
export default Java15Home;