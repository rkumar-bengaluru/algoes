import React, { useEffect, useReducer, useState } from "react";
import menus from '../megamenu/megamenu.json';

const Java8Home = (props) => {
    const initial = { current: '', prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: renderHome() };
            case '1':
                return { prev: state.current, current: renderMethodRef() };
            case '2':
                return { prev: state.current, current: renderFunctionalInterface() };
            case '3':
                return { prev: state.current, current: renderDefaultMethods() };
            case '4':
                return { prev: state.current, current: renderBase64EncodeDecode() };
            case '5':
                return { prev: state.current, current: renderDateTime() };
            case '6':
                return { prev: state.current, current: renderOptionalClass() };
            case '7':
                return { prev: state.current, current: renderCollectorClass() };
            case '8':
                return { prev: state.current, current: renderForEach() };
            case '9':
                return { prev: state.current, current: renderParallelArraySort() };
            case '10':
                return { prev: state.current, current: renderFilter() };
            case '11':
                return { prev: state.current, current: renderIO() };
            case '12':
                return { prev: state.current, current: renderConcurency() };
            default:
                throw new Error('Unexpected...');
        }
    }
    useEffect(() => {
        dispatch({ type: '0' });
    }, []);

    // case 0
    function renderHome() {
        return (
            <div>
                <h6>Java 8 Features</h6>
                <p>Oracle released a new version of Java as Java 8 in March 18, 2014. It was a revolutionary release of the Java for software development platform. It includes various upgrades to the Java programming, JVM, Tools and libraries.</p>
                <ul>
                    <li>
                        <a href="/algoes/#/java8/lambda/">
                            Lambda Expression
                        </a>
                        <p>Lambda expression helps us to write our code in functional style. It provides a clear and concise way to implement SAM interface(Single Abstract Method) by using an expression. It is very useful in collection library in which it helps to iterate, filter and extract data.</p>
                    </li>
                    <li>
                        <a href="/algoes/#/java8/stream/">
                            Stream API
                        </a>
                        <p>Java 8 java.util.stream package consists of classes, interfaces and an enum to allow functional-style operations on the elements. It performs lazy computation. So, it executes only when it requires.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                            Method references
                        </a>
                        <p>Lambda expression helps us to write our code in functional style. It provides a clear and concise way to implement SAM interface(Single Abstract Method) by using an expression. It is very useful in collection library in which it helps to iterate, filter and extract data.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                            Functional interfaces
                        </a>
                        <p>An Interface that contains only one abstract method is known as functional interface. It can have any number of default and static methods. It can also declare methods of object class.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                            Default methods
                        </a>
                        <p>Java provides a facility to create default methods inside the interface. Methods which are defined inside the interface and tagged with default keyword are known as default methods. These methods are non-abstract methods and can have method body.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                            Base64 Encode Decode
                        </a>
                        <p>Java provides a class Base64 to deal with encryption and decryption. You need to import java.util.Base64 class in your source file to use its methods.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                            Date/Time API
                        </a>
                        <p>Java has introduced a new Date and Time API since Java 8. The java.time package contains Java 8 Date and Time classes.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                            Optional class
                        </a>
                        <p>Java introduced a new class Optional in Java 8. It is a public final class which is used to deal with NullPointerException in Java application. We must import java.util package to use this class. It provides methods to check the presence of value for particular variable.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
                            Collectors class
                        </a>
                        <p>Collectors is a final class that extends Object class. It provides reduction operations, such as accumulating elements into collections, summarizing elements according to various criteria etc.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '8' })}>
                            ForEach() method
                        </a>
                        <p>Java provides a new method forEach() to iterate the elements. It is defined in Iterable and Stream interfaces.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '9' })}>
                            Parallel array sorting
                        </a>
                        <p>Java provides a new additional feature in Arrays class which is used to sort array elements parallelly. The parallelSort() method has added to java.util.Arrays class that uses the JSR 166 Fork/Join parallelism common pool to provide sorting of arrays. It is an overloaded method.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '10' })}>
                        Stream Filter
                        </a>
                        <p>Java stream provides a method filter() to filter stream elements on the basis of given predicate. Suppose, you want to get only even elements of your list, you can do this easily with the help of filter() method.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '11' })}>
                            IO Enhancements
                        </a>
                        <p>In Java 8, there are several improvements to the java.nio.charset.Charset and extended charset implementations. It includes the following:</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '12' })}>
                            Concurrency Enhancements
                        </a>
                        <p>The java.util.concurrent package added two new interfaces and four new classes.</p>
                    </li>
                </ul>

            </div>
        )
    }
    // case 1
    function renderMethodRef() {
        return (
            <div>
                <h6>Method Reference</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 2
    function renderFunctionalInterface() {
        return (
            <div>
                <h6>Functional interfaces</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 3
    function renderDefaultMethods() {
        return (
            <div>
                <h6>Default Methods</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 4
    function renderBase64EncodeDecode() {
        return (
            <div>
                <h6>Base64 Encode Decode</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 5
    function renderDateTime() {
        return (
            <div>
                <h6>Date/Time API</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 6
    function renderOptionalClass() {
        return (
            <div>
                <h6>Optional Class</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 7
    function renderCollectorClass() {
        return (
            <div>
                <h6>Collector Class</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 8
    function renderForEach() {
        return (
            <div>
                <h6>forEach()</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 9
    function renderParallelArraySort() {
        return (
            <div>
                <h6>Parallel Array Sort</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 10
    function renderFilter() {
        return (
            <div>
                <h6>Stream Filter</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 11
    function renderIO() {
        return (
            <div>
                <h6>IO Enhancements</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 12
    function renderConcurency() {
        return (
            <div>
                <h6>Concurrency Enhancements</h6>
                <div>TODO</div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-sm-3">
                    <ul>
                        <li>
                            <a href="javascript:void(0)" onClick={() => { dispatch({ type: "0" }) }}>
                                Java 8 Features
                            </a>
                        </li>
                        <li>
                            <a href="/algoes/#/java8/lambda/">
                                Lambda Expression
                            </a>
                        </li>
                        <li>
                            <a href="/algoes/#/java8/stream/">
                                Stream API
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '1' })}>
                                Method references
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '2' })}>
                                Functional interfaces
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '3' })}>
                                Default methods
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '4' })}>
                                Base64 Encode Decode
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '5' })}>
                                Date/Time API
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                                Optional class
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
                                Collectors class
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '8' })}>
                                ForEach() method
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '9' })}>
                                Parallel array sorting
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '10' })}>
                            Stream Filter
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '11' })}>
                                IO Enhancements
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '12' })}>
                                Concurrency Enhancements
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
export default Java8Home;