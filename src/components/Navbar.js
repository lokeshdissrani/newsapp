import React, { Component } from 'react'
import india from './icons8-india-flag-96.png'
import pakistan from './icons8-pakistan-96.png'
import germany from './icons8-germany-flag-96.png'
import uae from './icons8-united-arab-emirates-96.png'
import indonesia from './icons8-indonesia-96.png'
import newzealand from './icons8-new-zealand-96.png'
import china from './icons8-china-96.png'
import usa from './icons8-usa-flag-96.png'
import russia from './icons8-russian-federation-96.png'
import japan from './icons8-japan-96.png'
import business from './icons8-bonds-96.png'
import entertainment from './icons8-entertainment-96.png'
import general from './icons8-smartphone-96.png'
import health from './icons8-health-96.png'
import science from './icons8-chemistry-96.png'
import sports from './icons8-exercise-96.png'
import technology from './icons8-technology-96.png'

export class Navbar extends Component {
    handleclickcountry = async (a) =>{
        this.props.updatecountry(a)
    }
    handleclickpage = async (b) =>{
this.props.updatepage(b)
    }
    handleclickcategory = async (c) =>{
        this.props.updatecategory(c)
    }

    render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="btn-group mx-1 float-end">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Country
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("in")}} href="#"><img style={{width:"30px", height:"30px"}} src={india}></img> India</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("ch")}} href="#"><img style={{width:"30px", height:"30px"}} src={china}></img> China</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("us")}} href="#"><img style={{width:"30px", height:"30px"}} src={usa}></img> USA</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("ru")}} href="#"><img style={{width:"30px", height:"30px"}} src={russia}></img> Russia</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("ae")}} href="#"><img style={{width:"30px", height:"30px"}} src={uae}></img> UAE</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("nz")}} href="#"><img style={{width:"30px", height:"30px"}} src={newzealand}></img> New Zealand</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("jp")}} href="#"><img style={{width:"30px", height:"30px"}} src={japan}></img> Japan</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("id")}} href="#"><img style={{width:"30px", height:"30px"}} src={indonesia}></img> Indonesia</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("de")}} href="#"><img style={{width:"30px", height:"30px"}} src={germany}></img> Germany</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcountry("pk")}} href="#"><img style={{width:"30px", height:"30px"}} src={pakistan}></img> Pakistan</a></li>
  </ul>
</div>
<div className="btn-group mx-1 float-end">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("technology")}} href="#"><img style={{width:"30px", height:"30px"}} src={technology}></img> Technology</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("sports")}} href="#"><img style={{width:"30px", height:"30px"}} src={sports}></img> Sports</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("science")}} href="#"><img style={{width:"30px", height:"30px"}} src={science}></img> Science</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("health")}} href="#"><img style={{width:"30px", height:"30px"}} src={health}></img> Health</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("general")}} href="#"><img style={{width:"30px", height:"30px"}} src={general}></img> General</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("entertainment")}} href="#"><img style={{width:"30px", height:"30px"}} src={entertainment}></img> Entertainment</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickcategory("business")}} href="#"><img style={{width:"30px", height:"30px"}} src={business}></img> Business</a></li>
  </ul>
</div>
<div className="btn-group mx-1 float-end">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Page
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>{this.handleclickpage("3")}} href="#">3</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickpage("6")}} href="#">6</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickpage("9")}} href="#">9</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickpage("12")}} href="#">12</a></li>
    <li><a className="dropdown-item" onClick={()=>{this.handleclickpage("15")}} href="#">15</a></li>
    
  </ul>
</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar
