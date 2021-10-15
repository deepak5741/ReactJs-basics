import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

const Nav = () => {
        return (
                <nav>

                        <div className="inner-nav" >
                                <div className="brand" ><h1>HINDI</h1></div>
                                <div className="allLinks" >

                                        <ul>
                                                <li>
                                                        <Link className="links" to="/" >Home</Link></li>
                                                <li> <Link className="links" to="/about" >About</Link></li>
                                                <li> <Link className="links" to="/contact" >Contact us</Link></li>

                                        </ul>


                                </div>


                        </div>
                </nav>


        )
}

export default Nav
