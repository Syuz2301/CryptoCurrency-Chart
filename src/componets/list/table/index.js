import { renderChangePercent } from '../../../helpers';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
// import withFetch from '../../../hoc';

const Table = (props) => {
    const { currencies, history,handleSelectChange,perPage} = props;   
    const handleHistoryPush = currencyId => {
        history.push(`/currency/${currencyId}`)
    }
    return (
        <>
            <h2>
                <strong> CryptoCurrencies </strong>some details
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x" color="#F9B81F"/>
            </h2>
            <div className="Table-container" id="coin-table">
                <table className="Table">
                        <thead className="Table-head">
                            <tr>
                                <th>
                                    CryptoCurrency 
                                    <select onChange={handleSelectChange} value={perPage}>
                                        <option value="15">15</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                    </select>
                                </th>
                                <th>Symbol</th>
                                <th>Price($)</th>
                                <th>Market Cap</th>
                                <th>24H price Change(%)</th>
                                <th>All Time High(ath)</th>
                            </tr> 
                        </thead>
                        <tbody className="Table-body">
                            {
                                currencies.map(currency => {
                                    return (
                                        <tr key={currency.id} onClick={() => handleHistoryPush(currency.id)}>
                                            <td  className="currency-name"  >
                                                <span><img src={currency.image} alt={currency.name}/></span>
                                                <span>{currency.name}</span>
                                            </td>
                                            <td>( {currency.symbol} )</td>
                                            <td>
                                                <span className="Table-dollar">$</span>
                                                {currency.current_price}
                                            </td>
                                            <td>
                                                <span className="Table-dollar">$</span>
                                                {currency.market_cap}
                                            </td>
                                            <td>
                                                {renderChangePercent(currency.price_change_percentage_24h)}
                                            </td>
                                            <td>${currency.ath}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
            </div>
        </>
    )
};
export default withRouter(Table);