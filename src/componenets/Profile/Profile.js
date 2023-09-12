import './Profile.css'
import React from 'react'
import { Link } from 'react-router-dom'
//import Header from '../Header/Header.js'
import { useState } from 'react';

const Profile = () => {
  const [name] = useState('Виталий');
  const [email] = useState('pochta@yandex.ru');
  return (
    
    <main className='profile'>
      <section className='profile_container'>
        <form className='profile__form'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <label className='profile__fields'>
            <span className='profile__name'>Имя</span>
              <input
                className='input'
                defaultValue={name}
                placeholder='Имя'
                minLength={2}
                maxLength={12}
                required
              />
              </label>

          <div className='profile__line'></div>  

          <label className='profile__fields'>
            <span className='profile__name'>E-mail</span>
              <input
                className='input'
                defaultValue={email} 
                placeholder='email@email.ru'
                required
              />
          </label>
           
        </form>
        <div className='profile__form' action='/profile'>
          <input type='submit' className='profile__button' placeholder='Редактировать' value='Редактировать'/>
        </div>
        <Link to='/' className='profile__link'>Выйти из аккаунта</Link>
      </section>
    </main>
  )
}

export default Profile
