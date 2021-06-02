import React from 'react';
import s from './ProfileCard.module.css'
import download from '../../../assets/image/download.png'
import Status from './Status';
let ProfileCard = (props) => {

    const selectFile = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0])
        }
    }


    return <div className={s.wrapper}>
        <div className={s.avatar_wrapper}>
            <img className={s.avatar} src={props.profile.photos.large || "https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13"} alt="user_avatar" />

            {parseInt(props.userId) === props.myId &&
                <div className={s.wrapper_form}>
                    <input className={s.wrapper_form__status_input} id="profileCard-input-file" type="file" onChange={selectFile} />
                    <label className={s.wrapper_form__status_label} htmlFor="profileCard-input-file">
                        Изменить аватар
                <img className={s.wrapper_form__image} src={download} alt="download" width="25" />
                    </label>

                </div>}

        </div>

        <div className={s.wrapper_description}>
            <div className={s.name}>Полное имя : {props.profile.fullName}</div>
            <Status
                setUserStatusThunk={props.setUserStatusThunk}
                status={props.status}
                myId={props.myId}
                userId={props.userId} />
            <div>user ID: {props.profile.userId}</div>
        </div>
    </div>
}
export default ProfileCard