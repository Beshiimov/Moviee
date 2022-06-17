import {NavLink} from "react-router-dom";
import s from "./Nav.module.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../../assets/icons/librarysvg.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/schedule.svg";
import { ReactComponent as FriendsIcon } from "../../assets/icons/friends.svg";
import { ReactComponent as TMDB } from "../../assets/icons/TMDB-logo.svg";

const Nav = () => {
  return (
    <div className={s.nav}>
      <ul>
        <li className={s.li}>
          <NavLink to='/'>
            <HomeIcon className={s.icon} />
            Home
          </NavLink>
        </li>

        <li className={s.li}>
          <NavLink to='/library'>
            <LibraryIcon className={s.icon}/>
            Library
          </NavLink>
        </li>

        <li className={s.li}>
          <NavLink to='/message'>
            <MessageIcon className={s.icon}/>
            Message
          </NavLink>
        </li>

        <li className={s.li}>
          <NavLink to='/schedule'>
            <ScheduleIcon className={s.icon}/>
            Schedule
          </NavLink>
        </li>

        <li className={s.li}>
          <NavLink to='/friends'>
            <FriendsIcon className={s.icon}/>
            Friends
          </NavLink>
        </li>
      </ul>


      {/*<div className={s.profile}>*/}
      {/*  Profile*/}
      {/*</div>*/}
      <TMDB className={s.TMDB}/>


    </div>
  )
}

export default Nav