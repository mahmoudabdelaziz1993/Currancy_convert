import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
             <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                            <div className="center " id="lab_social_icon_footer">
                            © 2019 MahmoudAbdelaziz
                            <br/>
                                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                                <a href="mailto:#"><i id="social-em" className="fa fa-linkedin-square fa-3x social"></i></a>
                            </div>
                        </div>
                    </div>
                
                    </footer>
                    )
                }
}
export default Footer