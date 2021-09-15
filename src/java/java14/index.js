import { useEffect, useReducer } from "react";
import Java14RecordClass from './record';

const Java14Home = (props) => {
    const java14State = { prev: '', current: '' };
    const [state, dispatch] = useReducer(java14Reducer, java14State);

    function java14Reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: renderHomePage() };
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
                <h6>NUMA-Aware Memory Allocation for G1</h6>
                <div>TODO</div>
            </div>
        )
    }
    function render02() {
        return (
            <div>
                <h6>JFR Event Streaming</h6>
                <div>TODO</div>
            </div>
        )
    }
    function render03() {
        return (
            <div>
                <h6> Non-Volatile Mapped Byte Buffers</h6>
                <div>TODO</div>
            </div>
        )
    }
    function render04() {
        return (
            <div>
                <h6>Helpful NullPointerExceptions</h6>
                <div>TODO</div>
            </div>
        )
    }
    function render05() {
        return (
            <div>
                <h6>Switch Expressions (Standard)</h6>
                <div>TODO</div>
            </div>
        )
    }

    function render06() {
        return (
            <div>
                <h6>Record (Preview)</h6>
                <Java14RecordClass/>
            </div>
        )
    }
    function renderHomePage() {
        return (
            <div>
                <h6>Java 14 Features</h6>
                <p>Java 14 reached General Availability on 17 March 2020, download <a target="__blank" href="https://jdk.java.net/14/">Java 14 here.</a></p>
                <ul>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                            NUMA-Aware Memory Allocation for G1
                        </a>
                        <p>New NUMA-aware memory allocation mode, improves the G1 performance on large machines. Add +XX:+UseNUMA option to enable it.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                            JFR Event Streaming
                        </a>
                        <p>Improved the existing JFR to support event streaming, it means now we can stream the JFR events in real-time, without the need to dump the recorded events to disk and parse it manually.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                            Non-Volatile Mapped Byte Buffers
                        </a>
                        <p>Improved FileChannel API to create MappedByteBuffer that access to non-volatile memory (NVM) – a memory that can retrieve stored data even after having been power cycled. For example, this feature ensures that any changes which might still be in the cache are written back to memory.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                            Helpful NullPointerExceptions
                        </a>
                        <p>Improved the description of NullPointerExceptions by telling which variable was null. Add -XX:+ShowCodeDetailsInExceptionMessages option to enable this feature.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                            Switch Expressions (Standard)
                        </a>
                        <p>The switch expression was a preview feature in Java 12 and Java 13; now it is officially JDK standard feature, it means from Java 14 and onward, we can return value via switch expressions without specifying the --enable-preview option.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                            Record (Preview)
                        </a>
                        <p>A new class called record (aka data class), it is a final class, not abstract, and all of its fields are final as well. The record will automatically generate the tedious constructors, public get, equals(), hashCode(), toString() during compile time.</p>
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
                                Java 14 Features
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                                NUMA-Aware Memory Allocation for G1
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                                JFR Event Streaming
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                                Non-Volatile Mapped Byte Buffers
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                                Helpful NullPointerExceptions
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                                Switch Expressions (Standard)
                            </a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                            Record (Preview)
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
export default Java14Home;