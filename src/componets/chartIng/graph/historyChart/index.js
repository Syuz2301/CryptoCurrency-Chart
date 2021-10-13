import React, { useRef, useEffect, useState } from "react";
import  ChartJs from "chart.js";
import {renderChangePercent} from '../../../../helpers'
import { historyOptions } from "../../../../chartConfig";
import "./index.css";

const HistoryChart = (props) => { 
    const {data:{day, week, year, detail}} = props;
    const [timeFormat, setTimeFormat] = useState('24h');
    const determineTimeFormat = () => {
        switch(timeFormat) {
            case "24h":
            return day;
            case "7d":
            return week;
            case "1y":
            return year;
            default:
            return day
        }
    }
    const chartRef = useRef();
    useEffect(() => {
        if(chartRef && chartRef.current && detail) {
            const chartInstance = new ChartJs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [
                        {
                            label: `${detail.name} Price Chart`,
                            data: determineTimeFormat(), 
                            backgroundColor:"rgba(245, 215, 110, 1)",
                            borderColor: "rgba(174,305,194,0.4)",
                            pointRadius: 1,
                        },
                    ],
                },
                options: {
                    ...historyOptions
                },
            });  
        }
    });
    const renderPrice = () => {
        if(detail){
            return (
                <>
                <p className="show-price">${detail.current_price.toFixed(2)}</p>
                <p className="show-price">{renderChangePercent(detail.price_change_percentage_24h.toFixed(2))}</p>
                </>
            )
        }
    }
    return( 
    <div className="chart-graph">
        <div>{renderPrice()}</div>
        <div>
            <canvas ref={chartRef} id="myChart" ></canvas>
        </div>
        <button
            onClick={() => setTimeFormat("24h")}
            className="coose-time"
        >
        24 hour
        </button>
        <button
            onClick={() => setTimeFormat("7d")}
            className="coose-time"
        >
        7 day
        </button>
        <button
            onClick={() => setTimeFormat("1y")}
            className="coose-time"
        >
        1 year
        </button>
    </div>
    )
    
}  
export default HistoryChart 