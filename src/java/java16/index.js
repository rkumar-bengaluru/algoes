import { useReducer, useEffect } from 'react';
import Java16VectorApi from './j16vectorapi';
import Java16LinkerApi from './j16linkerapi';
import Java16ForeignMemoryApi from './j16memoryapi';
import Java16SealedInterface from './j16sealed';
import Java16RecordClass from './j16record';
import J16ValueBased from './j16valuebased';
import J16PatternMatch from './j16patternmatch';
const Java16Home = (props) => {
    const initialState = { current: '', prev: '' };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: renderHome() }
            case '1':
                return { prev: state.current, current: renderVectorApi() }
            case '2':
                return { prev: state.current, current: renderCPP() }
            case '3':
                return { prev: state.current, current: renderThreadStack() }
            case '4':
                return { prev: state.current, current: renderElastic() }
            case '5':
                return { prev: state.current, current: renderValueBasedClasses() }
            case '6':
                return { prev: state.current, current: renderForreignMemoryApi() }
            case '7':
                return { prev: state.current, current: renderForeignLinkerApi() }
            case '8':
                return { prev: state.current, current: renderPatternMatching() }
            case '9':
                return { prev: state.current, current: renderRecords() }
            case '10':
                return { prev: state.current, current: renderSealed() }
            case '11':
                return { prev: state.current, current: renderJdkEncapsulate() }
            default:
                throw new Error('Unexpected...');
        }
    }

    useEffect(() => {
        dispatch({ type: '0' });
    }, []);

    // case 1
    function renderVectorApi() {
        return (
            <div>
                <Java16VectorApi/>
            </div>
        )
    }
    // case 2
    function renderCPP() {
        return (
            <div>
                <h6>Enable C++14 Language Features</h6>
                <p>This JEP allows the [C++ 14 features]((https://en.wikipedia.org/wiki/C%2B%2B14) to be used in the C++ source code within the JDK.</p>
                <p>This feature has no programming API implication for java developers.</p>
            </div>
        )
    }
    // case 3
    function renderThreadStack() {
        return (
            <div>
                <h6>Concurrent Thread-Stack Processing</h6>
                <p>This JEP improves the Z Garbage Collector (ZGC) by moving the ZGC thread-stack processing from safepoints to a concurrent phase.</p>
                <h7>History</h7>
                <ul>
                    <li>Java 11 <a href="https://openjdk.java.net/jeps/333" target="_blank">JEP 333 </a>introduced the Z Garbage Collector (ZGC) as a experimental garbage collector.</li>
                    <li>Java 15 <a href="https://openjdk.java.net/jeps/377" target="_blank">JEP 377</a>, the ZGC became a product feature.</li>
                </ul>
                <p>This feature has no programming API implication for java developers.</p>
            </div>
        )
    }
    // case 4
    function renderElastic() {
        return (
            <div>
                <h6>Elastic Metaspace</h6>
                <p>Java 8 <a href="https://openjdk.java.net/jeps/122" target="_blank">JEP 122</a> removed the PermGen (Permanent Generation), and introduced Metaspace, a native off-heap memory manager in the hotspot.</p>
                <p>This JEP improves the metaspace memory management by returning unused HotSpot class-metadata or metaspace memory to the operating system more promptly, reducing the metaspace footprint, and simplifying the metaspace code.</p>
                <p>This feature has no programming API implication for java developers.</p>
            </div>
        )
    }
    // case 5
    function renderValueBasedClasses() {
        return (
            <div>
                <J16ValueBased/>
            </div>
        )
    }
    // case 6
    function renderForreignMemoryApi() {
        return (
            <div>
                <Java16ForeignMemoryApi/>
            </div>
        )
    }
    // case 7
    function renderForeignLinkerApi() {
        return (
            <div>
                <Java16LinkerApi/>
            </div>
        )
    }
    // case 8
    function renderPatternMatching() {
        return (
            <div>
                <J16PatternMatch/>
            </div>
        )
    }
    // case 9
    function renderRecords() {
        return (
            <div>
                <h6>Records</h6>
                <Java16RecordClass/>
            </div>
        )
    }
    // case 10
    function renderSealed() {
        return (
            <div>
                <h6>Sealed Classes (Second Preview)</h6>
                <Java16SealedInterface/>
            </div>
        )
    }
    // case 11
    function renderJdkEncapsulate() {
        return (
            <div>
                <h6>Encapsulating JDK Internals by default</h6>
                <p>Java 9 <a href="https://openjdk.java.net/jeps/261" target="_blank">JEP 261</a> introduced the --illegal-access option to control the access of the internal APIs and packaged of the JDK.</p>
                <p>This JEP change the default mode of --illegal-access option from permit to deny. With this change, the internal packages and APIs (except the critical internal APIs) of the JDK will no longer open by default.</p>
                <p>This JEP’s motivation is to discourage the third-party libraries, frameworks, and tools from using the internal APIs and packages of the JDK.</p>
            </div>
        )
    }

    function renderHome() {
        return (
            <div className="">
                <h6>Java 16 Features</h6>
                <p>Oracle announced the availability of Java 16 (JDK 16) with 17 new enhancements to the platform. This latest Java Development Kit release comes with language enhancements, new tools, and improved memory management to improve developer productivity and flexibility.</p>
                <ul>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '1' })}>
                            Vector API (Incubator)
                        </a>
                        <p>Java supports auto vectorization to optimize the arithmetic algorithms, which means the Java (JIT compiler) will transform some scalar operations (one item at a time) into vector operations (multiple items at a time) automatically; However, the developers have no control of this vector operation conversion, it totally depends on the JIT compiler to optimize the code, furthermore, not all scalar operations are transformable.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '2' })}>
                            Enable C++14 Language Features
                        </a>
                        <p>This JEP allows the [C++ 14 features]((https://en.wikipedia.org/wiki/C%2B%2B14) to be used in the C++ source code within the JDK.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '3' })}>
                            Concurrent Thread-Stack Processing
                        </a>
                        <p>This JEP improves the Z Garbage Collector (ZGC) by moving the ZGC thread-stack processing from safepoints to a concurrent phase.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '4' })}>
                            Elastic Metaspace
                        </a>
                        <p>Java 8 JEP 122 removed the PermGen (Permanent Generation), and introduced Metaspace, a native off-heap memory manager in the hotspot.
                            This JEP improves the metaspace memory management by returning unused HotSpot class-metadata or metaspace memory to the operating system more promptly, reducing the metaspace footprint, and simplifying the metaspace code.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '5' })}>
                            Warnings for Value-Based Classes
                        </a>
                        <p>This JEP provides a new warning if we synchronize instances of value-based classes; Also deprecating the primitive wrapper class (value-based) constructors for removal.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '6' })}>
                            Foreign-Memory Access API (Third Incubator)
                        </a>
                        <p>The Foreign-Memory Access APIs allow Java API to access the foreign memory outside of the Java heap, such as memcached, Lucene, etc.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '7' })}>
                            Foreign Linker API (Incubator)
                        </a>
                        <p>This JEP enables Java code to call or can be called by native code written in other languages like C or C++, replace Java Native Interface (JNI)</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '8' })}>
                            Pattern Matching for instanceof
                        </a>
                        <p>The pattern matching for instanceof is a standard or product feature in Java 16.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '9' })}>
                            Records 
                        </a>
                        <p>The record is finalized and becomes a standard feature.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '10' })}>
                            Sealed Classes (Second Preview)
                        </a>
                        <p>Java 15 JEP 360 introduced sealed classes and interfaces to restrict which class can extend or implement them. This JEP is the second preview with some improvements.</p>
                    </li>
                    <li>
                        <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '11' })}>
                            Encapsulating JDK Internals by default
                        </a>
                        <p>Java 9 JEP 261 introduced the --illegal-access option to control the access of the internal APIs and packaged of the JDK.</p>
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
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '0' })}>
                                Java 16 Features
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '1' })}>
                                Vector API (Incubator)
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '2' })}>
                                Enable C++14 Language Features
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '3' })}>
                                Concurrent Thread-Stack Processing
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '4' })}>
                                Elastic Metaspace
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '5' })}>
                                Warnings for Value-Based Classes
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '6' })}>
                                Foreign-Memory Access API (Third Incubator)
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '7' })}>
                                Foreign Linker API (Incubator)
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '8' })}>
                                Pattern Matching for instanceof
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '9' })}>
                                Records
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '10' })}>
                                Sealed Classes (Second Preview)
                            </a>
                        </li>
                        <li>
                            <a href={"javascript:void(0)"} onClick={() => dispatch({ type: '11' })}>
                                Encapsulating JDK Internals by default
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
export default Java16Home;