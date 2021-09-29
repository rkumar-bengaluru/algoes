import { useReducer } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');

const Hateaos = () => {
    const initial = { code: renderModelCode(), prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);
    function reducer(state, action) {
        switch (action.type) {
            case 0:
                return { prev: state.code, code: renderModelCode() }
            case 1:
                return { prev: state.code, code: renderServiceCode() }
            case 2:
                return { prev: state.code, code: renderControllerCode() }
            default:
                throw new Error('unexpected action');
        }
    }

    function renderModelCode() {
        return '@Entity\nrecord Employee(@Id @GeneratedValue Long id, String firstName, String lastName, String role) {\n\tpublic Employee() {\n\t\tthis(null, null, null, null);\n\t}\n\n\tpublic Employee(Long id) {\n\t\tthis(id, null, null, null);\n\t}\n\n\tpublic Optional < Long > getId() {\n\t\treturn Optional.ofNullable(this.id);\n\t}\n}\n';
    }
    function renderServiceCode() {
        return '@Service\npublic class EmployeeService {\n\tprivate List < Employee > all = new ArrayList < > ();\n\n\tpublic EmployeeService() {\n\t\tall.add(new Employee(1 L, \"Rupak\", \"Kumar\", \"Admin\"));\n\t\tall.add(new Employee(2 L, \"Raj\", \"Aryan\", \"User\"));\n\t\tall.add(new Employee(3 L, \"Amrita\", \"Sinha\", \"User\"));\n\t\tall.add(new Employee(4 L, \"Anurag\", \"Kumar\", \"User\"));\n\t}\n\n\tpublic List < Employee > all() {\n\t\treturn all;\n\t}\n\n\tpublic Stream < Employee > findById(long id) {\n\t\treturn all.stream().filter(e - > {\n\t\t\treturn e.getId().get() == id;\n\t\t});\n\t}\n}\n';
    }
    function renderControllerCode() {
        return '@RestController\n@RequestMapping(\"/employee\")\npublic class EmployeeController {\n\n\t@Autowired\n\tprivate EmployeeService service;\n\n\t@GetMapping(\"\") // CollectionModel\n\tpublic ResponseEntity < CollectionModel < EntityModel < Employee >>> all() {\n\t\t// get stream of employees\n\t\tStream < Employee > all = service.all().stream();\n\t\t// map each employee to EntityModel with links.\n\t\tList < EntityModel < Employee >> a = all.map(e - > {\n\t\t\treturn EntityModel.of(e, linkTo(methodOn(EmployeeController.class).findOne(e.id())).withSelfRel());\n\t\t}).collect(Collectors.toList());\n\t\t// convert list to CollectionModel with links.\n\t\treturn ResponseEntity\n\t\t\t.ok(CollectionModel.of(a, linkTo(methodOn(EmployeeController.class).all()).withRel(\"employees\")));\n\t}\n\n\t@GetMapping(\"/{id}\") // EntityModel\n\tpublic ResponseEntity < EntityModel < Employee >> findOne(@PathVariable Long id) {\n\t\t// get stream of employees\n\t\tStream < Employee > all = service.findById(id);\n\t\t// map each employee to EntityModel with self link\n\t\tStream < EntityModel < Employee >> allEntityModel = all.map(e - > {\n\t\t\treturn EntityModel.of(e, linkTo(methodOn(EmployeeController.class).findOne(e.getId().get())).withSelfRel(),\n\t\t\t\tlinkTo(methodOn(EmployeeController.class).all()).withRel(\"employees\"));\n\t\t});\n\t\t// convert from EntityModel to ResponseEntity\n\t\treturn allEntityModel.map(ResponseEntity::ok).findFirst().get();\n\t}\n}\n        ';
    }
    return (
        <div>
            <h6>Hateaos</h6>
            <p>This project provides some APIs to ease creating REST representations.The core problem it tries to address is link creation and representation assembly.</p>
            <div className="row border p-2">
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 0 })}>@Model</a></div>
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 1 })}>@Service</a></div>
                <div className="col"><a href="javascript:void(0)" onClick={() => dispatch({ type: 2 })}>@Controller</a></div>
            </div>
            <div className="row border p-2">
                <CodeMirror
                    value={state.code}
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
            <div className="row p-2">
                All source code is available &nbsp;<a href="https://github.com/rkumar-bengaluru/java-full-stack/" target="_blank"> here</a>
            </div>
        </div>
    )
}
export default Hateaos;