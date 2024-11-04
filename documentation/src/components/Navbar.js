import React from 'react'
import './Navbar.css'
import {NavbarData} from './NavbarData.js'
import {Link} from 'react-scroll';


const scrollDuration = 500

const Navbar = () => {
  return (
    <div id = "navbar">
        <ul id = "sections">
        {NavbarData.map((item, index) => {
            return (
                <li>
                <div className = {item.cName} key = {index}>
                    <Link to = {item.path} smooth = {true} duration = {scrollDuration} style = {{fontSize: "24px"}}>{item.title}</Link>
                    <ul className = "children">
                        {item.children.map((child, index) => {
                            return (
                                <li className = {child.cName} key = {index} style = {{fontSize: "18px"}}>
                                    <Link to = {child.path} smooth = {true} duration = {scrollDuration}>{child.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Navbar