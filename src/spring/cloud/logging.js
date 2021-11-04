const SpringDistributedLogging = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <h5>Distributed Log Tracing</h5>
                <p>Microservices architecture involve multiple services which interact with each other. So a functionality may involve call to multiple microservices. Usually for systems developed using Microservices architecture, there are many microservices involved. These microservices collaborate with each other.</p>
                <ul>
                    <li>
                        <p><code>Spring Cloud Sleuth</code> is used to generate and attach the trace id, span id to the logs so that these can then be used by tools like Zipkin and ELK for storage and analysis</p>
                    </li>
                    <li>
                        <p><code>Zipkin</code> is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in service architectures. Features include both the collection and lookup of this data</p>
                    </li>
                </ul>
            </div>
            <div className="row">
                <img width="900px" src='/algoes/img/spring.io/distributed-logging.jpg'></img>
            </div>
            <h5>ELK Stack</h5>
            <div className="row">
                <img width="900px" src='/algoes/img/spring.io/ELK.jpg'></img>
            </div>
        </div>
    )
}
export default SpringDistributedLogging;