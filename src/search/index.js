// Dependencies
import React, { useState, useEffect } from 'react';
import { Index } from 'lunr'
import index from './algoes-index.json';
import store from './algoes.json';

const Search = props => {
    const [query, setQuery] = useState(null);
    const [results, setResults] = useState([])
    const [idx, setIdx] = useState(null)
    


    useEffect(() => {
        var t = Index.load(index)
        setIdx(t)
        const search = window.location.href;
        var searchTerm = search.split('=');
        console.log(searchTerm[1]);
        setQuery(searchTerm);
        console.log(t.search(query));
    }, []);


    return (
        <div className="content container-fluid">
            Hello
            {results.map((r, index) => {
                return (
                    <li key={r.id}>{r.description}</li>
                )
            })}
        </div>
    );
};

export default Search;