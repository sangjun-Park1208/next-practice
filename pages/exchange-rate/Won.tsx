import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { wonState } from '../state/ExchangeState';

export const Won = () => {
    const [won, setWon] = useRecoilState(wonState);
    const [text, setText] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    useEffect(()=>{
        setText(won.toString());
    }, [won]);

    return (
        <div>
            원화
            <input value={text} onChange={onChange}></input>
            <button onClick={()=>{
                setWon(+text);
            }}>환전</button>
        </div>  
    )
}
