import React, { Component } from 'react';
import './Event.css';
import { Link } from 'react-router-dom';
class Event extends Component {
     state = {
        eventitems: []
      }
       
      componentDidMount() {
        fetch('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
            .then(res => res.json())
            .then((eventdata) => {
                this.setState({ eventitems: eventdata.data })
                console.log(this.state.eventitems)
            })
            .catch(console.log)
    }
     render() {
        return (
            <React.Fragment>
            <ol>
              {this.state.eventitems.map(item =>
             <li key={item.id}>
             <Link to={'/eventspage/'+item.id} style={itemlink}>
             <b>{item.name}</b>
             </Link>
             </li> )}
            
            </ol>
           </React.Fragment>

            );

    }
}
const itemlink = {
    color: '#fff',
    
  }

export default Event;
