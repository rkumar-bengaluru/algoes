const SpringConfigServer = () => {
    return (
        <div className="container-fluid">
            <h5>Spring Cloud Config</h5>
            <p>Spring Cloud Config provides server-side and client-side support for externalized configuration in a distributed system. With the Config Server, you have a central place to manage external properties for applications across all environments. </p>
            <div className="row">
                <img width="900px" src='/algoes/img/spring.io/config-server.jpg'></img>
            </div>
            <div className="row">
                <ul>
                    <li>
                        <h6>Default</h6>
                        <p>The default implementation of EnvironmentRepository uses a Git backend, which is very convenient for managing upgrades and physical environments and for auditing changes</p>
                    </li>
                    <li>    
                        <h6>File System Backend</h6>
                        <p>There is also a “native” profile in the Config Server that does not use Git but loads the config files from the local classpath or file system (any static URL you want to point to with spring.cloud.config.server.native.searchLocations). To use the native profile, launch the Config Server with spring.profiles.active=native.</p>
                    </li>
                    <li>
                        <h6>Vault Backend</h6>
                        <p>Spring Cloud Config Server also supports Vault as a backend.To enable the config server to use a Vault backend, you can run your config server with the vault profile. For example, in your config server’s application.properties, you can add spring.profiles.active=vault.</p>
                    </li>
                    <li>
                        <h6>JDBC Backend</h6>
                        <p>Spring Cloud Config Server supports JDBC (relational database) as a backend for configuration properties. You can enable this feature by adding spring-jdbc to the classpath and using the jdbc profile or by adding a bean of type JdbcEnvironmentRepository. If you include the right dependencies on the classpath (see the user guide for more details on that), Spring Boot configures a data source.</p>
                    </li>
                    <li>
                        <h6>Redis Backend</h6>
                        <p>Spring Cloud Config Server supports Redis as a backend for configuration properties. You can enable this feature by adding a dependency to Spring Data Redis.</p>
                    </li>
                    <li>
                        <h6>AWS S3 Backend</h6>
                        <p>Spring Cloud Config Server supports AWS S3 as a backend for configuration properties. You can enable this feature by adding a dependency to the AWS Java SDK For Amazon S3.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SpringConfigServer;