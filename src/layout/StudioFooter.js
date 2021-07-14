// Dependencies
import React from 'react';
import './footer.css'

const StudioFooter = props => {

    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="https://www.facebook.com/vlocal.s/" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-facebook"></i></a>
                    <a href="https://twitter.com/vlocalshop" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-twitter"></i></a>
                    <a href="https://in.pinterest.com/vlocalshop/_saved/" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-pinterest"></i></a>
                    <a href="https://www.instagram.com/vlocalshop.in12/" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone=919113584362" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-whatsapp"></i></a>


                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.vlocalshop.in/" target="_blank" rel="noopener noreferrer">Home</a></li>
                    <li className="list-inline-item"><a href="https://www.vlocalshop.in/blog/about.html" target="_blank" rel="noopener noreferrer">About</a></li>
                    <li className="list-inline-item"><a href="https://www.vlocalshop.in/blog/techblogs.html" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li className="list-inline-item"><a href="https://www.vlocalshop.in/blog/contact.html" target="_blank" rel="noopener noreferrer">Contact</a></li>
                </ul>
                <p className="copyright">JavaScript Studio © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};


export default StudioFooter;
