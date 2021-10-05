import React, { Component, useEffect, useRef, useState } from "react"
import { UnControlled as CodeMirror } from "react-codemirror2";

const ChatRoom = () => {

    const [rupakMessages, setRupakMessages] = useState(["Hi"]);
    const [aryanMessages, setAryanMessages] = useState(["Hello"]);
    const code = "import React, {\tComponent,\tuseEffect,\tuseRef,\tuseState} from \"react\"\nimport {UnControlled as CodeMirror} from \"react-codemirror2\";\n\nconst ChatRoom = () => {\n\n\tconst [rupakMessages, setRupakMessages] = useState([\"Hi\"]);\n\tconst [aryanMessages, setAryanMessages] = useState([\"Hello\"]);\n\n\t// custom focus hook \n\tconst useFocus = () => {\n\t\tconst htmlElRef = useRef(null)\n\t\tconst setFocus = () => {\n\t\t\thtmlElRef.current && htmlElRef.current.focus()\n\t\t}\n\n\t\treturn [htmlElRef, setFocus]\n\t}\n\tconst [rref, setRInputFocus] = useFocus();\n\tconst [aref, setAInputFocus] = useFocus();\n\t// reusable component (ref forwarding)\n\tconst TextComponent = React.forwardRef((props, ref) => {\n\t\treturn ( <div className = \"row\" >\n\t\t\t<div className = \"col-sm-4\" > {\n\t\t\t\tprops.userName\n\t\t\t} </div> \n\t\t\t<div className=\"col-sm-8\">\n\t\t\t<FancyTextComponent ref = {ref}\n\t\t\tbroadCastMessage = {props.broadCastMessage}\n\t\t\tuserName = {props.userName}/> </div></div>\n\t\t)\n\t});\n\t// ref forwarded from <TextComponent> is again forwarded to child\n\tconst FancyTextComponent = React.forwardRef((props, ref) => {\n\t\treturn ( <>\n\t\t\t<input className = \"form-control \"\n\t\t\ttype = \"text\"\n\t\t\tplaceholder = {\n\t\t\t\tprops.userName\n\t\t\t}\n\t\t\tref = {\n\t\t\t\tref\n\t\t\t}\n\t\t\tonKeyDown = {\n\t\t\t\t(e) => props.broadCastMessage(e, props.userName)\n\t\t\t}\n\t\t\t/> </>\n\t\t)\n\t});\n\n\tuseEffect(() => {\n\t\trref.current.focus();\n\t}, []);\n\n\tfunction broadCastMessage(event, user) {\n\t\tif (event.code === 'Enter') {\n\t\t\tevent.preventDefault();\n\t\t\tif (user === 'rupak') {\n\t\t\t\tconst r = [...rupakMessages];\n\t\t\t\tr.push(rref.current.value);\n\t\t\t\tsetRupakMessages(r);\n\t\t\t\trref.current.value = '';\n\t\t\t\tsetAInputFocus();\n\t\t\t} else if (user === 'aryan') {\n\t\t\t\tconst t = [...aryanMessages];\n\t\t\t\tt.push(aref.current.value);\n\t\t\t\tsetAryanMessages(t);\n\t\t\t\taref.current.value = '';\n\t\t\t\tsetRInputFocus();\n\t\t\t}\n\t\t}\n\t}\n\n\treturn ( <>\n\t\t<div className = \"row border m-2\" >\n\t\t<CodeMirror value = {\n\t\t\tcode\n\t\t}\n\t\toptions = {\n\t\t\t{\n\t\t\t\tlineNumbers: true,\n\t\t\t\tmode: \"javascript\"\n\t\t\t}\n\t\t}\n\t\t/> </div> <div className = \"row border m-2\" >\n\t\t<div className = \"col-sm-6 border\" >\n\t\t<div className = \"row\" >\n\t\t<h6 > Rupak < /h6> </div> {\n\t\t\taryanMessages.map((m, i) => {\n\t\t\t\treturn <div key = {\n\t\t\t\t\ti\n\t\t\t\t}\n\t\t\t\tclassName = \"row border p-2\" > < span > {\n\t\t\t\t\tm\n\t\t\t\t}\n\t\t\t\tfrom aryan < /span></div >\n\t\t\t})\n\t\t} <div className = \"row\" >\n\t\t<TextComponent userName = \"rupak\"\n\t\tref = {\n\t\t\trref\n\t\t}\n\t\tbroadCastMessage = {\n\t\t\tbroadCastMessage\n\t\t}\n\t\tid = \"rupak\" / >\n\t\t</div> <\n\t\t/div> <\n\t\tdiv className = \"col-sm-6 border\" > { /* display all messages*/ } <\n\t\tdiv className = \"row\" >\n\t\t<h6 > Aryan < /h6> <\n\t\t/div> {\n\t\t\trupakMessages.map((m, i) => {\n\t\t\t\treturn <div key = {\n\t\t\t\t\ti\n\t\t\t\t}\n\t\t\t\tclassName = \"row border p-2\" > < span > {\n\t\t\t\t\tm\n\t\t\t\t}\n\t\t\t\tfrom rupak < /span></div >\n\t\t\t})\n\t\t} <\n\t\tdiv className = \"row\" >\n\t\t<TextComponent userName = \"aryan\"\n\t\tref = {\n\t\t\taref\n\t\t}\n\t\tbroadCastMessage = {\n\t\t\tbroadCastMessage\n\t\t}\n\t\tid = \"aryan\" / >\n\t\t</div> </div> </div> </>\n\t)\n}\nexport default ChatRoom;\n";

    // custom focus hook 
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

        return [htmlElRef, setFocus]
    }
    const [rref, setRInputFocus] = useFocus();
    const [aref, setAInputFocus] = useFocus();
    // reusable component (ref forwarding)
    const TextComponent = React.forwardRef((props, ref) => {
        return (
            <div className="row">
                <div className="col-sm-4">
                    {props.userName}
                </div>
                <div className="col-sm-8">
                <FancyTextComponent ref={ref} broadCastMessage={props.broadCastMessage} userName={props.userName} />
                </div>
            </div>
        )
    });
    // ref forwarded from <TextComponent> is again forwarded to child
    const FancyTextComponent = React.forwardRef((props, ref) => {
        return (
            <>
                <input className="form-control "
                    type="text"
                    placeholder={props.userName}
                    ref={ref} onKeyDown={(e) => props.broadCastMessage(e, props.userName)} />
            </>
        )
    });

    useEffect(() => {
        rref.current.focus();
    }, []);

    function broadCastMessage(event, user) {
        if (event.code === 'Enter') {
            event.preventDefault();
            if (user === 'rupak') {
                const r = [...rupakMessages];
                r.push(rref.current.value);
                setRupakMessages(r);
                rref.current.value = '';
                setAInputFocus();
            } else if (user === 'aryan') {
                const t = [...aryanMessages];
                t.push(aref.current.value);
                setAryanMessages(t);
                aref.current.value = '';
                setRInputFocus();
            }
        }
    }

    return (
        <>
            <h6>Forwarding Refs</h6>
            <p>Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.</p>
            <div className="row border m-2">
                <CodeMirror value={code}
                    options={{
                        lineNumbers:true,
                        mode:"javascript"
                    }}/>
            </div>
            <div className="row border m-2">
                <div className="col-sm-6 border">
                    <div className="row">
                        <h6>Rupak</h6>
                    </div>
                    {aryanMessages.map((m, i) => {
                        return <div key={i} className="row border p-2"><span>{m} from aryan</span></div>
                    })}
                    <div className="row">
                        <TextComponent userName="rupak" ref={rref} broadCastMessage={broadCastMessage} id="rupak" />
                    </div>
                </div>
                <div className="col-sm-6 border">
                    {/* display all messages*/}
                    <div className="row">
                        <h6>Aryan</h6>
                    </div>
                    {rupakMessages.map((m, i) => {
                        return <div key={i} className="row border p-2"><span >{m} from rupak</span></div>
                    })}
                    <div className="row">
                        <TextComponent userName="aryan" ref={aref} broadCastMessage={broadCastMessage} id="aryan" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatRoom;