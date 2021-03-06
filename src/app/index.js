// Dependencies
import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './app.css';
import hiData from './highlight.json';
import Home from './home'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isRunning: false, oldChallenges: [] };
		this.cm = React.createRef();
		this.result = React.createRef();
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		this.code = "/**\n * This is a staircase of size : N = 4\n * !!!#\n * !!##\n * !###\n * ####\n * Its base and height are both equal to n. It is drawn \n * using # symbols and !. The last line is not preceded \n * by any !.\n *\n * Write a program that prints a staircase of size .\n * \n * @param {*} height \n * @param {*} base \n */\nfunction printStairs(height, base) {\n\tif (height > 0) {\n\t\tprintStairs(height - 1, base + 1);\n\t\tvar output = '';\n\t\tfor (var i = 0; i <= base; i++) {\n\t\t\toutput += '!';\n\t\t}\n\t\tfor (var j = base; j < base + height; j++) {\n\t\t\toutput += '#'\n\t\t}\n\t\tconsole.log(output);\n\t}\n}\nprintStairs(6, 0);\n";
	}

	componentDidMount() {
		this.cm.current.editor.setSize(600, "100%");
		this.setState({
			oldChallenges: this.findOld()
		});
	}

	findOld() {
		var res = [];
		for (var i = 11; i <= hiData.itemListElement.length - 1; i++) {
			res.push(hiData.itemListElement[i]);
		}
		return res;
	}

	async toggle() {
		if (this.state.isRunning) {
			await this.setState({ isRunning: false });
		} else {
			await this.setState({ isRunning: true });
		}
		//console.log('toggle->' + this.state.isRunning);
	}

	togglePromise() {
		if (this.state.isRunning) {
			return new Promise(resolve => {
				this.setState({ isRunning: false }, () => resolve());
			});
		} else {
			return new Promise(resolve => {
				this.setState({ isRunning: true }, () => resolve());
			});
		}

	}

	getStartScript() {
		return '<script>document.write("<span>starting execution of the script...</span>");document.write(\'<br/>\');\n</script>';
	}

	getEndScript() {
		return '<script>document.write("<span >end execution of the script...</span>");document.write(\'<br/>\');\n</script>';
	}

	getConsoleScript() {
		return 'console.log = function(m){document.write("<span >" + ">>> " + m + "</span><br>")};';
	}

	createIFrame() {
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

	getCodetoExec() {
		var code = this.cm.current.editor.getValue();
		var code_normalized = code.toLowerCase();
		var code_without_script_tag = false;
		if (code_normalized.indexOf('<script') === -1) {
			code_without_script_tag = true;
		}
		if (code_without_script_tag === true) {
			code = this.getStartScript()
				+ '<script>\n'
				+ this.getConsoleScript()
				+ code
				+ '\n</script>\n'
				+ this.getEndScript();
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

	handleClick = async () => {
		console.log('handleClick ->');
		await this.togglePromise();
		console.log(this.cm.current.editor.getValue());
		document.getElementById('error_area').innerHTML = '';
		var doc = this.createIFrame();
		var code = this.getCodetoExec();
		doc.open();
		doc.write(code); // look mum, no eval
		doc.close();
		var spans = doc.getElementsByTagName('SPAN');
		for (var i = 0; i < spans.length; i++) {
			spans[i].style.color = "white";
		}
		await this.togglePromise();
		console.log('handleClick ->' + this.state.isRunning);
	}


	render() {
		console.log('loading...');
		return (
			<div className="content">
				<div className="row justify-content-around m-1">
					<Home />
				</div>
				<div className="row justify-content-around m-1">
					<div className="col col-8 overflow-auto border">
						<h1>let's code to learn algorithm ...</h1>
						<p className="text-justify">In mathematics and computer science, an <mark className="text-primary font-weight-bold">algorithm</mark>
							is a finite sequence of	well-defined, computer-implementable instructions, typically to solve a
							class of specific problems or to <mark className="text-primary font-weight-bold">perform a computation.</mark>
							This tool is a kick-starter for <mark className="text-primary text-light bg-dark">students</mark>,
							<mark className="text-primary text-light bg-dark">developers</mark> to try writing
							a piece of code directly in the browser and see the simulative results in
							terms of <mark className="text-primary text-light bg-dark">time and space complexity.</mark>
						</p>
						<h3>Below is how this online tool is going to help :- </h3><br />
						<span><ol>
							<li><mark className="text-primary font-weight-bold">Instant Search</mark>
								for an algorithm/regex/patterns for your project.
								(Example Search - <mark className="text-primary">Remove Duplicates from Array)</mark></li>
							<li>You can <mark className="text-primary font-weight-bold">write your code here</mark>
								and test with your inputs and see the <mark className="text-primary font-weight-bold">time and space complexity of your code.</mark></li>
						</ol></span>
					</div>
					<div className="col overflow-auto border col-sm">
						<h2>Old ...</h2>
						<span><ol>
							{this.state.oldChallenges.map((item, index) => {
								return (
									<li key={index} ><a href={item.item.url}> {item.item.date} - {item.item.name} </a></li>
								)
							})}

						</ol></span>
					</div>
				</div>


				<div className="row justify-content-around m-1">

					<div className="col overflow-auto border">

					</div>
				</div>


				<div className="row justify-content-around m-1">
					<h5>See the below sample code, run it and see it live in action :- </h5><br />
					<button onClick={() => this.handleClick()} type="button" className="btn btn-primary" id="runscript">Run</button>
				</div>
				<div className="row justify-content-around border-bottom">
					<div className="col overflow-auto border cm-jsstudio">
						<label>Write the JavaScript below & Click Run</label>
						{this.state.isRunning &&
							<div id="input-spinner" className="spinner-border text-primary hidden"
								role="status">
								<span className="sr-only">Loading...</span>
							</div>
						}

						<div id="error-display" className="hidden"></div>
						<div >
							<CodeMirror
								value={this.code}
								ref={this.cm}
								options={{
									lineNumbers: true,
									matchBrackets: true,
									continueComments: "Enter",
									extraKeys: { "Ctrl-Q": "toggleComment" }
								}}
							/>
						</div>
					</div>
					<div className="col overflow-auto border cm-jsstudio-small" >
						<label >Console Log</label>
						<div id="error_area" className="jsstudio-error"> </div>
						<div id="results_area" ref={this.result} className="jsstudio-results"> </div>
					</div>
				</div>

			</div>
		);
	}


};


export default App;
