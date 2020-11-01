import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import '../App.css';

function Card() {
    return (
        <div className="cards">
            <h1>Check out this EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Silahkan Maen Aer"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Silahkan Maen Di Pulau"
                            label="Mystery"
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="Silahkan Maen Aer"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Silahkan Maen Di Pulau"
                            label="Nyasar"
                            path='/products'
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Silahkan Maen Di Pulau"
                            label="Adrenaline"
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
