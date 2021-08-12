import React from 'react'
import axios from 'axios'

function LearningJSON() {
    const handleClick=(b) =>{
        const promise =axios.post("http://localhost:4000/users",{
            name:"paras"},
        {headers:{
            ['content-type']:'application/json'
        }
    })

    promise.then(response =>{
        console.log(response);
    })
    promise.catch(error =>{
        console.log(error);
    })
    let c=b;
    console.log(c);
}

    // const getUsers = (e) =>{}

    return (
        <>
        <button type="button" className="btn" onClick={handleClick}>post users</button>
        {/* <button type="button" className="btn" onClick={getUsers}>get users</button> */}

        </>
    )
}

export default LearningJSON
