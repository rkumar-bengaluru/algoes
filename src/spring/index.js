import { useEffect, useReducer, useState, lazy, Suspense } from "react"
import menus from '../megamenu/megamenu.json';
import SpringIntro from "./home";
import SpringController from "./controller";
import WebFlux from "./webflux";
import Hateaos from "./hateaos";
const SpringScheduling = lazy(() => import('./scheduling'));
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
            case '4':
                return {
                    prev: state.current, current: renderScheduling()
                }
            case '11':
                return { prev: state.current, current: <Hateaos /> };
            default:
                return { prev: state.current, current: 'TODO' };
        }
    }

    function renderScheduling() {
        return (
            <Suspense fallback={<div>loading...</div>}>
                <SpringScheduling />
            </Suspense>
        )
    }

    function renderMenu() {
        return (
            <ul>
                {springMenu.map((e, i) => {
                    return (
                        <div>
                            <a key={i} href="javascript:void(0)" onClick={() => dispatch({ type: e.action })}>
                                <li key={i} >{e.name}</li>
                            </a>
                            <ul>
                                {e.links.map((item, index) => {
                                    return (
                                        <a key={index} href="javascript:void(0)" onClick={() => dispatch({ type: item.action })}>
                                            <li key={index}>{item.name}</li>
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