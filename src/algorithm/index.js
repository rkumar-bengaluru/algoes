import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './cm.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

const Algorithm = (props) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [metrics, setMetrics] = useState({});
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);
    const [cm, setCm] = useState(React.createRef());
    const [result, setResult] = useState(React.createRef());

    const [code, setCode] = useState('');
    const [codeRunning, setCodeRunning] = useState(false);


    useEffect(() => {
        const currentURL = window.location.href
        var paths = currentURL.split('/');
        var path = paths[paths.length -2];
        if(path === 'algorithm') {
            path = paths[paths.length -1];
        }
        path = path.split('.')[0];
        path = path.replace('#','');
        const metas = document.getElementsByTagName('meta');
      
        for (let i = 0; i < metas.length; i++) {
          if (metas[i].getAttribute('name') === 'algo-id') {
            path = metas[i].getAttribute('content');
            console.log('meta-->' + path);
          }
        }
        
        
        setFetching(true);
        async function fetchData() {
            var url = '/algoes/catalog/algorithms/' + path + '.json';
            // You can await here
            await fetch(url)
                .then(data => data.json())
                .then(response => {
                    console.log(response);
                    if (response.name) {
                        setTitle(response.title);
                        setName(response.name);
                        setCategory(response.category);
                        setDescription(response.description);
                        setMetrics(response.complextyMetrics);
                        setCode(response.code);
                        setFetching(false);
                    } else {
                        setError(true);
                    }
                })
                .catch(e => {
                    // handle error
                    console.log(e.stack);
                    setError(true);
                    setFetching(false);
                    return e;
                })

        }
        fetchData();
        document.title = name;
    }, [props.match.params.id, name]);


    function renderBreadCumb() {
        var bc = category.split(' > ');
        var nbc = [];
        for (let i = 0; i < bc.length; i++) {
            if (i !== bc.length - 1) {
                nbc.push(bc[i]);
            }
        }
        var last = bc[bc.length - 1];
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {nbc.map((b, index) => {
                        return (
                            <li key={index} className="breadcrumb-item"><a href="/algoes">{b}</a></li>
                        );
                    })}
                    <li className="breadcrumb-item active" aria-current="page">{last}</li>
                </ol>
            </nav>
        );
    }

    function renderMetrics() {
        var keys = Object.keys(metrics);
        return (
            <div >
                {keys.map((key, index) => {
                    return (
                        <p key={index} className="text-primary">{key} : <span className="text-secondary">{metrics[key]}</span></p>
                    );
                })
                }
            </div >
        );
    }

    function togglePromise() {
        if (codeRunning) {
            return new Promise(resolve => {
                setCodeRunning(false);
                resolve(codeRunning);
            });
        } else {
            return new Promise(resolve => {
                setCodeRunning(true);
                resolve(codeRunning);
            });
        }
    }

    function renderCodeMirror() {
        return (
            <div className="col-md-7 overflow-auto border cm-jsstudio">
                <label>{title}. Click Run to Execute</label>
                {/* {codeRunning &&
                    <div id="input-spinner" className="spinner-border text-primary hidden"
                        role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                } */}
                <div id="error-display" className="hidden"></div>
                <div >
                    <CodeMirror
                        value={code}
                        ref={cm}
                        options={{
                            lineNumbers: true,
                            matchBrackets: true,
                            continueComments: "Enter",
                            extraKeys: { "Ctrl-Q": "toggleComment" }
                        }}
                        style={{ "height": "800px" }}
                    />
                </div>
            </div>
        );
    }

    function getStartScript() {
        return '<script>document.write("<span>starting execution of the script...</span>");document.write(\'<br/>\');\n</script>';
    }

    function getEndScript() {
        return '<script>document.write("<span >end execution of the script...</span>");document.write(\'<br/>\');\n</script>';
    }

    function getConsoleScript() {
        return 'console.log = function(m){document.write("<span >" + ">>> " + m + "</span><br>")};';
    }

    function renderConsole() {
        return (
            <div className="col overflow-auto border cm-jsstudio" >
                <label >Console Log</label>
                <div id="error_area" className="jsstudio-error"> </div>
                <div id="results_area" ref={result} className="jsstudio-results"> </div>
            </div>
        );
    }

    function createIFrame() {
        if (document.getElementById('result')) {
            document.getElementById('result').remove();
        }

        var i = document.createElement('IFRAME');
        i.id = 'result';
        i.className = 'console-output';
        i.style.height = '600px';
        i.style.color = 'red';
        //  i.style.width = '97%';
        i.style.width = '100%';
        var parent = document.getElementById('results_area');
        parent.appendChild(i);
        return i.contentDocument;
    }

    function getCodetoExec() {
        var code = cm.current.editor.getValue();
        var code_normalized = code.toLowerCase();
        var code_without_script_tag = false;
        if (code_normalized.indexOf('<script') === -1) {
            code_without_script_tag = true;
        }
        if (code_without_script_tag === true) {
            code = getStartScript()
                + '<script>\n'
                + getConsoleScript()
                + code
                + '\n</script>\n'
                + getEndScript();
        }
        if (code_normalized.indexOf('onerror') === -1) { // code is without its own error handling, then add one
            code = '<script>\n' +
                'window.onerror = function(message, url, linenumber) {' +
                '  parent.alert_message("error", "<b>JavaScript error:</b> " + message + " on line " + linenumber);' +
                '};\n</script>\n' + code;
        }
        //console.log(code);
        return code;
    }

    async function handleClick() {
        var start = window.performance.now();
        await togglePromise();
        console.log('handleClick ->' + codeRunning);
        //console.log(cm.current.editor.getValue());
        document.getElementById('error_area').innerHTML = '';
        var doc = createIFrame();
        var code = getCodetoExec();
        doc.open();
        doc.write(code); // look mum, no eval
        doc.close();
        var spans = doc.getElementsByTagName('SPAN');
        for (var i = 0; i < spans.length; i++) {
            spans[i].style.color = "white";
        }
        await togglePromise();
        var end = window.performance.now();
        var executionTime = (end -start).toFixed(2);
        document.getElementById('performance-metrics').innerHTML = '<span class="alert alert-success" role="alert"> Execution Time : ' + executionTime + ' ms </span>'; 
        console.log('execution time ->' + executionTime);
    }

    async function handleReset() {
        if (document.getElementById('result')) {
			document.getElementById('result').remove();
		}
        document.getElementById('performance-metrics').innerHTML = '';
    }

    return (
        <div className="algorithm ">

            {fetching && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {!fetching && (
                <div className="container-fluid algocontainer p-2">
                    <div className="row justify-content-left">
                        {renderBreadCumb()}
                    </div>
                    <div className="row justify-content-around border">
                        <button onClick={() => handleClick()} type="button" className="btn btn-primary m-1" id="runscript">Run</button>
                        <div id="performance-metrics"></div>
                        <button onClick={() => handleReset()} type="button" className="btn btn-primary m-1" id="reset">Reset</button>
                    </div>
                    <div className="row justify-content-around border-bottom">
                        {renderCodeMirror()}
                        {renderConsole()}
                    </div>
                    <div className="row justify-content-left">
                        <div className="col col-8 overflow-auto border">
                            <h1 className="h5 w-100 ml-1">{title}</h1>
                            <p className="text-justify">{description}</p>
                        </div>
                        <div className="col overflow-auto border col-sm">
                            <h1 className="h6 w-100 ml-1">Peformance Metrics</h1>
                            {renderMetrics()}
                        </div>
                    </div>
                </div>
            )}
            {error && (
                <div>
                    Error Fetching ....
                </div>
            )}

        </div>
    );
}

export default Algorithm;