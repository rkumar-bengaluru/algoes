import { useEffect, useReducer, useState } from "react";

import J9Anonymous from "./j9anonymous";
import J9Factory from "./j9factory";
import J9PrivateInterface from "./j9privateinterface";
import J9Process from "./j9process";
import J9SafeVar from "./j9safevar";
import J9Stream from "./j9stream";
import J9TryResource from "./j9tryresource";

const Java9Home = (props) => {

    const initialState = { current: '' };

    const [state, dispath] = useReducer(reducer, initialState);

    useEffect(() => {
        dispath({ type: '0' });
    }, []);

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { current: renderJava9Features() }
            case '1':
                return { current: renderPlatformModuleSystem() }
            case '2':
                return { current: renderInterfacePrivateMethod() }
            case '3':
                return { current: renderTryResouces() }
            case '4':
                return { current: renderAnonymous() }
            case '5':
                return { current: renderSafeVarargs() }
            case '6':
                return { current: renderCollectionFactory() }
            case '7':
                return { current: renderProcessApi() }
            case '8':
                return { current: renderVersionString() }
            case '9':
                return { current: renderJShell() }
            case '10':
                return { current: renderControlPanel() }
            case '11':
                return { current: renderStreamApi() }
            default:
                throw new Error('Unexpection action');
        }
    }
    // case 1
    function renderPlatformModuleSystem() {
        return (
            <div className="container">
                <h6>Platform Module System</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 2
    function renderInterfacePrivateMethod() {
        return (
            <div className="container">
                <J9PrivateInterface/>
            </div>
        )
    }
    // case 3
    function renderTryResouces() {
        return (
            <div className="container">
                <J9TryResource/>
            </div>
        )
    }
    // case 4
    function renderAnonymous() {
        return (
            <div className="container">
                <J9Anonymous/>
            </div>
        )
    }
    // case 5
    function renderSafeVarargs() {
        return (
            <div className="container">
                <J9SafeVar/>
            </div>
        )
    }
    // case 6
    function renderCollectionFactory() {
        return (
            <div className="container">
                <J9Factory/>
            </div>
        )
    }
    // case 7
    function renderProcessApi() {
        return (
            <div className="container">
                <J9Process/>
            </div>
        )
    }
    // case 8
    function renderVersionString() {
        return (
            <div className="container">
                <h6>Java New Version-String Scheme</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 9
    function renderJShell() {
        return (
            <div className="container">
                <h6>JShell: The Java Shell (REPL)</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 10
    function renderControlPanel() {
        return (
            <div className="container">
                <h6>Java 9 Control Panel</h6>
                <div>TODO</div>
            </div>
        )
    }
    // case 11
    function renderStreamApi() {
        return (
            <div className="container">
                <J9Stream/>
            </div>
        )
    }
    function renderJava9Features() {
        return (
            <div className="container">
                <h6>Java 9 Features</h6>
                <p>Oracle has released Java 9 with rich set of new features. It includes various
                    upgrades to the Java programming, JVM, Tools and libraries.
                    We will discuss all the main features that are given below.</p>
                <ul>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '1' })}>
                            Platform Module System (Project Jigsaw)
                        </a>
                        <p>It is a new kind of Java programing component that can be used to collect Java code (classes and packages). The main goal of this project is to easily scale down application to small devices. In Java 9, JDK itself has divided into set of modules to make it more lightweight. It also allows us to develop modular applications.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '2' })}>
                            Interface Private Methods
                        </a>
                        <p>In Java 9, we can create private methods inside an interface. Interface allows us to declare private methods that help to share common code between non-abstract methods.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '3' })}>
                            Try With Resouces
                        </a>
                        <p>In Java 7, try-with-resources has a limitation that requires resource to declare locally within its block.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '4' })}>
                            Anonymous Classes Improvement
                        </a>
                        <p>Java 9 introduced a new feature that allows us to use diamond operator with anonymous classes. Using the diamond with anonymous classes was not allowed in Java 7.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '5' })}>
                            Java @SafeVarargs Annotation
                        </a>
                        <p>It is an annotation which applies on a method or constructor that takes varargs parameters. It is used to ensure that the method does not perform unsafe operations on its varargs parameters.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '6' })}>
                            Java Collection Factory Methods
                        </a>
                        <p>Factory methods are special type of static methods that are used to create unmodifiable instances of collections. It means we can use these methods to create list, set and map of small number of elements.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '7' })}>
                            Java Process API Improvement
                        </a>
                        <p>Java has improved its process API in Java 9 version that helps to manage and control operating system processes.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '8' })}>
                            Java New Version-String Scheme
                        </a>
                        <p>Java version-string is a format that contains version specific information. This version-string consists of major, minor, security and patch update releases.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '9' })}>
                            JShell: The Java Shell (REPL)
                        </a>
                        <p>It is an interactive Java Shell tool, it allows us to execute Java code from the shell and shows output immediately. JShell is a REPL (Read Evaluate Print Loop) tool and run from the command line. It is benificial, if we want to test our business logic and get result immediately</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '10' })}>
                            Java 9 Control Panel
                        </a>
                        <p>Java control panel is used to control Java applications that are embedded in browser. This control panel maintains the settings that manage Java application embedded in browser.</p>
                    </li>
                    <li>
                        <a href='javascript:void(0)' onClick={() => dispath({ type: '11' })}>
                            Java 9 Stream API Improvement
                        </a>
                        <p>In Java 9, Stream API has improved and new methods are added to the Stream interface</p>
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
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '0' })}>
                                Java 9 Features
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '1' })}>
                                Platform Module System (Project Jigsaw)
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '2' })}>
                                Interface Private Methods
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '3' })}>
                                Try With Resouces
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '4' })}>
                                Anonymous Classes Improvement
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '5' })}>
                                Java @SafeVarargs Annotation
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '6' })}>
                                Java Collection Factory Methods
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '7' })}>
                                Java Process API Improvement
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '8' })}>
                                Java New Version-String Scheme
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '9' })}>
                                JShell: The Java Shell (REPL)
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '10' })}>
                                Java 9 Control Panel
                            </a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' onClick={() => dispath({ type: '11' })}>
                                Java 9 Stream API Improvement
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    <div>{state.current}</div>
                </div>
            </div>
        </div>
    )
}
export default Java9Home;