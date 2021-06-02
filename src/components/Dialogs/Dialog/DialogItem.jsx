import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DialogItem.module.css"



const DialogItems = (props) => {

    let ListDialogs = props.listDialogs.map(elementListDialogs => <NavLink className={s.linkUser} activeClassName={s.activeUser} to={`/dialogs/${elementListDialogs.id}`}> {elementListDialogs.name}  {elementListDialogs.lastname}</NavLink>);

    return (
        <div className={s.wrapper}>
            {ListDialogs}
        </div>
    )
}

export default DialogItems;