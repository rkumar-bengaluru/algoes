import ParentComponent from "../nodejs/collapse/parentcomponent";
import solidmenus from "./solid.json";

const Solid = () => {

    const SolidHome = () => {
        return (
            <div className="row">
                <h5>Solid Home</h5>
                <p>SOLID is one of the most popular sets of design principles in object-oriented software development. It’s a mnemonic acronym for the following five design principles:</p>
                <ul>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)} >Single Responsibility Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Open Closed Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>LisKov Substituion Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Interface Segregation Principle</a>
                    </li>
                    <li>
                        <a href='/algoes' onClick={(e) => linkClicked(e)}>Dependency Inversion</a>
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
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <ParentComponent 
                        name={solidmenus.name} 
                        childs={solidmenus.items} 
                        showComponent={showComponent}/>
                </div>
                <div className="col-sm-9">
                    <SolidHome/>
                </div>
            </div>
        </div>
    )
}
export default Solid;