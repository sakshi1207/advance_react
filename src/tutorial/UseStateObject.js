import React,{useState} from 'react'

function UseStateObject() {
    const [person,setPerson] = useState({
        name:"sakshi",
        age:20,
        message:"I am good"
    });
    const [name,setName] =useState("Paras")
    const [age,setAge] =useState(30)
    const [message,setMessage] =useState("Welcome to my world")

    const changeMessage = () => {
        setPerson({...person,message:"Bad"});
        setMessage("hfkjehk")
    }
    return (
        <div>
            {/* <h3>{person.name}</h3> */}
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default UseStateObject
