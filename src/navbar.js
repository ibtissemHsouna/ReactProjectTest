import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(   
<div className="w3-top">
  <div className="w3-bar w3-red w3-card w3-left-align w3-large">
    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
    <a    href="https://reactjs.org"  target="_blank" rel="noopener noreferrer" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
    <a    href="https://reactjs.org"  target="_blank" rel="noopener noreferrer" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a>
    <a    href="https://reactjs.org"  target="_blank" rel="noopener noreferrer" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a>
   <Link to="/">Home</Link>
   <Link to="/contact">Contact</Link> 
  <Link to="/Login">Login</Link> 
  </div>
</div> 
        )
    }
}

export default NavBar;