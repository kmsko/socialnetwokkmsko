import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { refreshBarAC } from '../../redux/nav-reducer';
import { addPost, getProfileThunkAPI, refreshTextPost, getUserStatusThunk, setUserStatusThunk, savePhotoThunk, } from '../../redux/profile-reducer';
import Preloader from '../preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.refreshBarAC(this.props.match.url)
        this.props.getProfileThunkAPI(userId)
        this.props.getUserStatusThunk(userId)
    }
    render() {
        return (<>
            {this.props.match.params.userId === 'null'
                ? <Redirect to={`/User`} /> :
                this.props.isFetching ? <div>Loading. . .</div> :
                    !this.props.profile ? <Preloader /> : <Profile

                        {...this.props}
                        savePhotoThunk={this.props.savePhotoThunk}
                        setUserStatusThunk={this.props.setUserStatusThunk}
                        profile={this.props.profile}
                        status={this.props.status}
                    />

            }

        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        textPost: state.ProfilePage.textPost,
        myPosts: state.ProfilePage.myPosts,
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        myId: state.auth.id,
        activeURL: state.navBar.activeURL,
        isFetching: state.ProfilePage.isFetching,
    }
};





export default compose(
    withRouter,
    connect(mapStateToProps, {
        addPost,
        refreshTextPost,
        getProfileThunkAPI,
        refreshBarAC,
        getUserStatusThunk,
        setUserStatusThunk,
        savePhotoThunk,
    }))(ProfileContainer)