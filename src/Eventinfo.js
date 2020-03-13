import React, { Component } from 'react';
import axios from 'axios';
import './eventdata.css';
class Eventinfo extends Component {
    state={
    eventdata:null,
    };
    componentDidMount(){
        console.log(this.props)
        let currentid=this.props.match.params.id;
        axios.get('https://ecell.nitrr.ac.in/events/list/2019/')
          .then(res =>{
           this.setState({
            eventdata:res.data.data[currentid-12]
        })
        console.log(res.data)
        console.log(this.state.eventdata)
    })
    };
    render() {
        const  eventdatas=this.state.eventdata ?(
            <div style={eventbody}>
              <h4 style={namestyle}>{this.state.eventdata.name}</h4>
              <img  src={this.state.eventdata.icon_url} width="280" height="280"/>
              <p>{this.state.eventdata.details}</p>
              <h2>Email : {this.state.eventdata.email}</h2>
              <p><h2>Year : {this.state.eventdata.year}</h2></p>
              <p><h2>Registered : {this.state.eventdata.no_of_ppl_registered}</h2></p>
              <p><h2>Date : {this.state.eventdata.date}</h2></p>
              <p><h2>Time : {this.state.eventdata.time}</h2></p>
              </div>
        ):(
            <div>Loading Posts.....</div>
        )
        return (
            <div>
            {eventdatas}
            </div>
        );
    }
}

export default Eventinfo;
const eventbody={
    color:'#fff'
}

const namestyle={
    fontSize: '60px',
    color:'#fff'
}
