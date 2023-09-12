import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <div className='searchform'>
      <form className='searchform__input-container'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          required
        ></input>
        <button className='searchform__btn button' type='submit'></button>
      </form>
      <form className='searchform__checkbox-conteiner'>
        <input
          type='checkbox'
          className='searchform__checkbox'
          id='searchform__checkbox'
          placeholder='Чекбокс переключения'
          value='yes'
        ></input>
        <label className='searchform__label link' htmlFor='searchform__checkbox'>Короткометражки</label>
      </form>
      <div className='searchform__line'></div>
    </div>
  )
}

export default SearchForm
