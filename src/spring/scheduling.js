import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
require('codemirror/mode/javascript/javascript');

const SpringScheduling = () => {

    const [code,setCode] = useState('@Configuration\n@EnableScheduling\npublic class AppConfig {}\n');

    function handleClick(e) {
        switch (e) {
            case 1:
                setCode('@Configuration\n@EnableScheduling\npublic class AppConfig {}\n');
                break;
            case 2:
                setCode('@Component\npublic class RecurringTask {\n\tprivate final Logger log = LoggerFactory.getLogger(getClass());\n\n\t@Scheduled(fixedDelay = 5000)\n\tpublic void toRun() {\n\t\tlog.info(\"recurring task running @ \" + new Date());\n\t}\n}');
                break;
            default:
                throw new Error("Unexpected...");
        }
    }
    return (
        <div>
            <h6>Enable Scheduling</h6>
            <p>Spring provides annotation support for both task scheduling and asynchronous method execution.
                To enable support for <code>@Scheduled</code> and <code>@Async</code> annotations, you can
                add <code>@EnableScheduling</code> and <code>@EnableAsync</code> to one of your
                <code>@Configuration</code> classes.
            </p>
            <div className="row m-2">
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => handleClick(1)}>Configuration</a>
                </div>
                <div className="col">
                    <a href="javascript:void(0)" onClick={() => handleClick(2)}>Task Scheduling</a>
                </div>
            </div>
            <div className="row">
                <CodeMirror 
                    value={code}
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
export default SpringScheduling;