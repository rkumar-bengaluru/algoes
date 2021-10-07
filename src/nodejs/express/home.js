import { UnControlled as CodeMirror } from "react-codemirror2";

const ExpressHome = () => {

    const code = '// The express() function is a top-level function exported by the express module.\nvar express = require(\'express\');\n//Creates an Express application.\nvar app = express();';

    return (
        <div className="container-fluid">
            <h6>Express</h6>
            <p>Fast, unopinionated, minimalist web framework for Node.js</p>
            <h6>Web Applications</h6>
            <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
            <h6>APIs</h6>
            <p>With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.</p>
            <h6>Performance</h6>
            <p>Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>
            <div className="row">
                <CodeMirror value={code}
                    options={{lineNumbers:true,mode:"javascript"}}/>
            </div>
        </div>
    )
}
export default ExpressHome;