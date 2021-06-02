import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { dayOrNighAC } from '../../redux/header-reducer';
import {logout} from '../../redux/auth-reducer'
class Headercontainer extends React.Component {



  render() {
    return (
    <Header logout={this.props.logout} logOn={this.props.logOn} dayOrNight={this.props.dayOrNight} dayOrNighAC={this.props.dayOrNighAC}/>)
  }
}

const mapToStateToProps = (state) => {
  return {
    logOn: state.auth.logOn,
    dayOrNight: state.themPage.dayOrNight
  }
}
export default connect(mapToStateToProps, { dayOrNighAC, logout })(Headercontainer);
