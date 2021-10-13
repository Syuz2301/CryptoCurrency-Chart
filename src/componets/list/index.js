import React, { Component } from 'react';
import { API_URL } from '../../config';
import { renderChangePercent } from '../../helpers'; 
import Loading from '../common/loading';
import Table from './table';
import Pagination from './pagination';
import './index.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            totalPages: 0,
            perPage: 15,
            currencies: [],
            loading: false,
            error: null,
            mostSearched:[],
            globalData:[]
        };
        
    }
    handleFetchCurrencies() {
        this.setState({
            loading: true
        });
        const { page, perPage} = this.state;
        fetch(`${API_URL}/coins/markets/?vs_currency=usd&page=${page}&per_page=${perPage}&price_change_percentage_24h`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            this.setState({
                currencies: data,
                loading: false
            })
        })
    }
    componentDidMount() {
        this.handleFetchCurrencies();
    }
    componentDidUpdate(x, prevState) {
        if (prevState.page !== this.state.page) {
            this.handleFetchCurrencies();
        }

        if(prevState.perPage !== this.state.perPage) {
            this.handleFetchCurrencies();
        }
    }
    handlePaginationClick = (direction) => {
        let page = this.state.page;
        page = direction === 'next' ? page + 1 : page - 1;
        this.setState({
            page
        })
    }
    handleSelectChange = e => {
        const { value } = e.target;
        this.setState({
            perPage: value
        })
    }

    render() {
        const { currencies, loading, page, perPage } = this.state
        if (loading) {
            return (
                <div className="loading-container">
                    <Loading />
                </div>
            )
        }

        return (
            <>
                <Table 
                   handleSelectChange={this.handleSelectChange}
                   currencies={currencies} 
                   perPage={perPage}
                />

                <Pagination 
                    page={page}
                    handlePaginationClick={this.handlePaginationClick}
                    perPage={ perPage}
                />
            </>
        )
    }
}

export default List;
