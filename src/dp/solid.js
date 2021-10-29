import { useEffect, useState } from "react";
import ParentComponent from "../nodejs/collapse/parentcomponent";
import solidmenus from "./solid.json";
import '../react/component/algoescode'
const Solid = () => {
    const srp = "public class MovieTicketBooking {\n\tpublic Ticket bookTicket(Movie movie, Screen screen, Slot slot) {\n\t\t// code to book ticket.\n\t}\n\n\tpublic Ticket getTicket(Long ticketId) {\n\t\t// since this class booked the ticket and hence make sense to \n\t\t// to retrieve the ticket from this class.\n\t}\n\n\tpublic Invoide getInvoice(Long ticketId) {\n\t\t// this method violates Single Responsibility Principle,\n\t\t// because any change in invoicing method will lead to\n\t\t// change in this class, even though this class is not\n\t\t// responsible for invoice.\n\t\t// assumption is invoicing is not this class responsibility\n\t}\n}\n";
    const ocp = "interface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\n// initially you have just standard ticket type.\nclass StandardTicket extends Ticket {}\n// later in the development cycle you want to \n// add Gold Tier, so instead of changing the standard\n// ticket class and retrofit Gold type you extend StandardTicket\n// this is Open Closed Principle.\n// StandardTicket is Closed for enhancements.\n// StandardTicket is Open for extension\nclass GoldTicket extends StandardTicket {}\n";
    const ldp = "interface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\n// gold ticket has additional features.\n// this interface helps achieve Liskov Substition Principle.\ninterface AddOns {\n\tvoid deliverSnacks();\n}\n// initially you have just standard ticket type.\n// since StandardTicket has no AddOns, it need not implement it.\nclass StandardTicket extends Ticket {}\n// later in the development cycle you want to \n// add Gold Tier, so instead of changing the standard\n// ticket class and retrofit Gold type you extend StandardTicket\n// this is Open Closed Principle.\n// StandardTicket is Closed for enhancements.\n// StandardTicket is Open for extension\nclass GoldTicket extends StandardTicket implements AddOns {}\n";
    const isp = "/**\n * The ticket interface has 2 reponsibility.\n * ticket attributes.\n * printing ticket.\n **/\ninterface Ticket {\n\tTicketType type();\n\tString row();\n\tString seat();\n\tvoid printTicket();\n}\n// this needs to broken into 2 interface as below.\n// single interface with multiple responsibility\n// is broken down into smaller responsibility.\ninterface InterfaceSegregationTicket {\n\tTicketType type();\n\tString row();\n\tString seat();\n}\ninterface InterfaceSegregationTicketPrinter {\n\tvoid printTicket();\n}\n";
    const dip = "interface Ticket {}\ninterface SilverTicket extends Ticket {}\ninterface GoldTicket extends SilverTicket {}\ninterface PlatinumTicket extends GoldTicket {}\n\npublic class MovieTicketBooking {\n\t// violates dependency inversion principle.\n\tprivate GoldTicket ticket; // wrong.\n\t// the implementation class should operate on interface\n\t// this helps avoid strongly types implementations.\n\tprivate Ticket ticket; // correct\n}\n";
    const [home, setHome] = useState();

    useEffect(() => {
        setHome(<SolidHome />);
    }, []);

    const SingleResponsibilityPrinciple = (props) => {
        return (
            <div >
                <h5>Single Responsibility Principle</h5>
                <p>a <code>class should only have one responsibility</code>. Furthermore, it should only have one reason to change</p>
                
                <div className="row">
                    <div style={{ "height": "500px" }} className="border">
                        <algoes-code src={props.code}></algoes-code>
                    </div>
                </div>
            </div>
        )
    }

    const OpenClosePrinciple = (props) => {
        return (
            <div >
                <h5>Open Close Principle</h5>
                <p><code>classes should be open for extension but closed for modification</code></p>
                <div className="row">
                    <div style={{ "height": "500px" }} className="border">
                        <algoes-code src={props.code}></algoes-code>
                    </div>
                </div>
            </div>
        )
    }

    const LiskovSubstituionPrinciple = (props) => {
        return (
            <div>
                <h5>Liskov Substituion Principle</h5>
                <p><code>if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program</code></p>
                <div className="row">
                    <div style={{ "height": "500px" }} className="border">
                        <algoes-code src={props.code}></algoes-code>
                    </div>
                </div>
            </div>
        )
    }

    const InterfaceSegregationPrinciple = (props) => {
        return (
            <div >
                <h5>Interface Segregation Principle</h5>
                <p><code>larger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them</code></p>
                <div className="row">
                    <div style={{ "height": "500px" }} className="border">
                        <algoes-code src={props.code}></algoes-code>
                    </div>
                </div>
            </div>
        )
    }

    const DependencyInversionPrinciple = (props) => {
        return (
            <div >
                <h5>Dependency Inversion Principle</h5>
                <p><code>The principle of dependency inversion refers to the decoupling of software modules. This way, instead of high-level modules depending on low-level modules, both will depend on abstractions</code></p>
                <div className="row">
                    <div style={{ "height": "500px" }} className="border">
                        <algoes-code src={props.code}></algoes-code>
                    </div>
                </div>
            </div>
        )
    }

    const SolidHome = () => {
        return (
            <div className="row">
                <h5>Solid Home</h5>
                <p>SOLID is one of the most popular sets of design principles in object-oriented software development. It’s a mnemonic acronym for the following five design principles:</p>
                <ul>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)} >Single Responsibility Priniciple</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Open Closed Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Liskov Substituion Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Interface Segregation Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Dependency Inversion Principle</a>
                    </li>
                </ul>
            </div>
        )
    }

    function linkClicked(e) {
        e.preventDefault();
        showComponent(e.target.textContent);
    }

    function showComponent(name) {
        console.log(name);
        switch (name) {
            case "Single Responsibility Priniciple":
                setHome(<SingleResponsibilityPrinciple code={srp}/>);
                break;
            case "Open Closed Principle":
                setHome(<OpenClosePrinciple code={ocp}/>);
                break;
            case "Liskov Substituion Principle":
                setHome(<LiskovSubstituionPrinciple code={ldp}/>);
                break;
            case "Interface Segregation Principle":
                setHome(<InterfaceSegregationPrinciple code={isp}/>);
                break;
            case "Dependency Inversion Principle":
                setHome(<DependencyInversionPrinciple code={dip}/>);
                break;
            default:
                setHome(<SolidHome />);
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <ParentComponent
                        name={solidmenus.name}
                        childs={solidmenus.items}
                        showComponent={showComponent} />
                </div>
                <div className="col-sm-9">
                    {home}
                </div>
            </div>
        </div>
    )
}
export default Solid;