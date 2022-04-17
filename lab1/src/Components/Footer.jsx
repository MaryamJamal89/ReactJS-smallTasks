import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
        <>
            <footer class="text-center text-lg-start bg-light text-muted fixed-bottom">
                {/* <section class="d-flex justify-content-center justify-content-lg-between p-2 border-bottom"
                    style={{ "backgroundColor": "rgba(10, 15, 20, 0.8)", }}>
                    <div class="me-5 d-none d-lg-block">
                        <span class="text-white">Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f text-white"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter text-white"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google text-white"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram text-white"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin text-white"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github text-white"></i>
                        </a>
                    </div>
                </section> */}

                <div class="text-center p-2 text-white bg-dark">
                    © 2022 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MrymGamal.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;