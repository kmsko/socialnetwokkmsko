import React, { useState } from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
let Users = (props) => {

    const [pages, setPage] = useState([1, 2, 3, 4, 5])


    let addPages = () => {
        let page = pages.map(e => e + 1);
        setPage(page)
    }
    let delPages = () => {
        let page = pages.map(e => e - 1);
        setPage(page)
    }

    return (
        <div className={s.wrapper}>

            <div className={s.wrapperPaginator}>
                
                <button className={pages[0] === 1 ? s.prevPageNone : s.buttonPage}
                 onClick={delPages}
                >left</button>

                {
                    pages.map(el => <span className={` ${s.pages} ${props.curentPage === el && s.pagesActive}`} onClick={(e) => { props.onClickUsersPage(el, props.pageSize) }}> {el}  </span>)
                }

                <button className={pages[4] === props.totalUsersCount ? s.nextPageNone : s.buttonPage}
                    onClick={addPages}>right</button>
            </div>


            {props.users.map(u => <div className={s.avatar} key={u.id} >
                <NavLink to={'/profile/' + u.id}>
                    <img className={s.avatar_image} src={u.photos.small === null ? "https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13" : u.photos.small} alt="user_avatar" />
                </NavLink>
                <div className={s.avatar__wrapperr_fullname}>
                    <span className={s.avatar__fullname}> Имя :  {u.name} </span>
                </div>
                {props.logOn && u.followed === true ?
                    <button className={`${s.avatar_button_add} ${s.avatar_button}`} disabled={props.followingProgres.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id)
                    }} > удалить </button> :
                    <button className={`${s.avatar_button_del} ${s.avatar_button}`} disabled={props.followingProgres.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
                    }}> добавить </button>}

            </div>
            )
            }
        </div >);
}
export default Users