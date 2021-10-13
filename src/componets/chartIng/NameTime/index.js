import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
const NameTime = (props) => {
    const {
         isOpenCurrencyList, 
         currencyName,renderNameTypeList,
         handleIsOpenCurrencyList,
         history
        }
    = props;
    // const pushtoHistory = () => {
    //     const histotyName = currencyName.toLowerCase()
    //     history.push(`/chart/currency/${histotyName}`)
    // }
    useEffect(() => {
        const histotyName = currencyName.toLowerCase();
        history.push(`/chart/currency/${histotyName}`)
    },[currencyName])
    return(
        <div className="chart-container"> 
        <div 
            className="Detail-item" 
            onClick={handleIsOpenCurrencyList}
        >   
        Choose Cryptocurrency:
        <span className="Detail-value">{currencyName}</span>
    </div>
        {isOpenCurrencyList && (
            <div>
                {renderNameTypeList()}
            </div>
        )}  
           
</div>

    )
}
export default withRouter(NameTime)