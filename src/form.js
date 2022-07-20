import React,{Component} from 'react';
import './form.css';
class Form extends Component{
    render(){
        return(
            <div>
    <div className="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me/</input> 
            </label>
    </div>

    <div className="container" style="background-color:#f1f1f1">
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
    </div>

    </div>
        )
    }
}
export default Form;