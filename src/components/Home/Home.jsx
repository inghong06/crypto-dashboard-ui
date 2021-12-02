import React from 'react'
import './home.css'
import {GlobalData, Cryptocurrencies, News} from '../../components'


const Home = () => {
    return (
        <div className="home-container section__padding">
            <GlobalData />
            <Cryptocurrencies simplified/>
            <News simplified query="cryptocurrency"/>
        </div>
    )
}

export default Home
