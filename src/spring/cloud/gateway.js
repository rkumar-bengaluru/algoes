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
            <div className="row">
                <h5>@EnableEurekaClient</h5>
                <p>When a client registers with Eureka, it provides meta-data about itself — such as host, port, health indicator URL, home page, and other details. Eureka receives heartbeat messages from each instance belonging to a service. If the heartbeat fails over a configurable timetable, the instance is normally removed from the registry.</p>
                <p>In this example <strong>BMT-API-GATEWAY is registered to EurekaServer</strong></p>
            </div>
            <div className="row">
                <h5>@EnableHystrix</h5>
                <p>Hystrix is an implementation of the Circuit Breaker pattern by Netflix. The @EnableHystrix annotation require a specific implementation, if Hystrix is not on the classpath it will fail.</p>
            </div>
            <div className="row">
                <h5>@EnableCircuitBreaker</h5>
                <p>The @EnableCircuitBreaker annotation will scan the classpath for any compatible Circuit Breaker implementation.@EnableCircuitBreaker allows for the evolution of the Spring Cloud..</p>
            </div>
            <div className="row">
                <h5>RequestRateLimiter </h5>
                <p>RequestRateLimiter is one of the many gateway filters. The implementation determines whether a request is allowed to proceed or has exceeded its limit. </p>
                <ul>
                    <li>
                        <h6>redis-rate-limiter.replenishRate</h6>
                        <p>decides how many requests per second a user is allowed to send without any dropped requests.This is the rate that the token bucket is filled.</p>
                    </li>
                    <li>
                        <h6>redis-rate-limiter.burstCapacity</h6>
                        <p>is the maximum number of requests a user is allowed to do in a single second. This is the number of tokens the token bucket can hold. Setting this value to zero will block all requests.</p>
                    </li>
                    <li>
                        <h6>redis-rate-limiter.requestedTokens</h6>
                        <p>the requestedTokens property sets how many tokens a request costs.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SpringGateway;