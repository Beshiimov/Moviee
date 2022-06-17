import React from "react";
import axios from "axios";
import api from "../../Api-key";
import s from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=true&page=${this.props.page}&with_watch_monetization_types=flatrate`)
      .then(response => {
        this.props.updateListAction(response.data)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Page updated')
    if (prevProps.page !== this.props.page) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=true&page=${this.props.page}&with_watch_monetization_types=flatrate`)
        .then(response => {
          this.props.updateListAction(response.data)
        })
    }
  }

  render () {
    return (
      <div className={s.homePage}>
        <div className={s.cinemas}>
          {this.props.list.results.map((e,key) =>
            <NavLink to='/ee' className={s.cinema} key={key}>
              <div className={s.body}>
                <div className={s.title}>{e.title} </div>
                <div className={s.overview}>{e.overview}</div>
                <div className={s.bodyBottom}>
                  <span className={s.releaseData}>{e.release_date}</span>
                  <span className={s.popularity}>{e.popularity}</span>
                </div>
              </div>
              <div className={s.poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt=""/>
              </div>
              <div className={s.voteAverage}>{e.vote_average}</div>
            </NavLink>)
          }
        </div>

        <div className={s.pageNav}>
          {this.props.page === 1 ? '' :
            <button className={s.pagination} onClick={this.props.prevPage}>Предыдущая страница</button>
          }
          <button className={s.pages}>{this.props.page}</button>
          <button className={s.pagination} onClick={this.props.nextPage}>Следующая страница</button>
        </div>

      </div>
    )
  }
}

export default HomePage;