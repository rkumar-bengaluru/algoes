
import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
const fs = require('fs');

const AsynchAwait = (props) => {
    /**
     * Demonstration of async await with a real world example of 
     * scanning a dir with millions of files. read the json content 
     * of each file and print the sku of the file sequentially.
     * 
     * @param {large dir to scan} dir 
     */
    const scanDir = async (dir) => {
        console.log('start scanning');
        // await with promise on reading the 
        // files in the destination directory
        var files = await new Promise((resolve, reject) => {
            fs.readdir(dir, (err, files) => {
                if (err) {
                    reject(files);
                }
                resolve(files);
            });
        });
        console.log('there are ' + files.length + ' in the dir');
        // one approach if for each file sequentially the content.
        for (var i = 0; i <= files.length - 1; i++) {
            // another await inside async function to read the 
            // content of file and return sku.
            let sku = await new Promise((resolve, reject) => {
                fs.readFile(dir + '\\' + files[i], (err, data) => {
                    if (err) {
                        reject(files);
                    }
                    var p = JSON.parse(data);
                    resolve(p.sku);
                });
            });
            // sequentially print each sku
            console.log('sku of the product is ' + sku);
        }
        // another approach await on all promise inside
        // each file.
        await Promise.all(files.map(async (file) => {
            let sku = await new Promise((resolve, reject) => {
                fs.readFile(dir + '\\' + file, (err, data) => {
                    if (err) {
                        reject(files);
                    }
                    var p = JSON.parse(data);
                    resolve(p.sku);
                });
            });
            console.log('sku of the product is ' + sku);
        }));
        // finally scanning is complete.
        console.log('scanning done...');
    }
    const [code, setCode] = useState('');
    const [cm, setCm] = useState(React.createRef());

    useEffect(() => {
        setCode("const fs = require('fs');\n/**\n * Demonstration of async await with a real world example of \n * scanning a dir with millions of files. read the json content \n * of each file and print the sku of the file sequentially.\n * \n * @param {large dir to scan} dir \n */\nconst scanDir = async(dir) => {\n\tconsole.log('start scanning');\n\t// await with promise on reading the \n\t// files in the destination directory\n\tvar files = await new Promise((resolve, reject) => {\n\t\tfs.readdir(dir, (err, files) => {\n\t\t\tif (err) {\n\t\t\t\treject(files);\n\t\t\t}\n\t\t\tresolve(files);\n\t\t});\n\t});\n\tconsole.log('there are ' + files.length + ' in the dir');\n\t// one approach if for each file sequentially the content.\n\tfor (var i = 0; i <= files.length - 1; i++) {\n\t\t// another await inside async function to read the \n\t\t// content of file and return sku.\n\t\tlet sku = await new Promise((resolve, reject) => {\n\t\t\tfs.readFile(dir + '\\' + files[i], (err, data) => {\n\t\t\t\tif (err) {\n\t\t\t\t\treject(files);\n\t\t\t\t}\n\t\t\t\tvar p = JSON.parse(data);\n\t\t\t\tresolve(p.sku);\n\t\t\t});\n\t\t});\n\t\t// sequentially print each sku\n\t\tconsole.log('sku of the product is ' + sku);\n\t}\n\t// another approach await on all promise inside\n\t// each file.\n\tawait Promise.all(files.map(async(file) => {\n\t\tlet sku = await new Promise((resolve, reject) => {\n\t\t\tfs.readFile(dir + '\\' + file, (err, data) => {\n\t\t\t\tif (err) {\n\t\t\t\t\treject(files);\n\t\t\t\t}\n\t\t\t\tvar p = JSON.parse(data);\n\t\t\t\tresolve(p.sku);\n\t\t\t});\n\t\t});\n\t\tconsole.log('sku of the product is ' + sku);\n\t}));\n\t// finally scanning is complete.\n\tconsole.log('scanning done...');\n}\n");
    }, [code]);

    return (
        <div className="container-fluid">
            <h1>Asynch Await </h1>
            <div className="row border">
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                    <h2>Output</h2>
                    <code>'start scanning'</code><br/>
                    <code>'there are * in the dir'</code><br/>
                    <code>'sku of the product is *'</code><br/>
                    <code>'***'</code><br/>
                    <code>'scanning done...'</code>
                </div>
            </div>
        </div>
    );
}
export default AsynchAwait;