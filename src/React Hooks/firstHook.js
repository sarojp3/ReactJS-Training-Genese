import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'; //useHistory is used to change the routes
import MySecondHook from './secondHook';

export default function MyFirstHook(){
    let history = useHistory();
    const [counter, setCounter] = useState(0);
    const [isLightOn, setLightUrl] = useState(false);
    const [imageUrl, setImageUrl] = useState('https://m.media-amazon.com/images/I/61NzQ8TBE+L._AC_SY679_.jpg');

    function handleLight(){
        if(isLightOn){
            setImageUrl('https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3-1200-80.jpg');
        }else{
            setImageUrl('https://m.media-amazon.com/images/I/61NzQ8TBE+L._AC_SY679_.jpg');
        }
        setLightUrl(!isLightOn)
    }
    return (
        <div>
            <div> Counter Value {counter}</div>
            <button onClick= {()=>setCounter(counter + 1)}>Increase</button>
            <MySecondHook imageUrl={imageUrl} name="This is Saroj Pandey"/>
            <button onClick={()=>history.push('weather')}>Change Route</button>
            <img style ={{width:'15%'}} onClick={()=>handleLight()} src={imageUrl}></img>
        </div>

    )
}