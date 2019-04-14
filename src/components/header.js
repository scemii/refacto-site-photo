import { Link } from "gatsby"
import React, { Component } from "react"
import logo from "../images/logo.png"


class Header extends Component {

  state = { navbarOpen:false,
            css:'collapse navbar-collapse',
            links: [
                {
                  id:1,
                  path:'/',
                  text:'home'
                },
              {
                id:2,
                path:'/photos',
                text:'pictures'
              },
              {
                id:3,
                path:'/about',
                text:'about'
              },
              {
                id:4,
                path:'/contact',
                text:'contact'
              }
            ]
   };

   navbarHandler = () => {
      this.state.navbarOpen?
      this.setState(
        {navbarOpen:false,css:"collapse navbar-collapse"})
        : this.setState(
          {navbarOpen:true,css:"collapse navbar-collapse show"});
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link
          to="/"
          className="navbar-brand"
          style={{ padding: 30 }} 
        >
        <img style={{ margin: 0 }} src={logo} alt="logo"/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
        </button> 
        <div className={this.state.css}>
             <ul className="navbar-nav max-auto" style={{ display:"auto"}}>
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                  </li>
                )
              })
              }
             </ul>
      </div>
    </nav>
    )
  }
} 

export default Header
