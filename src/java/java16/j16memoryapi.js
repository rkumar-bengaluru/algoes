const Java16ForeignMemoryApi = (props) => {
    return (
        <div className="container-fluid">
            <h6>JEP 393: Foreign-Memory Access API (Third Incubator)</h6>
            <p>The Foreign-Memory Access API was first proposed by JEP 370 and targeted to Java 14 in late 2019 as an incubating API, and later re-incubated by JEP 383 which was targeted to Java 15 in mid 2020. This JEP proposes to incorporate refinements based on feedback, and to re-incubate the API in Java 16. The following changes are included in this API refresh:</p>
            <ul>
                <li>A clearer separation of roles between the MemorySegment and MemoryAddress interfaces;</li>
                <li>A new interface, MemoryAccess, which provides common static memory accessors so as to minimize the need for the VarHandle API in simple cases;</li>
                <li>Support for shared segments; and</li>
                <li>The ability to register segments with a Cleaner.</li>
            </ul>
            <p>Many Java programs access foreign memory, such as Ignite, mapDB, memcached, Lucene, and Netty's ByteBuf API.</p>
            <div className="row p-2">

            </div>
        </div>
    )
}
export default Java16ForeignMemoryApi;