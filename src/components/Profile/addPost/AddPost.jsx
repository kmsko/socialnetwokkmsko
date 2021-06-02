import React from 'react';
import s from "./AddPost.module.css"
const AddPost = React.memo(props => {

    let OnAddPost = () => {
        if(props.messageWrite === "" ){
            return 
        }
        props.addPost()
    };
    let OnRefreshTextPost = (letter) => {
        let post_text = letter.target.value;
        if(post_text === " " || post_text === `\n`){
            return 
        }
        props.refreshTextPost(post_text)

    }
    return (
        <>
            {parseInt(props.userId) === props.myId && <div className={s.wrapper}>
                <textarea
                    onChange={OnRefreshTextPost}
                    className={s.in_text}
                    value={props.textPost}
                    placeholder={"demo version В разработке"}
                >
                </textarea>
                <button disabled={!props.textPost} onClick={OnAddPost} className={s.push_text}>Add Post</button>
            </div>}

        </>
    );
})
export default AddPost;