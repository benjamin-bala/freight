import React, { useState } from 'react'
import style from './tab.module.css'

export default function Tab(props) {

    
    const [active,setActive] = useState(0)
    
    const activeOption = index => setActive(index)

    return (
        <div className={`${style.tab}`}>
            {
                props.options && props.options.map((option, index) => {
                    return (
                        <div key={index} onClick={() => activeOption(index)} className={`${style.tab_option} ${active === index ? style.active_option : null}`}>
                            <p>{option}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
