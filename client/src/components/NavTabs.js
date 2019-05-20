import React from "react";
import { Link } from 'react-router-dom'

function NavTabs(props) {
  return (
    
      <ul id="behindTabs" className="nav nav-tabs justify-content-center row rounded-lg ">
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to="/Home"
            // href="#home"
            // onClick={() => props.handlePageChange("Home")}
            className={`${props.currentPage === "Home" ? "nav-link active" : "nav-link"}`}
          >
            Home
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/projects'
            // href="#projects"
            // onClick={() => props.handlePageChange("Projects")}
            className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            Projects
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/contact'
            // href="#contact"
            // onClick={() => props.handlePageChange("Contact")}
            className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
      </ul>
    
  )
}

export default NavTabs;