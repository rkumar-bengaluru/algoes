import { useEffect, useState } from "react";
import ParentComponent from "../nodejs/collapse/parentcomponent";
import solidmenus from "./solid.json";

const Solid = () => {

    const [home, setHome] = useState();

    useEffect(() => {
        setHome(<SolidHome />);
    }, []);

    const SingleResponsibilityPrinciple = () => {
        return (
            <div >
                <h5>Single Responsibility Principle</h5>
                <p>a class should only have one responsibility. Furthermore, it should only have one reason to change</p>
            </div>
        )
    }

    const OpenClosePrinciple = () => {
        return (
            <div >
                <h5>Open Close Principle</h5>
                <p>classes should be open for extension but closed for modification</p>
            </div>
        )
    }

    const LiskovSubstituionPrinciple = () => {
        return (
            <div>
                <h5>Liskov Substituion Principle</h5>
                <p>if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program</p>
            </div>
        )
    }

    const InterfaceSegregationPrinciple = () => {
        return (
            <div >
                <h5>Interface Segregation Principle</h5>
                <p>larger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them</p>
            </div>
        )
    }

    const DependencyInversionPrinciple = () => {
        return (
            <div >
                <h5>Dependency Inversion Principle</h5>
                <p>The principle of dependency inversion refers to the decoupling of software modules. This way, instead of high-level modules depending on low-level modules, both will depend on abstractions</p>
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
                setHome(<SingleResponsibilityPrinciple />);
                break;
            case "Open Closed Principle":
                setHome(<OpenClosePrinciple />);
                break;
            case "Liskov Substituion Principle":
                setHome(<LiskovSubstituionPrinciple />);
                break;
            case "Interface Segregation Principle":
                setHome(<InterfaceSegregationPrinciple />);
                break;
            case "Dependency Inversion Principle":
                setHome(<DependencyInversionPrinciple />);
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