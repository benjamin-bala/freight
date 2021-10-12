import React from 'react'
import style from './header.module.css'
import Button from '../Button'
import Searchbox from '../Searchbox'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.header_logo}>
                <h2>Send freight</h2>
            </div>
             <div className={style.searchbox_container}>
                    <Searchbox />
                </div>           
            <div className={style.header_cta}>
                <Button name="request quote" color="#fafafa" borderColor="#fafafa"/>
                <Button name="book shipment" color="#fafafa" borderColor="#82d182" background="#82d182"/>
            </div>
        </header>
    )
}
