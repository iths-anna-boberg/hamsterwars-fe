import React, { useState } from 'react';


const Start = ()=>{
    
    const [id1, setId1] = useState(null);
    const [id2, setId2] = useState(null);
    let inputRegistered = id1 && id2;



    return(
        <div className="content">
            <h1>Welcome to Hamster Wars</h1>
            <p className="preamble">
                Furry small creatures with bad eyesight compete for your affection.
            </p>
            <div className="flex-column">
                <h2>Already know which hamsters you want to battle?</h2>
                <div className="flex-column">

                    <p>Enter their id's below and jump straight to the battle:</p>

                    <div>
                    <label htmlFor="id1">Id of hamster one: <input name="id1" id="id1" type="text" onChange={e=>setId1(e.target.value)}/></label>
                    <label htmlFor="id2">Id of hamster two: <input name="id2" id="id2" type="text" onChange={e=>setId2(e.target.value)}/></label>
                    </div>
                    {inputRegistered
                    ?
                    <a href={`/battle/${id1}/${id2}`} className="preamble">Go!</a>
                    :''
                    }
                </div>

            </div>
           
                
            
        </div>
    )
}
export default Start;