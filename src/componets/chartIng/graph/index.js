import React,{useEffect,useState }  from 'react';
import {useParams} from 'react-router-dom';
import HistoryChart from './historyChart';
import CoinData from './coinData';
import coinGecko from '../../../apis/coinGecko';
import './index.css'
const Graph = () =>  {
   const { id } = useParams();
   const [coinData, setCoinData] = useState({});
   const formatDatas = data => {
       return data.map(el => {
           return {
               t: el[0],
               y: el[1].toFixed(2)
           }
       })
   };
   useEffect(()=> {
       const fetchData = async () => {
         const [day, week, year, detail] = await Promise.all([
               coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days:"1"
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days:"7"
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days:"365"
                    },
                }),
                coinGecko.get("/coins/markets", {
                    params: {
                        vs_currency: "usd",
                        ids: id
                    },
                })
            ])
            setCoinData({
                day: formatDatas(day.data.prices),
                week: formatDatas(week.data.prices),
                year: formatDatas(year.data.prices),
                detail: detail.data[0]
            })
            }
       fetchData()
    },[id])

    return (
        <div>
            <HistoryChart data={coinData}/>
            <CoinData data={coinData.detail}/>
        </div>
    )
 
}
export default Graph 