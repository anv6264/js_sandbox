import React from 'react';
import ReactDom from 'react-dom';


function Circle({color, children}){
    const smth = children
   // const color = backgroundColor
   // ? <div style = {{backgroundColor: color}}>{{children}}</div>
   // : <div style = {{backgroundColor:'yellow'}}></div>;
    return(
        <div style={{
            
            borderRadius: '50%'
        }}>
             {smth}
        </div>
    )
};


function Rect({color, children}){
    const smth = children
    //const color = backgroundColor
    ? <div style = {{backgroundColor}}>{{children}}</div>
    : <div style = {{backgroundColor:'blue'}}></div>;
    return(
    <div style={{
        width: '100px',
        height: '100px',
        backgroundColor:'black'
    }}>
        {smth}
    </div>
    )
}

window.render = function render(){
    ReactDom.render( 
    <div>
        <Circle backgroundColor="purple">
            anything
        </Circle>
        <Rect backgroundColor="red">
            anthything else
        </Rect>

    </div>, document.getElementById('root'))
}