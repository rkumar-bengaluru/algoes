const ExpressHeader = (props) => {
    return (
        <>
            <h6>{props.name}</h6>
            <p>{props.description}</p>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">Property</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Default</th>
                    </tr>
                </thead>
                <tbody>
                    {props.options.map((opt, index) => {
                        return (
                            <tr>
                                <td>{opt.name}</td>
                                <td>{opt.description}</td>
                                <td>{opt.type}</td>
                                <td>{opt.default}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ExpressHeader;