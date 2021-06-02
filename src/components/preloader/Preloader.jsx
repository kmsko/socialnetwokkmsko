import React from 'react';
import preloader from '../../assets/image/preloader.gif'
import s from './preloader.module.css'

const Preloader = () => {
    return <div>
       <img className={s.preloader} src={preloader}/>
    </div>
}
export default Preloader;