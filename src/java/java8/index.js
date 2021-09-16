import React, { useEffect, useReducer, useState } from "react";
import menus from '../../megamenu/megamenu.json';
import J8Lambda from "./j8lambda";
import J8Functional from "./j8functional";
import J8MethodRef from "./j8methodref";
import J8Optional from "./j8optional";
import Java8Stream from "./j8stream";
import J9PrivateInterface from '../java9/j9privateinterface';
import Java15HiddenClass from '../java15/j15hidden';
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
                return { prev: state.current, current: renderOptionalClass() };
                case '6':
                return { prev: state.current, current: renderLambda() };
                case '7':
                return { prev: state.current, current: renderStream() };
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
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                            Lambda Expression
                        </a>
                        <p>Lambda expression helps us to write our code in functional style. It provides a clear and concise way to implement SAM interface(Single Abstract Method) by using an expression. It is very useful in collection library in which it helps to iterate, filter and extract data.</p>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
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
                            Optional class
                        </a>
                        <p>Java introduced a new class Optional in Java 8. It is a public final class which is used to deal with NullPointerException in Java application. We must import java.util package to use this class. It provides methods to check the presence of value for particular variable.</p>
                    </li>
                </ul>

            </div>
        )
    }
    // case 1
    function renderMethodRef() {
        return (
            <div>
                <J8MethodRef/>
            </div>
        )
    }
    // case 2
    function renderFunctionalInterface() {
        return (
            <div>
                <J8Functional/>
            </div>
        )
    }
    // case 3
    function renderDefaultMethods() {
        return (
            <div>
                <J9PrivateInterface/>
            </div>
        )
    }
    // case 4
    function renderBase64EncodeDecode() {
        return (
            <div>
                <Java15HiddenClass/>
            </div>
        )
    }
    // case 5
    function renderOptionalClass() {
        return (
            <div>
                <J8Optional/>
            </div>
        )
    }
    // case 6
    function renderLambda() {
        return (
            <div>
                <J8Lambda/>
            </div>
        )
    }
    // case 7
    function renderStream() {
        return (
            <div>
                <Java8Stream/>
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
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '6' })}>
                                Lambda Expression
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: '7' })}>
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
                                Optional class
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