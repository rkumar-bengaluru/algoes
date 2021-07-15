// Dependencies
import React from 'react';

import './app.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isRunning: false };
		this.cm = React.createRef();
		this.result = React.createRef();
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		this.code = 'function sayHello() {\n\tconsole.log(\'hello to browser\');\n}\nsayHello();'
	}

	componentDidMount() {
		this.cm.current.editor.setSize(600, "100%");
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
		i.className = 'beauty-input';
		i.style.height = '300px';
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
					<button onClick={() => this.handleClick()} type="button" className="btn btn-outline-secondary" id="runscript">Run</button>
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
								onChange={(editor, data, value) => {
								}}
							/>
						</div>
					</div>
					<div className="col overflow-auto border cm-jsstudio" >
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
