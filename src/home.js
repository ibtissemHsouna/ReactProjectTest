import React,{Component} from 'react';
import Quotes from './quotes';
import SecondGrid from './secondgrid';
import Start from './start';
import FirstGrid from './firstgrid';

class Home extends Component{
    render(){
        return(
           <div>
            <Start/>
            <FirstGrid/>
            <SecondGrid/>
            <Quotes/>
            </div> 
        )
    }
}
export default Home;