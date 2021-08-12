import React, { useState, useReducer } from 'react'
import Modal from './modal'
import { data } from "../data"

function Index() {
    const [people, setPeople] = useState(data)
    const [name, setName] = useState('')
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) { // if their is a namethen showmodal willl be true
            setShowModal(true);
            setPeople([...people, { id: new Date().getTime().toString(), name }])
            setName('')
        } else {
            setShowModal(true)
        }
    }
    return (
        <>
            <h2>Index pages</h2>
            {showModal && <Modal />} // if this show modal is true only then it will work below code
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <button type="submit">add user</button>
            </form>
            {
                people.map((person) => {
                    return <>
                        <div key={person.id}>
                            <h4>{person.name}</h4>
                        </div>
                    </>
                })
            }
        </>
    )
}

export default Index
