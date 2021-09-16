import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const J9Stream = (props) => {
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        //cm.current.editor.setSize(200, "100%");
        setCode("package org.java.full.stack.java9;\n\nimport java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.stream.Stream;\n\n/**\n * In Java 9, Stream API has improved and new methods are added to the Stream\n * interface. These methods are tabled below.\n * \n * - takeWhile(Predicate<? super T> predicate) \n * - dropWhile(Predicate<? super T> predicate) \n * - ofNullable(T t) \n * - iterate(T seed, Predicate<? super T> hasNext,UnaryOperator<T> next)\n * \n * @author Rupak Kumar...\n *\n */\npublic class Java9Stream {\n\tpublic static void main(String[] args) {\n\t\t// It returns, if this stream is ordered, a stream consisting \n\t\t// of the longest prefix of elements taken from this stream \n\t\t// that match the given predicate. Otherwise returns, \n\t\t// if this stream is unordered, a stream consisting of a \n\t\t// subset of elements taken from this stream that match \n\t\t// the given predicate.\n\t\tList < Integer > takeWhileList = Stream.of(\n\t\t\t\t2, 2, 3, 4, 5, 6, 7, 8, 9, 10).takeWhile(\n\t\t\t\ti - > (i % 2 == 0))\n\t\t\t.collect(Collectors.toList());\n\t\tSystem.out.println(takeWhileList);\n\t\t// It returns, if this stream is ordered, a stream consisting \n\t\t// of the remaining elements of this stream after dropping \n\t\t// the longest prefix of elements that match the given predicate. \n\t\t// Otherwise returns, if this stream is unordered, a stream consisting \n\t\t// of the remaining elements of this stream after dropping a subset of \n\t\t// elements that match the given predicate.\n\t\tList < Integer > dropWhile = Stream.of(2, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n\t\t\t.dropWhile(i - > (i % 2 == 0)).collect(Collectors.toList());\n\t\tSystem.out.println(dropWhile);\n\t\t// It returns a sequential Stream containing a single element, \n\t\t// if non-null, otherwise returns an empty Stream.\n\t\tList < Integer > ofNullable = Stream.of(2, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n\t\t\t.dropWhile(i - > (i % 2 == 0)).collect(Collectors.toList());\n\t\tSystem.out.println(ofNullable);\n\t\t// It returns a sequential ordered Stream produced by \n\t\t// iterative application of the given next function to \n\t\t// an initial element, conditioned on satisfying the given \n\t\t// hasNext predicate. The stream terminates as soon as the \n\t\t// hasNext predicate returns false.\n\t\tStream.iterate(1, i - > i <= 10, i - > i * 3)\n\t\t\t.forEach(System.out::println);\n\t}\n\n}\n");
    }, [code, cm]);


    return (
        <div className="container-fluid">
            <h6>Java 9 Stream API Improvement</h6>
            <p>In Java 9, Stream API has improved and new methods are added to the Stream interface</p>
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
export default J9Stream;