import { useEffect, useReducer, useState } from "react";
import menus from '../megamenu/megamenu.json';
import { lazy } from "react";

const Sharding = lazy(() => import('./sharding'));

const SQL = () => {
    const dbView = { current: dbHome(), prev: '' };
    const [dbMenu, setDbMenu] = useState([]);
    const [state, dispatch] = useReducer(dbReducer, dbView);

    useEffect(() => {
        menus.offers.map((item, index) => {
            if (item.name === 'Database') {
                setDbMenu(item.subMenus);
            }
        });
    }, [dbMenu]);

    function dbReducer(state, action) {
        console.log(action.type);
        switch (action.type) {
            case '0':
                return { prev: state.current, current: dbHome() };
            case '1':
                return { prev: state.current, current: dbEr() };
            case '2':
                return { prev: state.current, current: dbQuery() };
            case '3':
                return { prev: state.current, current: dbFunction() };
            case '4':
                return { prev: state.current, current: dbWC() };
            case '5':
                return { prev: state.current, current: dbIJ() };
            case '6':
                return { prev: state.current, current: dbLJ() };
            case '7':
                return { prev: state.current, current: dbRJ() };
            case '8':
                return { prev: state.current, current: dbTR() };
            case '9':
                return { prev: state.current, current: <Sharding /> };
            default:
                return { prev: state.current, current: <div>TODO</div> };
        }
    }

    function dbEr() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-er.jpg'></img>
                </div>
            </>
        )
    }

    function dbQuery() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-query.jpg'></img>
                </div>
            </>
        )
    }

    function dbFunction() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-func.jpg'></img>
                </div>
            </>
        )
    }

    function dbWC() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-wc.jpg'></img>
                </div>
            </>
        )
    }

    function dbIJ() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-ij.jpg'></img>
                </div>
            </>
        )
    }

    function dbLJ() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-lj.jpg'></img>
                </div>
            </>
        )
    }

    function dbRJ() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-rj.jpg'></img>
                </div>
            </>
        )
    }

    function dbTR() {
        return (
            <>
                <div className="row">
                    <img width="1000px" src='/algoes/img/db/mysql-tr.jpg'></img>
                </div>
            </>
        )
    }

    function dbHome() {
        return (
            <>
                <h5>SQL (Structured Query Language)</h5>
                <p>SQL (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them</p>
                <ul>
                    <li>
                        <h6>Data Query Language (DQL)</h6>
                        <p>DQL statements are used for performing queries on the data within schema objects.</p>
                        <ul>
                            <li>
                                <code>SELECT</code> It is used to retrieve data from the database.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6>Data Definition Language (DDL)</h6>
                        <p>Data Definition Language actually consists of the SQL commands that can be used to define the database schema. </p>
                        <ul>
                            <li><code>CREATE</code> This command is used to create the database or its objects (like table, index, function, views, store procedure, and triggers).</li>
                            <li><code>DROP</code> This command is used to delete objects from the database</li>
                            <li><code>ALTER</code> This is used to alter the structure of the database</li>
                            <li><code>TRUNCATE </code>This is used to remove all records from a table, including all spaces allocated for the records are removed</li>
                            <li><code>RENAME</code> This is used to rename an object existing in the database.</li>
                        </ul>
                    </li>
                    <li>
                        <h6>Data Control Language (DCL)</h6>
                        <p>DCL includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions, and other controls of the database system.</p>
                        <ul>
                            <li><code>GRANT </code> This command gives users access privileges to the database.</li>
                            <li><code>REVOKE </code>This command withdraws the user’s access privileges given by using the GRANT command.</li>
                        </ul>

                    </li>
                    <li>
                        <h6>Data Manipulation Language (DML) </h6>
                        <p>The SQL commands that deals with the manipulation of data present in the database belong to DML or Data Manipulation Language and this includes most of the SQL statements. </p>
                        <ul>
                            <li><code>INSERT</code></li>
                            <li><code>UPDATE</code></li>
                            <li><code>DELETE</code></li>
                            <li><code>LOCK</code> Table control concurrency</li>
                            <li><code>CALL</code> Call or PL/SQL or Java Program</li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    }

    function renderMenu() {
        return (
            <ul>
                {dbMenu.map((e, i) => {
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

export default SQL;