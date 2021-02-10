import React, { useEffect, useState } from 'react';

export default function EffectHookExample(){   //Effect hook is called whenever there is  any changes in the DOM. Majorly used when calling API
                                                // Or when manipulating DOM. Works similar as componentDidMount, componentWillMount 
    
    const [count, setCount] = useState(0);
    const [isCalled, setIsCalled] = useState(false);

    useEffect(()=>{
        console.log('This is effect hook')
    }, [isCalled]);   //useEffect is called when only when isCalled is true.
    return(
        <div>This is the example of effect hook {count} <br/>
        <button onClick={()=>setCount(count+1)}>Change</button>
        <button onClick={()=>setIsCalled(true)}>Call Effect</button>

        </div>
    )
}