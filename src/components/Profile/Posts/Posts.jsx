import React, { useState } from 'react';
import s from "./Posts.module.css"
const Post = React.memo(props => {

    const [like, setlike] = useState(0);

    const addLike = (value) => {
        setlike(value+1)
    }

    let renderPost = props.myPosts.map((post) => <div className={s.post}>
        <img className={s.photoPost_img} src={props.profile.photos.large || "https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13"} alt="user_avatar" />
        

        <div className={s.textPost}>{post.textPost}</div>


        <div className={s.like_wrapper}>
            <span className={s.likecount}>  {like}    </span>
            <span onClick={ ()=>addLike(like) } className={s.like}>❤ </span>
        </div>




    </div>

    )
    return (
        <div className={s.wrapper}>
            {renderPost}
        </div>
    );
});
export default Post;