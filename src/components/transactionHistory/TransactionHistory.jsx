import React from 'react'
import './transactionhistory.css'
import {BsChevronDown} from 'react-icons/bs'
import graph from '../../assets/graph.svg'

const TransactionHistory = () => {
    return (
        <div className="transaction-history">
            <div className="transaction-history-header">
                <h3>Transaction Histiory</h3>
                <div className="transaction-history-header-dropdown">
                    <p>6 Month</p>
                    <BsChevronDown />
                </div>
            </div>
            <p>Transaction in April 2021</p>
            <h3>$50,000</h3>
            <div className="transaction-history-graph">
                <img src={graph} alt={graph} />
            </div>
        </div>
    )
}

export default TransactionHistory
