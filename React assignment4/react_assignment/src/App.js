import React, { useState } from 'react';

const Todolist = () => {
    const [num,setNum] = useState(0)

    const incNum =() => {
        setNum(num + 1);
    };

    const decNum = () => {
        if(num > 0){
            setNum(num -1)
        } else{
            alert('sorry, zero limit Reached')
            setNum(0)
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

export default Todolist;
