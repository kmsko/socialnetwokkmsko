import React from 'react';
import s from "./Profile.module.css"
import Posts from './Posts/Posts'
import AddPost from './addPost/AddPost';
import ProfileCard from './ProfileCard/ProfileCard';
import { Redirect } from 'react-router';
import Preloader from './../preloader/Preloader'
const Profile = (props) => {
    if (props.match.params.userId === 'null') {
        return <Redirect to={`/User`} />
    }
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.wrap_profile}>
            <ProfileCard
                savePhotoThunk={props.savePhotoThunk}
                profile={props.profile}
                myId={props.myId}
                userId={props.match.params.userId}
                setUserStatusThunk={props.setUserStatusThunk}
                status={props.status}
            />

            <AddPost myId={props.myId}
                userId={props.match.params.userId}
                addPost={props.addPost}
                refreshTextPost={props.refreshTextPost}
                textPost={props.textPost} />
            <Posts profile={props.profile} myPosts={props.myPosts} textPost={props.textPost} />
        </div>
    );
}
export default Profile;
