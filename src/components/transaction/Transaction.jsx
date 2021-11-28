import React from 'react'
import './transaction.css'
import {BsArrowLeftRight} from 'react-icons/bs'

const Transaction = () => {
    return (
        <div className="transaction-container">
            <div className="transaction-container-detail">
                <div className="transaction-container-detail-name">
                    <p>0.62844 WETH</p>
                    <BsArrowLeftRight />
                    <p>200 USDT</p>
                </div>
                <div className="transaction-container-detail-time">
                    <p>Tokennlon-6minutes ago</p>
                </div>
            </div>
            <div className="transaction-container-amount">
                <h4>$9,252.20</h4>
            </div>
        </div>
    )
}

export default Transaction
