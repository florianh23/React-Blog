import "./footer.css"

export default function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-3">
                        <h2 className="footer-title text-center">CONTACT</h2>
                        <div className="secondary-title">
                            <div class="email text-center">
                                <i class="fas fa-envelope text-primary"></i>
                                    flohein@yahoo.de
                            </div>
                        </div> 
                    </div>
                    <div className="col-3">
                        <h2 className="footer-title text-center">SOCIAL</h2>
                        <div className="tags social">
                        <div className="d-flex flex-wrap text-center">
                            <a href="/" className="nav-link btn bg-light"><i class="fab fa-instagram"></i></a>
                            <a href="/" className="nav-link btn bg-light"><i class="fab fa-linkedin"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h2 className="footer-title text-center">INFORMATION</h2>
                        <div className="secondary-title">
                            <div class="flex text-center">
                                <a href="">Impressum</a>
                        
                                <a href="">Datenschutz</a>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="copyrights">
                <p class="text-center text-secondary display-2">
                    © 2021 <a href="#" class="text-primary nostyle">vasc.</a> - Personal Blog. All rights reserved.
                </p>
            </div>

            </div>


        </div>
        
    )
}
