import React from 'react';
import "./style.css"
const CoinData = ({data}) => {
    const renderData = () => {
        if(data){
            return (
                <div className="coindata-inner">
                        <div >
                            <div className="colums-heading">Market Cap</div>
                            <div className="colums-data">$ {data.market_cap}</div>
                        </div>
                        <div>
                            <div  className="colums-heading">Total Supply</div>
                            <div className="colums-data">{data.total_supply}</div>
                        </div>

                        <div>
                            <div className="colums-heading">Total Volume</div>
                            <div className="colums-data">$ {data.total_volume}</div>
                        </div>
                        <div>
                            <div className="colums-heading">24h High Price</div>
                            <div className="colums-data">$ {data.high_24h}</div>
                        </div>
                        <div>
                            <div  className="colums-heading">24h Low Price</div>
                            <div className="colums-data">$ {data.low_24h}</div>
                        </div>
                        <div>
                            <div  className="colums-heading">Circulating Supply Amount</div>
                            <div className="colums-data"> {data.circulating_supply}</div>
                        </div>
                    </div>
            )
        }
    }
    return(
        <div>
            {renderData()}
        </div>
    )
}
export default CoinData