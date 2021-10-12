import React, { useState } from 'react'
import style from './toggle.module.css'

export default function Toogle() {

    const [isSelected, setSelection] = useState(false)

    const toggleSelection = () => setSelection(!isSelected)

    return (
        <div onClick={toggleSelection} className={`${style.toggle} ${isSelected ? style.active : null}`}>
            <div className={`${style.toggle_selection} ${isSelected ? style.toggle_selected : null}` }>
            </div>
        </div>
    )
}
