import React from 'react'
import style from './inputlabel.module.css'

export default function InputLabel({label,unit,event,value}) {
    return (
        <div className={style.inputlabel}>
            <label htmlFor={label} className="sr-only">
                {label}
            </label>
            <div className={style.inputunit}>
                <input type="number" name={label} value={value} onChange={e => event(e.target.value)} />
                <p>{unit}</p>
            </div>
        </div>
    )
}
