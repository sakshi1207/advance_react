import React,{useState} from 'react'
//we want to have input fiels ---email,username
// we want button
// accept data and store in variable
// initial state will be empty
//we will use type submit but its same as onclick functionality
function Forms() {
    const [firstName,setFirstname] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();//use to prevent default behaviour of our browser
        console.log('hello world');
    }
    return (
        <>
        <article>
            <form className='form' onSubmit={handleSubmit}>

            <div className='form-control'>
                <label htmlFor="firstname"> Name :</label>
                <input type="text" id="firstName" name="firstname" value={firstName} onChange={(e) => setFirstname(e.target.value)}></input>
            </div>

            <div className='form-control'>
                <label htmlFor="email"> Email :</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <button  type="submit">Submit</button>
            </form>
        </article>

        </>
    )
}

export default Forms
