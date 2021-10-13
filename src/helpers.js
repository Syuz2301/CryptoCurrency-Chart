export const renderChangePercent = changePercent => {
    if (changePercent > 0) {
      return <span className="percent-raised">{changePercent}% &uarr;</span>
    } else if (changePercent < 0) {
      return <span className="percent-fallen">{changePercent}% &darr;</span>
    } else {
      return <span>{changePercent}</span>
    }
}
const tansformCurrencyData = (currencyData) => {
  if(currencyData) {
    const data = Object.keys(currencyData);
    return data.map(key => {
      return ({
        name:key,
        value:currencyData[key]
      });
    });
  }
  return []
}
  
export  const filterCurrencyData = (data) => {
    if(data) {
      const { 
        name, description, symbol, 
        image: {small}, market_cap_rank, 
        market_data: {circulating_supply}
      } = data
      return ({
        name,
        symbol,
        description,
        currencyImg: small,
        marketCapRank: market_cap_rank,
        priceChange24h:circulating_supply,
        currencyList:tansformCurrencyData(data.market_data?.current_price)
      });
  }
  return {}
}
