import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NavBar from './components/Navbar/NavBar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './redux/app-reducer';
import Preloader from './components/preloader/Preloader';


class App extends React.Component {

    componentDidMount() {
        this.props.initialApp()
      }

    render(){
        if(!this.props.itialazed){
            return <Preloader/>
        }
          return <div className="app_wrapper" >
        <HeaderContainer />
        <div className="content">
            <NavBar />
            <div className="dynamic_content">
                <Route path='/profile/:userId' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/user' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        </div>
    </div>
    }
  
}

const mapStateToProps = (state)=>{
    return{
        itialazed: state.app.itialazed
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {initialApp})
)(App);