import React, { useEffect, useState } from 'react';
import s from "../Profile.module.css"
import editImage from '../../../assets/image/edit.png'
let Status = (props) => {



    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    
    useEffect(
        ()=>{
            setStatus(props.status)
        }, 
        [props.status]
    )



    const activeEditMode = () => {
        if (parseInt(props.userId) === props.myId)
            setEditMode(true)
    }
    // Изменение на каждое нажатие
    const editStatus = (e) => {
        setStatus(e.currentTarget.value)

    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.setUserStatusThunk(status)
    }


    return (
        <>
            {!editMode && <span className={`${s.status_de} `} onClick={activeEditMode}>
                <span>Статус : </span>
                {props.status || " no status"}
                <img className={parseInt(props.userId) === props.myId ? s.editOn : s.editOff} src={editImage} alt="edit" />

            </span>}
            {editMode && <div>
                <textarea onChange={editStatus} autoFocus={true} onBlur={deactiveEditMode} className={s.status} value={status} type="text" />
            </div>
            }
        </>

    )

}

export default Status