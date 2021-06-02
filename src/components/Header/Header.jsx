import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import exitImage from '../../assets/image/exit.jpg'
const Header = (props) => {
  // Смена темы
  const themNight = () => {
    if (!props.dayOrNight) {
      props.dayOrNighAC(true)
    } else {
      props.dayOrNighAC(false)
    }
  }

  let body = document.querySelector("body")
  if (!props.dayOrNight) {
    body.classList.remove("day")
    body.classList.add("night")
  } else {
    body.classList.remove("night")
    body.classList.add("day")
  }

  return (
    <div className={s.header}>



      <div className={s.loginBlock}>

        <NavLink className={s.statusLogin} to={"/login"}> {props.logOn
          ? <span className={s.online}>online</span>
          : <span className={s.offline}>Войти</span>}
        </NavLink>


      </div>

   

      {props.logOn && <button className={s.logout} onClick={props.logout}>
        <img className={s.logout_image} src={exitImage} alt="exit" /></button>}

    </div>
  );
}
export default Header;
