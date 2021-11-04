const EurekaServer = () => {
    return (
        <div className="container-fluid">
            <h5>Spring Discovery Service</h5>
            <p>Service Discovery: an embedded Eureka server can be created with declarative Java configuration</p>
            <div className="row">
                <img width="900px" src='/algoes/img/spring.io/eureka-server.png'></img>
            </div>
            <div className="row">
                <h5>@LoadBalanced</h5>
                <p>If there are multiple SEAT-MAP service registered with Eureka Server, then this annotation
                    will ensure load balancing among them.
                </p>

            </div>
            <div className="row">
                <h6>Feign</h6>
                <p>Feign is a declarative web service client. It makes writing web service clients easier. To use Feign create an interface and annotate it. It has pluggable annotation support including Feign annotations and JAX-RS annotations</p>
                <code>@EnableFeignClients</code>
            </div>
        </div>
    )
}
export default EurekaServer;