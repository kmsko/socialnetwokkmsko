import React from 'react';
import { connect } from 'react-redux';
import { follow, activePage, unfollow, fetching, followingProgresAC, getUsersThunkCreator, onClickUsersPage } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../preloader/Preloader'
import { compose } from 'redux';


class UsersComponentAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.curentPage, this.props.pageSize)
    }

    render() {

        return <>
            { this.props.isFetching === true ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                curentPage={this.props.curentPage}
                onClickUsersPage={this.props.onClickUsersPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingProgresAC={this.props.followingProgresAC}
                followingProgres={this.props.followingProgres}
                logOn={this.props.logOn}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
        isFetching: state.usersPage.isFetching,
        followingProgres: state.usersPage.followingProgres,
        logOn: state.auth.logOn,
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, activePage, fetching, followingProgresAC, getUsersThunkCreator, onClickUsersPage})
)(UsersComponentAPI);
