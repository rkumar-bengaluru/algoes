import { useEffect, useState } from "react"

const SpringSecurity = () => {


    const home = () => {
        return (
            <div className="row">
                <h5>Spring Security</h5>
                <p>Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.</p>
                <p>Topics covered for Spring security are below:</p>
                <ul>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 1)}>Basic Authentication</a>
                        <p>Each Request must contain username and password</p>
                    </li>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 2)}>Form Basic Authentication</a>
                        <p>User authenticate once, the server attaches JESSIONID, subsequent request
                            is authenticated based on the JESSIONID.
                        </p>
                    </li>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 3)}>Cross Site Request Forgery(CSRF)</a>
                        <p>Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated</p>
                        <p>Enable for any resource access via web browsers.</p>
                    </li>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 4)}>Authentication Provider</a>
                        <p>Integrate Application User Repository with application authentication provider.</p>
                    </li>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 5)}>JWT Authentication</a>
                        <p>Authenticate once with JWT Filter and attaches JWT token to response,
                            subsequent request is authenticated and authroized with JWT token.
                        </p>
                        <p>Good for REST API securtity.</p>
                    </li>
                    <li>
                        <a href="" onClick={(e) => eventHandler(e, 6)}>JWT Token Verifier</a>
                        <p>Servlet filter to verify if the passed JWT token is trust worthy.
                            before user is allowed to access the desired server resource.
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
    const [def, setDef] = useState(home);

    const basicAuth = () => {
        return (
            <>
                <div className="row">
                    <h5>Basic Authentication</h5>
                </div>
                <div className="row">
                    <p>Trigger to enable basic authentication is to configure <code>HttpSecurity.httpBasic()</code></p>
                    <p>There are 2 microservices</p>
                    <ul>
                        <li>Partner Service (/partner/create,/partner/&#123;id&#125;)</li>
                        <li>Search Service (/search/all,/search/movie/&#123;id&#125;,/search/theatre/&#123;id&#125;)</li>
                    </ul>
                </div>
                <div className="row">
                    <img width="900px" src='/algoes/img/spring.io/basic-auth.jpg'></img>
                </div>
                <div className="row">
                    <p>There are 2 Roles (ADMIN and PUBLIC). ADMIN can access partner resource 
                        and search resource, however PUBLIC role can only access search resource.
                    </p>
                </div>
                <code>http.authorizeRequests()
			.antMatchers("/search/**")
			.hasAnyRole(UserRoles.ADMIN.name(),UserRoles.PUBLIC.name())
			.antMatchers("/partner/**")
			.hasRole(UserRoles.ADMIN.name());</code>
                <div className="row">
                    <a href="" onClick={(e) => eventHandler(e, 0)}>Back</a>
                </div>

            </>

        )
    }

    function eventHandler(e, type) {
        e.preventDefault();
        console.log(type);
        switch (type) {
            case 0:
                setDef(home);
                break;
            case 1:
                setDef(basicAuth);
                break;
            default:
                setDef(<code>TODO</code>);
                break;
        }
    }
    return (
        <div className="container-fluid">
            {def}
        </div>
    )
}

export default SpringSecurity;