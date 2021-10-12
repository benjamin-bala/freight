import React, { Fragment } from 'react'
import style from './card.module.css'


export default function Card({services,toggleService,activeService}) {



    return (
        <Fragment>
            {
                services && services.map((service,index) => {
                    return(
                        <div 
                        key={service.name} 
                        onClick ={() => toggleService(service.name)}
                        className={`${style.card} ${activeService === service.name ? style.active : null}`}>
                            <div className={style.card_name}>
                                <p>{service.name}</p>
                            </div>
                            <div className={style.card_icon}>
                                {service.icon}
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>        
    )
}
