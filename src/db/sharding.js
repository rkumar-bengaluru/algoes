const Sharding = () => {
    return (
        <div className="container-fluid">
            <h5>Sharding</h5>
            <p><code>Sharding</code> is the practice of optimizing database by separating the rows
                or columns of large tables into smaller tables. The smaller tables are called
                <code> shards </code> or <code>partitions</code></p>
            <p><strong>Horizontal Sharding - </strong> If we split the smaller tables with same schema and unique records, then it is
                referred as <code>Horizontal Sharding</code>
            </p>

            <p><strong>Vertical Sharding - </strong> If we split the smaller tables with subset of schema of original table, then it
                is referred as <code>Vertical Sharding</code>
            </p>
            <h6>Example Original Table</h6>
            <div className="row">
                <div className="col-sm-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Raj</td>
                                <td>Aryan</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Rupak</td>
                                <td>Kumar</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Amrita</td>
                                <td>Sinha</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-7 border m-2">
                    <div className="row"><strong>Vertical Sharding</strong></div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row"><strong>Vertical Sharding (01)</strong></div>
                            <div className="row">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Raj</td>
                                            <td>Aryan</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Rupak</td>
                                            <td>Kumar</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td >Amrita</td>
                                            <td>Sinha</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row"><strong>Vertical Sharding (02)</strong></div>
                            <div className="row">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cold-sm-5 border m-2">
                    <div className="row"><strong>Horizontal Sharding</strong></div>
                    <div className="row"><strong>Horizontal Sharding (01)</strong></div>
                    <div className="row">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Raj</td>
                                    <td>Aryan</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Rupak</td>
                                    <td>Kumar</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row"><strong>Horizontal Sharding (02)</strong></div>
                    <div className="row">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">3</th>
                                    <td >Amrita</td>
                                    <td>Sinha</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h6>Sharding and Partition</h6>
            <p>
                Sharding and partitioning are both about breaking up a large data set into smaller subsets.
                The difference is that sharding implies the <code>data is spread across multiple computers</code> while
                partitioning does not. Partitioning is about grouping subsets of data <code>within a single database
                instance.</code> In many cases, the terms sharding and partitioning are even used synonymously,
                especially when preceded by the terms “horizontal” and “vertical.” Thus, “horizontal sharding”
                and “horizontal partitioning” can mean the same thing.
            </p>
        </div>
    )
}

export default Sharding;