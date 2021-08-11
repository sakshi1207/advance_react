//rafce and hit enter
import React,{useState} from 'react'

//spme basic rules of hooks
//useState is one of the hooks
//component name must be in upper case
//must be in function/component body
//can not call conditionally
//react fragment can also be written as <> </>


function UseStateBasic() {
    // console.log(useState);
    // console.log(useState("Hola world"));
    const [day, setDay] = useState("Today is sunny day");
    const handleClick = () => {
        if(day ==="Today is sunny day"){
            setDay("Today is Rainy Day")
        }
        else{   
        setDay("Today is sunny day")
        }
    };

    return (
        
        <div>
            <div>
            <h1>{day}</h1>
            <button type="button" className="btn" onClick={handleClick} >Change Day</button>
            </div>
        </div>
    )
}

export default UseStateBasic
