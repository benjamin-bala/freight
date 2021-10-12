import React, { useState } from 'react'
import style from './dropdown.module.css'
import {AiFillCaretDown} from 'react-icons/ai'

export default function Dropdown() {

    const [value,setValue] = useState('Select an option')

    const options = ["Incoterms", "Parcel", "cargo"]
    const [visible, setVisibility] = useState(false)

    const setOption = option => {
        setValue(option)
        setVisibility(!visible)
    }

    return (
        <div className={style.dropdown}>
            <div className={style.dropdown_value} onClick={() => setVisibility(!visible)}>
                <p>{value}</p>
                <AiFillCaretDown fill="#333"/>
            </div>
            {
                visible ? 
                <div className={style.dropdown_option}>
                    {
                        options.map(option => {
                            return <p onClick={() => setOption(option)} key={option}>{option}</p>
                        })
                    }
                </div>
                :null
            }
        </div>
    )
}
