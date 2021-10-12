import React, { useState } from 'react'
import style from './pills.module.css'


const options = ["import", "export"]

export default function Pills() {
    const [activePill, setActivePill] = useState(null)

    const activeOption = index => setActivePill(index)

    return (
        <div className={style.pills}>
            {
                options && options.map(option => {
                    return(
                        <div 
                        key={option} 
                        onClick={() => activeOption(option)} 
                        className={`${style.pills_option} ${activePill === option ? style.pills_active : null}`}>
                            <p>{option}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
