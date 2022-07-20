import React,{Component} from 'react';
import './App.css';
import Contact from './contact';
import Footer from './footer';
import Home from './home';
import NavBar from './navbar';
import {Routes,Route} from 'react-router-dom';
import Form from './form';


class App extends Component{
    render(){
        return( 
         <div>   
          <NavBar/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/contact" element={<Contact/> } />
            <Route path="/Login" element={<Form/>}/>
          </Routes> 
         
          <Footer/>


         </div>
        )
    }
}


export default App;
