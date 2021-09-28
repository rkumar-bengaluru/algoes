const SpringIntro = () => {
    return (
        <div>
            <h6>Spring Boot</h6>
            <p>
                We are going to build an application using various features of <a href="https://spring.io/" target="_blank">Spring.io</a>. 
            </p>
            <h6>Design Overview</h6>
            <div className="row">
                <div className="col"><img width="500" src='/algoes/img/spring.io/p.jpg'></img></div>
                <div className="col">
                    <ul>
                        <li>@LocalShopApplication - Springboot application</li>
                        <li>@OrderController &amp; @AnalyticsController - RESTful Web Service</li>
                        <li>@OrderService &amp; @AnalyticsService - Business Service Facade</li>
                        <li>@RestTemplate - Rest Client</li>
                        <li>@WebFlux - sync, async, and streaming scenarios </li>
                        <li>@LocalShopRepository - @Repository to access data </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SpringIntro;