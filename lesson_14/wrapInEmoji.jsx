import React from 'react';

var randomEmoji = require('random-emoji');

console.log(randomEmoji.random({count: 5}));

function Emoji({children}){
    const pic = children;
    
    return(
        <div>
            {pic}
            <span>Something</span>
            {pic}
        </div>
    )
}


class WrapInEmoji extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            
            <div>My Super Component!
                {children}
            </div>
        )
    }
 }
 