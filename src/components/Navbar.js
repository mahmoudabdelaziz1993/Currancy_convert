import React ,{Component} from 'react'
import logo from '../logo.jpg';
import {Link,NavLink} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to='/' className="brand-logo">Home</Link>
                        <ul id='nav-mobile' className="right hide-on-med-and-down">
                            <li><NavLink to="/About" >About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar