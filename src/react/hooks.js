import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

/**
 * This a functional component using useState hook, to implement
 * a todo list application.
 */
const ReactUseStateHooks = (props) => {
    // todo list using array.
    const [todo, setTodo] = useState([]);
    // another state to hold reference of input element.
    const [iref, setIref] = useState(React.createRef());
    const [useStateCode, setUseSateCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        setUseSateCode("import React, {\n\tuseState\n} from 'react';\n/**\n * This a functional component using useState hook, to implement\n * a todo list application.\n */\nconst ReactHooks = (props) => {\n\t// todo list using array.\n\tconst [todo, setTodo] = useState([]);\n\t// another state to hold reference of input element.\n\tconst [iref, setIref] = useState(React.createRef());\n\t/**\n\t * Add a new task\n\t * @param {\n\t * } e \n\t */\n\tfunction addTask(e) {\n\t\te.preventDefault();\n\t\tif (iref.current.value.trim() != '') {\n\t\t\tvar task = {\n\t\t\t\tid: iref.current.value,\n\t\t\t\tdone: false\n\t\t\t};\n\t\t\tsetTodo(todo.concat(task));\n\t\t\tiref.current.value = '';\n\t\t}\n\t}\n\t/**\n\t * Toggle the task between complete and incomplete.\n\t * \n\t * @param {*} id \n\t */\n\tfunction taskDone(id) {\n\t\tconsole.log('task done ' + id);\n\t\tvar tasks = [...todo];\n\t\ttasks.forEach((task) => {\n\t\t\tif (task.id === id) {\n\t\t\t\ttask.done = !task.done;\n\t\t\t}\n\t\t})\n\t\tsetTodo(tasks);\n\t}\n\t/**\n\t * Delete a task.\n\t * \n\t * @param {*} id \n\t */\n\tfunction deleteTask(id) {\n\t\tconst newTaskList = todo.filter((task) => task.id !== id);\n\t\tsetTodo(newTaskList);\n\t}\n\t/**\n\t * main render function.\n\t */\n\t return (\n \t\t<div className=\"container-fluid\">\n \t\t\t<h1>React Hooks</h1>\n \t\t\t<div className=\"row\">\n \t\t\t\t<div className=\"col-sm-6\">\n \t\t\t\t\t<CodeMirror\n \t\t\t\t\t\tvalue={useStateCode}\n \t\t\t\t\t\tref={cm}\n \t\t\t\t\t\tclassName=\"cm-java-small\"\n \t\t\t\t\t\toptions={{\n \t\t\t\t\t\tlineNumbers: true,\n \t\t\t\t\t\tmatchBrackets: true,\n \t\t\t\t\t\tcontinueComments: \"Enter\",\n \t\t\t\t\t\textraKeys: { \"Ctrl-Q\": \"toggleComment\" },\n \t\t\t\t\t\tmode: \"javascript\"\n \t\t\t\t\t}}\n \t\t\t\t/>\n \t\t\t</div>\n \t\t\t<div className=\"col-sm-6 border\">\n \t\t\t\t<h4>TODO List (useState) Hook</h4>\n \t\t\t\t\t<ul className=\"list-group\">\n \t\t\t\t\t\t{todo.map((task, index) => {\n \t\t\t\t\t\t\treturn (\n \t\t\t\t\t\t\t\t<div className=\"row align-items-center\" key={index}>\n \t\t\t\t\t\t\t\t<input onClick={() => taskDone(task.id)} type=\"checkbox\" id=\"exampleCheck1\" />\n \t\t\t\t\t\t\t\t<div className=\"col m-1 justify-content-between \">\n \t\t\t\t\t\t\t\t{task.done &&\n \t\t\t\t\t\t\t\t\t<li className=\"list-group-item\" style={{ color: \"red\" }}><del>{task.id}</del></li>\n \t\t\t\t\t\t\t\t}\n \t\t\t\t\t\t\t\t{!task.done &&\n \t\t\t\t\t\t\t\t\t<li className=\"list-group-item\" style={{ color: \"blue\" }}>{task.id}</li>\n \t\t\t\t\t\t\t\t}\n \t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t<div className=\"col\">\n \t\t\t\t\t\t\t\t\t<button type=\"submit\" className=\"btn btn-primary\" onClick={() => deleteTask(task.id)}>Delete</button>\n \t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t)\n \t\t\t\t\t})}\n \t\t\t\t</ul>\n\n \t\t\t\t<div class=\"input-group mb-3\">\n \t\t\t\t\t<input type=\"text\" class=\"form-control\" ref={iref} onClick={addTask.bind(this)} placeholder=\"add task\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" />\n \t\t\t\t\t<div class=\"input-group-append\">\n \t\t\t\t\t\t<button class=\"btn btn-outline-secondary\" type=\"button\" onClick={addTask.bind(this)}>Add</button>\n \t\t\t\t\t</div>\n \t\t\t\t</div>\n \t\t\t</div>\n \t\t</div>\n \t</div>\n )}\nexport default ReactHooks;\n\n");
    },[useStateCode])
    /**
     * Add a new task
     * @param {
     * } e 
     */
    function addTask(e) {
        e.preventDefault();
        if (iref.current.value.trim() !== '') {
            var task = { id: iref.current.value, done: false };
            setTodo(todo.concat(task));
            iref.current.value = '';
        }
    }
    /**
     * Toggle the task between complete and incomplete.
     * 
     * @param {*} id 
     */
    function taskDone(id) {
        console.log('task done ' + id);
        var tasks = [...todo];
        tasks.forEach((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
        })
        setTodo(tasks);
    }
    /**
     * Delete a task.
     * 
     * @param {*} id 
     */
    function deleteTask(id) {
        const newTaskList = todo.filter((task) => task.id !== id);
        setTodo(newTaskList);
    }
    /**
     * main render function.
     */
    return (
        <div className="container-fluid">
            <h1>React useState Hook Demonstration</h1>
            <code>const [state, setState] = useState(initialState);</code>
            <p>Returns a stateful value, and a function to update it.
                During the initial render, the returned state (state) is the same
                as the value passed as the first argument (initialState).
                The setState function is used to update the state. It accepts 
                a new state value and enqueues a re-render of the component.
            </p>
            <code>setState(newState);</code>
            <div className="row border">
                <div className="col-sm-6">
                    <CodeMirror
                        value={useStateCode}
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
                <div className="col-sm-6 border">
                    <h4>TODO List (useState) Hook</h4>
                    <ul className="list-group">
                        {todo.map((task, index) => {
                            return (
                                <div className="row align-items-center" key={index}>
                                    <input onClick={() => taskDone(task.id)} type="checkbox" id="exampleCheck1" />
                                    <div className="col m-1  justify-content-between ">
                                        {task.done &&
                                            <li className="list-group-item" style={{ color: "red" }}><del>{task.id}</del></li>
                                        }
                                        {!task.done &&
                                            <li className="list-group-item" style={{ color: "blue" }}>{task.id}</li>
                                        }
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary" onClick={() => deleteTask(task.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" ref={iref} onClick={addTask.bind(this)} placeholder="add task" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={addTask.bind(this)}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReactUseStateHooks;