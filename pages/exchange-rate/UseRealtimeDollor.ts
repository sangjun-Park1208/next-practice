import { useEffect, useState } from "react"
import { useRecoilStateLoadable } from "recoil";
import { realTimeDollorState } from "../state/ExchangeState";

export const useRealtimeDollor = () => {
    const [dollor, setRecoilState] = useState(0);
    const [loadable, setLoadable] = useRecoilStateLoadable(realTimeDollorState);

    useEffect(()=> {
        if(loadable.state === 'hasValue') setRecoilState(loadable.contents);
        if(loadable.state === 'hasError') console.log(loadable.contents);
    }, [loadable]);

    const setDollor = async (inputDollor: number) => {
        const res = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");
        console.log(res);
        const result = await res.json();
        console.log(result);
        const exchangeRate = result[0].basePrice;
        const exchagedWon = exchangeRate * inputDollor;
        setLoadable(exchagedWon);
    };

    return {dollor, setDollor};
}