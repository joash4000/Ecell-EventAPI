import React,{Component} from 'react';
import Header from './Header';
import Home from './Home';
import Event from './Event';
import Eventinfo from './Eventinfo';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
class  App extends Component{

   render(){
  return (
    <BrowserRouter>
        <div className="App">
          <div className="container">
          
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/eventspage" exact component={Event} />
            <Route path="/eventspage/:id" component={Eventinfo} />
            
          </div>
        </div>
      </BrowserRouter>
  );
}
}

export default App;
