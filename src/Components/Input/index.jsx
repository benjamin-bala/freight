import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import style from './input.module.css'

export default function Input({type,hasIcon,icon,icon_name,value,event,placeholder}) {
    return (
        <div className={`${style.input}`}>
            <div className={`${style.input_icon}`}>
                {
                    hasIcon &&
                    <Fragment>
                        {icon}
                        {icon_name && 
                        <p className={style.input_icon_name}>{icon_name}</p>
                        }
                    </Fragment>
                }
                
            </div>
            <div className={`${style.input_box}`}>
                <input type={type} value={value || ''} onChange={e => event(e.target.value)} placeholder={placeholder} />
            </div>
        </div>
    )
}
