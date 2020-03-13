import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
  return (
    <header style={headerStyle} >
      <h1>Event Explorer Task</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/eventspage">Events</Link>
    </header>
  )
}
}

const headerStyle = {
 /* background:'#4f5052',*/
  background: '#79a4d9',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin:'0px'
}

const linkStyle = {
  color: '#fff',
  fontSize:'20px',
  textDecoration: 'none', 
  marginRight:10, 
  marginLeft:10,
  textAlign: 'left',
}

export default Header;