import React from 'react'
import style from './searchbox.module.css'
import { BiSearch } from 'react-icons/bi'

export default function Searchbox() {
    return (
        <div className={style.searchbox}>
            <input type="text" placeholder="search" />
            <BiSearch  fill="#fff"/>
        </div>
    )
}
