import React from 'react'
import style from './paragraph.module.css'

export default function Paragraph({title,paragraph}) {
    return (
        <div className={style.paragraph}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}
