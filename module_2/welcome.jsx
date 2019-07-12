import React from 'react';

export default class Welcome extends React.Component{
    render(){
        return (
            <div>
                <div className="welcome">Welcome!</div>
                <p>Create your account to get started. After that, 
                    you can share books and make friends</p>
                <Email/>
                <span>COUNTRY</span><br/>
                <input className="info" type="text"></input><br/>
                <span>AGE</span><br/>
                <input className="info" type="number"></input><br/>
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
                <span required>NAME</span><br/>
                <input className="info info2" type="text"></input><br/>
                <span required>USERNAME</span><br/>
                <input className="info info2" type="text"></input><br/>
            </div>
        );
    }
}