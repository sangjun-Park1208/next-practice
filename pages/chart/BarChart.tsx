import React, { useState } from 'react'
import {useRecoilState, useRecoilValue} from 'recoil';
import * as d3 from 'd3';
import { useBarchartState } from './UseBarchartState';

const BarChart = () => {
    const {barchartData, setBarchartData} = useBarchartState();
    return (
        <div>
            Bar chart..
            {barchartData.map((d, i) => {
                return <div>{d.Country} {d.Value}</div>
            })}
        </div>
    )
} 

export default BarChart; 