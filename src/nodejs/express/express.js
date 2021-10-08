import { useState } from "react";
import ExpressJson from "./json";
import ExpressRaw from "./raw";
import ExpressRouter from "./router";
import ExpressStatic from "./static";
import ExpressText from "./text";
import ExpressUrlEncoded from "./urlencoded";
export const Express = () => {
    const[current,setCurrent] = useState(<ExpressStatic/>);

    function showCode(e, f) {
        e.preventDefault();
        switch (f) {
            case 'static':
                setCurrent(<ExpressStatic/>);
                break;
            case 'Router':
                setCurrent(<ExpressRouter/>);
                break;
            case 'urlencoded':
                setCurrent(<ExpressUrlEncoded/>);
                break;
            case 'json':
                setCurrent(<ExpressJson/>);
                break;
            case 'raw':
                setCurrent(<ExpressRaw/>);
                break;
            case 'text':
                setCurrent(<ExpressText/>);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <h6>express()</h6>
            <div className="row border m-2">
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'static')}>express.static()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'Router')}> express.Router()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'urlencoded')}> express.urlencoded()</a>
                </div>
            </div>
            <div className="row border m-2">
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'json')}> express.json()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'raw')}> express.raw()</a>
                </div>
                <div className="col border">
                    <a href="/algoes" onClick={(e) => showCode(e, 'text')}> express.text()</a>
                </div>
            </div>
           
            <div className="row">
                <div className="col-sm-12">
                    {current}
                </div>

            </div>
        </>
    )
}
export default Express;
