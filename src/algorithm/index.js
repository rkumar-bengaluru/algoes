const Algorithm = (props) => {

    console.log('hello');
    
    return (
        
        <div className="algorithm">
            {props.match.params.id}
        </div>
    );
}

export default Algorithm;