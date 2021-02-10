import React from 'react';

export default function MySecondHook(data){  //data is the returned states from myFirstHook. It is also called props as in react classes
    return (
        <div style={{textAlign:'center'}}>
            This is my second hook
            <img width='50' src={data.imageUrl}></img>
            <div>{data.name}</div>
        </div>
    )
}