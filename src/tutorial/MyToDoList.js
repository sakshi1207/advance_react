import React,{useState} from 'react'

function MyToDoList() {
    const [itemName,setItemName] = useState([" "]);
    const [lists,setList] = useState([]);


    // const deleteItem = (id) => {
    //     let setItem = lists.filter((items) => items.id != id)
    //     setList(setItem)
    // }

    const addList = (e) => {
        e.preventDefault();
        if(itemName){
        console.log("adding");

        const items={itemName:itemName}
        console.log(items);
        setList((lists) =>{
            return[...lists,items]
        });
        setList('');
    }else{
        console.log('write something in list');
    }
    console.log(itemName);
        
    }

    return (
        <>
        <h2>My ToDo List</h2>
        
        <article>
            <form className='form' onSubmit={addList}>
                <div className='form-control'>
                    <input type="text" id="itemName" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>

                </div>
                <div className='form-control'>
                    <button type="submit">Add to List</button>

                </div>
            </form>
            {
                lists.map( (items)=>{
                    const {itemName} = items;
                    return(
                        <div className="item" >
                            <h4>{itemName}</h4>
                            
                        {/* <button onClick={() => deleteItem(id)}>Delete</button> */}
                        </div>
                    )
                })
            }
        </article>
        </>
    )
}

export default MyToDoList
