import { useEffect, useState } from "react"
import { useRecoilStateLoadable } from "recoil";
import { BarchartSelector } from "../state/BarchartState";

export const url = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv";

interface IBarchartData {
    Country: string,
    Value: string
}

export const useBarchartState = () => {
    const [barchartData, setRecoilState] = useState<IBarchartData[]>([]);
    const [loadable, setLoadable] = useRecoilStateLoadable(BarchartSelector);

    useEffect(()=> {
        if(loadable.state === 'hasValue') setRecoilState(loadable.contents);
        if(loadable.state === 'hasError') console.log(loadable.contents);
    }, [loadable]);

    const setBarchartData = async (inputData: {}[]) => {
        setLoadable([...inputData]);
    };

    return {barchartData, setBarchartData};
}