import ParentComponent from "../collapse/parentcomponent";
import axiosmenus from './axios.json';
import '../../react/component/algoescode'
import { useState } from "react";
const AxiosFramework = () => {
    const dcode = "const axios = require('axios');\n\n// Make a request for a user with a given ID\naxios.get('/user?ID=12345')\n\t.then(function (response) {\n\t\t// handle success\n\t\tconsole.log(response);\n\t})\n\t.catch(function (error) {\n\t\t// handle error\n\t\tconsole.log(error);\n\t})\n\t.then(function () {\n\t\t// always executed\n\t});\n\n// Optionally the request above could also be done as\naxios.get('/user', {\n\t\tparams: {\n\t\t\tID: 12345\n\t\t}\n\t})\n\t.then(function (response) {\n\t\tconsole.log(response);\n\t})\n\t.catch(function (error) {\n\t\tconsole.log(error);\n\t})\n\t.then(function () {\n\t\t// always executed\n\t});\n\n// Want to use async/await? Add the `async` keyword to your outer function/method.\nasync function getUser() {\n\ttry {\n\t\tconst response = await axios.get('/user?ID=12345');\n\t\tconsole.log(response);\n\t} catch (error) {\n\t\tconsole.error(error);\n\t}\n}\n";
    const dhome = <><h6>Axios Framework</h6>
        <p>Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.</p>
        <h6>Features</h6>
        <ul>
            <li>Make XMLHttpRequests from the browser</li>
            <li>Make http requests from node.js</li>
            <li>Supports the Promise API</li>
            <li>Intercept request and response</li>
            <li>Transform request and response data</li>
            <li>Cancel requests</li>
            <li>Automatic transforms for JSON data</li>
            <li>Client side support for protecting against XSRF</li>
        </ul></>;
    const [code, setCode] = useState(toUnicode(dcode));
    const [home, setHome] = useState(dhome);

    var AxiosApi = function (type) {
        function fetchHome() {
            return (
                <div className="container"><h6>Axios API</h6>
                    <p> Requests can be made by passing the relevant config to axios.</p>
                    <h6>axios(config)</h6>
                </div>

            )
        }
        function fetchCode() {
            return "// Send a POST request\naxios({\n\tmethod: 'post',\n\turl: '/user/12345',\n\tdata: {\n\t\tfirstName: 'Fred',\n\t\tlastName: 'Flintstone'\n\t}\n});\n// GET request for remote image in node.js\naxios({\n\t\tmethod: 'get',\n\t\turl: 'http://bit.ly/2mTM3nY',\n\t\tresponseType: 'stream'\n\t})\n\t.then(function (response) {\n\t\tresponse.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))\n\t});\n"
        }
        if (type === 'api') {
            return fetchCode();
        } else if (type === 'home') {
            return fetchHome();
        }
    }

    var AxiosInstance = function (type) {
        function fetchHome() {
            return (
                <div className="container"><h6>The Axios Instance</h6>
                    <p> You can create a new instance of axios with a custom config.</p>
                    <h6>axios.create([config])</h6>
                </div>

            )
        }
        function fetchCode() {
            return "const instance = axios.create({\n\tbaseURL: 'https://some-domain.com/api/',\n\ttimeout: 1000,\n\theaders: {\n\t\t'X-Custom-Header': 'foobar'\n\t}\n});\n"
        }
        if (type === 'api') {
            return fetchCode();
        } else if (type === 'home') {
            return fetchHome();
        }
    }

    function showComponent(name) {
        switch (name) {
            case 'Axios':
                setHome(dhome);
                setCode(dcode);
                break;
            case 'api':
                setHome(AxiosApi('home'));
                setCode(AxiosApi('api'));
                break;
            case 'instance':
                setHome(AxiosInstance('home'));
                setCode(AxiosInstance('api'));
                break;
            default:
                break;
        }
    }

    function toUnicode(str) {
        return str.split('').map(function (value, index, array) {
            var temp = value.charCodeAt(0).toString(16).toUpperCase();
            if (temp.length > 2) {
                return '\\u' + temp;
            }
            return value;
        }).join('');
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    {axiosmenus.subMenus.map((feature, index) => {
                        return <ParentComponent key={index} name={feature.name} childs={feature.links} showComponent={showComponent} />
                    })}
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        {home}
                    </div>
                    <h6>Example Code</h6>
                    <div style={{ "height": "750px" }} className="row border">
                        <algoes-code
                            src={code} />
                    </div>

                    {/* <div style={{ "height": "300px" }} className="row border">
                        <algoes-code
                            src={toUnicode(`const axios = require('axios');\n// Make a request for a user with a given ID\naxios.get('/user?ID=12345')\n\t.then(function (response) {\n\t\t// handle success\n\t\tconsole.log(response);\n\t})\n\t.catch(function (error) {\n\t\t// handle error\n\t\tconsole.log(error);\n\t})\n\t.then(function () {\n\t\t// always executed\n\t});\n`)} />
                    </div> */}

                </div>
            </div>
        </div>
    )
}
export default AxiosFramework;