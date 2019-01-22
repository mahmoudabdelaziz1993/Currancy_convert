import React, { Component } from 'react'
import me from '../me.jpg'
class About extends Component {
    render() {
        return (
            <div className="container center">
                <h2 className="center"> <strong className="red-text">EX</strong>change</h2>
                <p>This site is just a test of my ability in React.js and the exchange rate produced here rely on Fixer Api and the currancy codes comes from restcountries api </p>
                <h4 className="center">Administrator</h4>
                <div className="center">
                        <div className="card center horizontal">
                            <div className="card-image">
                                <img src={me} alt="MahmoudAbdElaziz"></img>
                                   </div>
                                <div className="card-content">
                                    <p>+1 year of experience in IT industry in developing modern web applications using (MongoDB,Express,NodeJs,React.js) MERN stack , Elegant experience in using ( Git ,Github,installing Node packages from NPM ) and working with libraries like Socket.io , Jquery , mustache.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                )
            }
        }
export default About