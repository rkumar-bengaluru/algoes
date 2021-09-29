const WebFlux = () => {
    const restcode = '';
    return (
        <div className="row">
            <h6>Reactive Web</h6>
            <p>
                WebFlux is a non-blocking web stack to handle concurrency with a small number of threads
                and scale with fewer hardware resources. Spring WebFlux provides a choice of two programming models:
            </p>
            <ul>
                <li>
                    <h6>Annotated Controllers : </h6>
                    <p>Consistent with Spring MVC and based on the same annotations from the spring-web module. Both Spring MVC and WebFlux controllers support reactive (Reactor and RxJava) return types, and, as a result, it is not easy to tell them apart. One notable difference is that WebFlux also supports reactive @RequestBody arguments.</p>
                </li>
                <li>
                    <h6>Functional Endpoints : </h6>
                    <p>Lambda-based, lightweight, and functional programming model. You can think of this as a small library or a set of utilities that an application can use to route and handle requests. The big difference with annotated controllers is that the application is in charge of request handling from start to finish versus declaring intent through annotations and being called back.</p>
                </li>
            </ul>
        </div>
    )
}
export default WebFlux;