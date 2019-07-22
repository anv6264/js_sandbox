import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Store } from './store';
import * as Constants from './actions';

function List(props){
    let newName = '';

    return (
        
        <div>
            {props.count}
            <button onClick={props.increment}>Increment</button>
            {props.list.map(student => (
                <div key={student.name} 
                     onClick={props.remove.bind(null, student.name)}>
                    {student.name}
                </div>
            ))}

            <input onChange={(event) => newName = event.target.value}></input>
            <button onClick={() => props.add(newName)}>ADD</button>

        </div>
    );
}

const ListConnected = connect(
    (state) => ({ 
        list: state.students,
        count: state.counter.count, 
    }),
    (dispatch) => ({ 
        remove: (name) => dispatch({ type: Constants.REMOVE, name }),
        add: (name) => dispatch({ type: Constants.ADD, name }),
        increment: () => dispatch({ type: Constants.COUNTER_INCREMENT})
    }),
)(List);

ReactDom.render((
    <Provider store={Store}>
    <ListConnected/>
    </Provider>
), document.getElementById('root'));

