/* import React, { useState } from 'react';

const Todolist = () => {
    const [num,setNum] = useState(0)

    const incNum =() => {
        setNum(num + 1);
    };

    const decNum = () => {
        if(num > 0){
            setNum(num -1)
        }
        
    }
        return(
        <> 
        <div className="main_div">
            <h1> 0</h1>
            <div className=" btn_div">
                <button onClick={incNum} > IncreseCount</button>
                <button onClick={decNum}> DecreseCount</button>
            </div>
        </div>
        </>

    )
}

export default Todolist;*\



/*import  { useState } from 'react';


const [userInput, setInput] = useState(" ")
const [list, setList] = useState([])

function addTask(elem) {
    setInput(elem.target.value)
}

function listTask(){
    setList([...list, {id: list.length + 1, string : userInput}])
    setInput("")
    
}

return(
    <div>
        <input onChange={addTask} />
        <button onClick={listTask}>Add</button>
        <ul>
        {list.map((m)=>(<li style={{listStyleType:'none'}} key={m.id}>{m.string}</li>))}
        </ul>
    </div>
)
}




export default App; *\
