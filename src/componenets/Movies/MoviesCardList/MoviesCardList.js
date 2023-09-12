import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ card, cards }) {
  return (
    <ul className='moviescardlist'>
      <li className='moviescardlist__list'>
        {cards.map((card, index) => (<MoviesCard key={index} />))}
      </li>
    </ul>
  )
}

export default MoviesCardList
