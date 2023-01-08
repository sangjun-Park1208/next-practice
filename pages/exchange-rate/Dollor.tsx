import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { dollorState } from '../state/ExchangeState';
import { useRealtimeDollor } from './UseRealtimeDollor';

export const Dollor = () => {
    const {dollor, setDollor} = useRealtimeDollor();
    const [text, setText] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    useEffect(()=> {
        setText(dollor.toString());
    }, [dollor]);

    return (
        <div> 
            달러
            <input value={text} onChange={onChange}></input>
            <button onClick={()=>{
                setDollor(+text);
            }}>환전</button>
        </div>  
    )
}
