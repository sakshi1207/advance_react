import React from 'react';
import { data } from './data';

function UseStateArray() {
    const [people,setPeople] = React.useState(data)
    return (
        <>
        {
            people.map((person) => {
                // console.log(person);

                const {id,name}=person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                    </div>
                    
                )

            }
            )}
            <button className="btn" onClick={() =>setPeople([])}>Clear Name</button>
          
        </>
    )
}

export default UseStateArray
