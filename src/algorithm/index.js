import React, { useState, useEffect } from 'react';

const Algorithm = (props) => {
    const [name, setName] = useState('');
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setFetching(true);
        async function fetchData() {
            var url = '/algoes/catalog/algorithms/' + props.match.params.id + '.json';
            // You can await here
            await fetch(url)
                .then(data => data.json())
                .then(response => {
                    console.log(response);
                    if (response.name) {
                        setName(response.name);
                        setFetching(false);
                    } else {
                        setError(true);
                    }
                })
                .catch(e => {
                    // handle error
                    console.log(e.stack);
                    setError(true);
                    setFetching(false);
                    return e;
                })
            
        }
        fetchData();
    }, [props.match.params.id]);

    
    return (
        <div className="algorithm">

            {fetching && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {!fetching && (
                <div>
                    {name}
                </div>
            )}
            {!error && (
                <div>
                    Error Fetching ....
                </div>
            )}

        </div>
    );
}

export default Algorithm;