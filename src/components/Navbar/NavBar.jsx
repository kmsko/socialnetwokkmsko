import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import s from "./NavBar.module.css";
import { getProfileThunkAPI, getUserStatusThunk, refreshProfileAC } from '../../redux/profile-reducer';
import { compose } from 'redux';

const NavBar = (props) => {

  let refreshProfile = () => {
    props.refreshProfileAC(props.id)
    props.getProfileThunkAPI(props.id)
    props.getUserStatusThunk(props.id)
  }
  return (
    <div className={s.navbar}>

      <NavLink
        to={`/profile/` + props.id}
        activeClassName={s.active}
        className={`${s.link} ${props.activeURL === props.location.pathname && s.active}`}
        onClick={refreshProfile}>
        Profile</NavLink>
      <NavLink to={"/dialogs"} activeClassName={s.active} className={s.link}>Message</NavLink>
      <NavLink to={"/News"} activeClassName={s.active} className={s.link}>News</NavLink>
      <NavLink to={"/User"} activeClassName={s.active} className={s.link}>User</NavLink>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    activeURL: state.navBar.activeURL
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { refreshProfileAC, getProfileThunkAPI, getUserStatusThunk }))(NavBar);
