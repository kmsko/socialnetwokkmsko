import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
let mapStateToPropsRedirect = (state) => ({
    logOn: state.auth.logOn
});
export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.logOn) {
            return <Redirect to="/login" />
        }
        return <Component {...props} />
    }
    let ConnectComponentRedirect = connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnectComponentRedirect
}
