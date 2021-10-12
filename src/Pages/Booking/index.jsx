import React, {useState} from 'react'
import style from './booking.module.css'
import { IoArrowBack, FiInfo,IoMdPin,AiFillCalendar } from 'react-icons/all'
import Card from '../../Components/Card'
import Pills from '../../Components/Pills';
import Input from '../../Components/Input'
import Dropdown from '../../Components/Dropdown';
import Toggle from '../../Components/Toggle';
import InputLabel from '../../Components/InputLabel';
import { services } from '../../utils/services'
import { cargoDetails } from '../../utils/cargo-details';
import Tab from '../../Components/Tab'
import Paragraph from '../../Components/Paragraph';

export default function Booking() {


    const [activeService, setActiveService] = useState(null)
    const toggleActive = value => setActiveService(value)
    const [pickup,setPickup] = useState('')
    const [dropOff, setDropOff] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [cargoValue, setCargoValue] = useState('')
    const [volume,setVolume] = useState('')
    const [weight, setWeight] = useState('')


    const destinationFrom = value => setPickup(value)
    const destinationTo = value => setDropOff(value)
    const setDate = value => setDeliveryTime(value)
    const cargoInput = value => setCargoValue(value) 
    const totalVolume = value => setVolume(value)
    const totalWeight = value => setWeight(value)




    return (
        <main className={style.booking}>
            <div className={style.back_button}>
                <IoArrowBack />
            </div>
            <div className={style.booking_details}>
                <section className={style.booking_details_header}>
                    <h2>New Booking</h2>
                    <p>Fill in the information to get a quote or create a new booking</p>
                </section>
                <section className={`${style.booking_details_card}`}>
                    <div className={style.booking_service_header}>
                        <h2>Select a service</h2>
                    </div>
                    <div className={style.booking_service}>
                        <Card services={services} toggleService={toggleActive} activeService={activeService}/>
                    </div>
                </section>

                <section className={style.booking_details_card}>
                    <div className={style.booking_details_card_header}>
                        <FiInfo size={20}/>
                    </div>
                    <div className={style.booking_details_input_box}>
                        <div className={style.booking_details_input1}>
                            <Pills />
                            <Input 
                                type="text" 
                                icon={<IoMdPin />} 
                                hasIcon={true} 
                                icon_name="From" 
                                value={pickup} 
                                placeholder="City or port" 
                                event={destinationFrom}
                            />
                            <Input 
                                type="text" 
                                icon={<IoMdPin />} 
                                hasIcon={true} 
                                icon_name="To" 
                                value={dropOff} 
                                placeholder="City or port" 
                                event={destinationTo}
                            />
                        </div>
                       
                        <div className={style.booking_details_input2}>
                            <Input 
                                type="text" 
                                icon={<AiFillCalendar />} 
                                hasIcon={true} 
                                value={deliveryTime} 
                                placeholder="Ready Date" 
                                event={setDate}
                            />
                            <Dropdown />
                            <Input 
                                type="number" 
                                value={cargoValue} 
                                placeholder="Total cargo value" 
                                event={cargoInput}
                            />
                        </div>
                    </div>
                </section>

                <section className={style.booking_details_card}>
                    <div className={style.booking_details_cargo_header}>
                        <h2>Cargo Details</h2>
                        <div className={style.booking_details_cargo_header_info}>
                            <Toggle />
                            <p>Dangerous cargo (ex. Chemicals, Battery) </p>
                        </div>
                    </div>
                    <div className={style.grid}>
                        <div className={style.booking_cargo_tab}>
                            <Tab options={cargoDetails}/>
                        </div>
                        <div className={style.booking_cargo_input}>
                            <InputLabel label="Total volume" unit="cbm" value={volume} event={totalVolume} />
                            <InputLabel label="Total weight" unit="kg" value={weight} event={totalWeight} />
                        </div>
                    </div>
                </section>

                <section className={style.booking_details_card}>
                    <div className={style.booking_details_card_header}>
                        <h2>Additional Services</h2>
                    </div>
                    <div className={style.booking_details_additional_services}>
                        <div className={style.additional_services}>
                            <Toggle />
                            <Paragraph 
                            title="Export Forwarding" 
                            paragraph="we handle customs clearance and documentation." 
                            />
                        </div>

                        <div className={style.additional_services}>
                            <Toggle />
                            <Paragraph 
                            title="Import customs clearance" 
                            paragraph="we handle customs and regulatory requirments." 
                            />
                        </div>

                        <div className={style.additional_services}>
                            <Toggle />
                             <Paragraph 
                            title="Cargo insurance" 
                            paragraph="Protect your cargo from logistics risks up to its full value." 
                            />
                        </div>

                        <div className={style.additional_services}>
                            <Toggle />
                            <Paragraph 
                            title="Transport / Delivery" 
                            paragraph="We deliver the cargo to your door step from the ports." 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}


