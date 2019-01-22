import React ,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                        <Link to='/' className="brand-logo">Home</Link>
                        <ul id='nav-mobile' className="right hide-on-med-and-down">
                            <li><NavLink to="/About" >About</NavLink></li>
                        </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar