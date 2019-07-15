import React from 'react';
import elips from './img/Ellipse 2.1.png';
import orange from './img/Ellipse.png';
import bulb from './img/Group.png';
import blueS from './img/Ellipse 2.png';

export default class Welcome extends React.Component{
    render(){
        return (
            <div id="wrapper">
                <div className="top">
                    <img src={`${elips}`} className="blue"/>
                    <img src={`${orange}`} className="orange"/>
                    <img src={`${bulb}`} className="bulb"/>
                </div>

                <div className="welcome">Welcome!</div>
                <p>Create your account to get started. After that, 
                    you can share books and make friends</p>
                    
                <Email/>
                <span>COUNTRY</span>
                <input className="info info3" type="text"></input>
                <span>AGE</span>
                <input className="info info3" type="number"></input>
                <button>NEXT STEP</button>
                <p>Already have an account?
                    <a href="#">Login</a>
                </p>
            </div>
        );   
    }
}

class Email extends React.Component{
    render(){
        return(
            <div>
                <div className="name">
         
                    <span required>NAME</span>
                    <input className="info info2 A" type="text"></input>
                    
                </div>
                <img src={`${blueS}`} className="blueS"/>
                <span required>USERNAME</span>
                <input className="info info2" type="text"></input>
            </div>
        );
    }
}