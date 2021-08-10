import React , {useState} from 'react'

function UseStateErrorEx() {
    let title="Random Title"

    const handleClick = ()=>{
        console.log(title);
        title="My name is Sakshi";
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick} >Change Title</button>
        </React.Fragment>


        // <div>
        //     <h2>Use State Error Example</h2>
        // </div>

        
    )
}

export default UseStateErrorEx
