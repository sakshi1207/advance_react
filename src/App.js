import React from 'react';
import UseStateCounter from './tutorial/UseStateCounter';
//import UseStateObject from './tutorial/UseStateObject';
//import UseStateArray from './tutorial/UseStateArray';
//import UseStateBasic from './tutorial/UseStatebasic';
// import UseStateErrorEx from './tutorial/useStateErrorEx';

function App(){
    return(
        <div className='container'>
            <h2>Advance React js</h2>
            {/* <UseStateErrorEx /> */}
            {/* <UseStateBasic /> */}

            {/* <UseStateArray /> */}
       {/* <UseStateObject />      */}
       <UseStateCounter />
        </div>
    );
}

export default App;