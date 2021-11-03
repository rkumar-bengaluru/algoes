const SpringGateway = () => {
    return (
        <div className="container-fluid">
            <h5>Spring Cloud Gateway</h5>
            <p>This project provides an API Gateway built on top of the Spring Ecosystem, including: Spring 5, Spring Boot 2 and Project Reactor. Spring Cloud Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting concerns to them such as: security, monitoring/metrics, and resiliency.</p>
            <ul>
                <li><strong>Route--&gt;</strong> The basic building block of the gateway. It is defined by an ID, a destination URI, a collection of predicates, and a collection of filters. A route is matched if the aggregate predicate is true.</li>
                <li><strong>Predicate--&gt;</strong> This is a Java 8 Function Predicate. The input type is a Spring Framework ServerWebExchange. This lets you match on anything from the HTTP request, such as headers or parameters.</li>
                <li><strong>Filter --&gt;</strong> These are instances of GatewayFilter that have been constructed with a specific factory. Here, you can modify requests and responses before or after sending the downstream request</li>
            </ul>
            <div className="row">
                <img width="900px" src='/algoes/img/spring.io/gateway.jpg'></img>
            </div>
        </div>
    )
}
export default SpringGateway;