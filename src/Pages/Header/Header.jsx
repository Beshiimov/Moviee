import {NavLink} from "react-router-dom";
import s from './Header.module.css';
import notification from '../../assets/icons/notfication.svg';
import settings from '../../assets/icons/settings.svg';
import searchIcon from '../../assets/icons/search.svg';
import { createRef } from "react";


const Header = (props) => {
  const searchValue = createRef();

  const updateSearchText = () => {
    const text = searchValue.current.value;
    props.updateSearchText(text);
  };

  return (
    <div className={s.header}>
      <NavLink to="/" className={s.logo}>Movies</NavLink>
      <div className={s.input__box}>
        <img src={searchIcon} alt="Search" className={s.searchIcon}/>
        <input type="text"
               className={s.search}
               value={props.searchText}
               ref={searchValue}
               onChange={updateSearchText}
               placeholder="Search Movie"
        />
      </div>
      <div className={s.buttons}>
        <button className={s.notification}>
          <img src={notification} alt="notification"/>
        </button>
        <button className={s.settings}>
          <img src={settings} alt="settings"/>
        </button>
      </div>
    </div>
  )
}

export default Header;