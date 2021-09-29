import { useEffect, useReducer, useState } from "react"
import menus from '../megamenu/megamenu.json';
import SpringIntro from "./home";
import SpringController from "./controller";
import WebFlux from "./webflux";
import Hateaos from "./hateaos"
const SpringHome = () => {

    const springView = { current: <SpringIntro />, prev: '' };
    const [state, dispatch] = useReducer(springReducer, springView);
    const [springMenu, setSpringMenu] = useState([]);

    useEffect(() => {
        menus.offers.map((item, index) => {
            if (item.name === 'Spring.io') {
                setSpringMenu(item.subMenus);
            }
        });
    }, [springMenu]);

    function springReducer(state, action) {
        console.log(action.type);
        switch (action.type) {
            case '0':
                return { prev: state.current, current: <SpringIntro /> };
            case '1':
                return { prev: state.current, current: <SpringController /> };
            case '2':
                return { prev: state.current, current: <WebFlux /> };
            case '11':
                return { prev: state.current, current: <Hateaos /> };
            default:
                return { prev: state.current, current: 'TODO' };
        }
    }

    function renderMenu() {
        return (
            <ul>
                {springMenu.map((e, i) => {
                    return (
                        <div>
                            <a href="javascript:void(0)" onClick={() => dispatch({ type: e.action })}>
                                <li>{e.name}</li>
                            </a>
                            <ul>
                                {e.links.map((item, index) => {
                                    return (
                                        <a href="javascript:void(0)" onClick={() => dispatch({ type: item.action })}>
                                            <li>{item.name}</li>
                                        </a>
                                    )
                                })}
                            </ul>
                        </div>

                    )
                })}
            </ul>
        )
    }

    function renderCurrent() {
        return (
            <div>{state.current}</div>
        )
    }

    return (
        <div className="container-fluid">
            <h6> Spring.io </h6>
            <div className="row">
                <div className="col-sm-3">
                    {renderMenu()}
                </div>
                <div className="col-sm-9">
                    {renderCurrent()}
                </div>
            </div>
        </div>
    )
}
export default SpringHome;