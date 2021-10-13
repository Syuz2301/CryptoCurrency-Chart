import React, { Component } from 'react';
import { API_URL } from '../../config';
import NameTime from './NameTime'
import Graph from './graph';
class Charting extends Component {
    constructor() {
        super();
        this.state = {
            currenciesName:[],
            isOpenCurrencyList: false,
            cords:[],
            currencyName:'Bitcoin',
            loading:false
        };
    }
    handleFetchCurrenciesName() {
        fetch(`${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc%2C&sparkline=false`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            this.setState({
                currenciesName: data,
            })
        })
    };
    componentDidMount(){
        this.handleFetchCurrenciesName()
    };
    handleIsOpenCurrencyList = () => {
        this.setState({
            isOpenCurrencyList: !this.state.isOpenCurrencyList
        })
    };
    handleChangeNameSelect = (e) => {
        const { value } = e.target;
        const {currencyName} = this.state;
        this.setState({
            currencyName: value
        })
    };
    renderNameTypeList = () => {
        const { currenciesName } = this.state
        return (
            <select className="Search-result-container" onChange={this.handleChangeNameSelect}>
                {
                  currenciesName.map(item => {
                        return (
                            <option className="Search-result">
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>
        )
    };
    render() {
        const {isOpenCurrencyList,currencyName,currenciesName} = this.state;
        return ( 
        <>
        < NameTime
         isOpenCurrencyList={isOpenCurrencyList}
         currencyName={currencyName}
         currenciesName = {currenciesName}
         handleChangeNameSelect = {this.handleChangeNameSelect}
         handleIsOpenCurrencyList = {this.handleIsOpenCurrencyList}
         renderNameTypeList={this.renderNameTypeList}
        />
        <Graph 
            currencyName={currencyName}
        />
        </>
        )
    }
}
export default Charting