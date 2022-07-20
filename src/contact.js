import React,{Component} from 'react';
import './contact.css';

class Contact extends Component{

    render(){
    return(
       <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select><br/>


    <input type="submit" value="Submit"></input>
       </div> 
    )
}
}
export default Contact;