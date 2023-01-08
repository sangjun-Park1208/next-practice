import * as d3 from 'd3';
import { select } from 'd3';
import { useEffect, useRef, useState } from 'react';
import { useBarchartState, IBarchartData } from './UseBarchartState';
import styles from '../../styles/BarChart.module.css';

const BarChart = () => {
    const {barchartData, setBarchartData} = useBarchartState();
    const [data, setData] = useState<IBarchartData[]>();
    /* D3 좌표 계산 로직 작성 */ 
    const svgRef = useRef<any>();
    
    useEffect(()=>{
        setData(barchartData);
        console.log(barchartData);
    }, [barchartData]);

    useEffect(()=> {
        if(!data) return;
        const margin = { top: 30, right: 30, bottom: 70, left: 40 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // X axis
        const svg = d3.select('svg')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        const x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(d => d.Country))
            .padding(0.2);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, 13000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .join("rect")
            .attr("x", d => x(d.Country))
            .attr("y", d => y(+d.Value))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(+d.Value))
            .attr("fill", "#69b3a2")
    }, [data]);

    return (
        <div>
            Bar chart..
            {/* {barchartData.map((d, i) => {
                return <div key={i}>{d.Country} {d.Value}</div>
            })} */}
            {/* 실제 DOM 조작 by React(또는 Next)*/}
            <svg width="500" height="500" className={styles.barchart}>
            </svg>
        </div>
    )
} 

export default BarChart; 