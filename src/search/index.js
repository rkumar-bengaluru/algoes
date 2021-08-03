// Dependencies
import React, { useState, useEffect } from 'react';
import indexFile from './algoes-index.json';
import productMetaFile from './algoes.json';

import { useLunr } from 'react-lunr'


const Search = props => {

    const [query, setQuery] = useState(null);
    const results = useLunr(query, indexFile);
    const [toRender, setToRender] = useState([]);

    useEffect(() => {
        const search = window.location.href;
        var searchTerm = search.split('=');
        console.log(searchTerm[1]);
        setQuery(searchTerm[1]);
    }, [results,query]);

    useEffect(() => {
        console.log('results changed...');
        console.log(JSON.stringify(results));
        var tmp = results.map((item) => {
            return productMetaFile.find((p) => item.ref === p.id)
        })
        console.log(JSON.stringify(tmp));
        setToRender(tmp);
    }, [results,query]);


    return (
        <div className="content container">
            {toRender.map((offer, index) => {
                return (
                    <div key={index} className="row justify-content-around m-3">
                        <li key={index}><a href={offer.id}>{offer.id}</a>
                        <p className="h6">{offer.title}</p>
                        <p key={index}>{offer.description}</p>
                        </li>
                    </div>
                )
            })}
            {toRender.length === 0 &&
                <div className="row justify-content-around m-3 alert">No Matching Result Found.</div>
            }
        </div>
    );
};

export default Search;