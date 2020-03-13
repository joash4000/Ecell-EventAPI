import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div style={homestyle}>
               <h1 >Ecell Event-API Assignment</h1>
                <h3 >Tasks completed</h3>
            </div>
        )
    }
}

export default Home;

const homestyle={
    color:'#fff'
}
