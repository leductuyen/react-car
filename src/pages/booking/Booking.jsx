import './Booking.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

import axios from 'axios'

const Booking = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const { data, loading, error } = useFetch(`/hotels/find/${id}`)
    console.log(data)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { dates, options } = useContext(SearchContext)

    if (!dates || dates.length === 0) {
        return null
    }

    const { startDate, endDate } = dates[0]

    const formattedStartDate = formatDate(startDate)
    const formattedEndDate = formatDate(endDate)

    function formatDate(date) {
        const d = new Date(date)
        const day = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        return `${day}/${month}/${year}`
    }

    const handleClick = async () => {
        if (user) {
            const newData = {
                ...data,
                startDate: formattedStartDate,
                endDate: formattedEndDate
            }

            await axios.put(`/hotels/${newData._id}`, newData)
        } else {
            navigate('/login')
        }
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? (
                'loading'
            ) : (
                <div className="hotelContainer">
                    <div className="hotelWrapper">
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location – {data.distance}m from center
                        </span>
                        <span className="hotelPriceHighlight">
                            Book a stay over ${data.cheapestPrice} at this
                            property and get a free airport taxi
                        </span>
                        <div className="hotelImages">
                            {data.photos?.map((photo, i) => (
                                <div className="hotelImgWrapper" key={i}>
                                    <img
                                        src={photo}
                                        alt=""
                                        className="hotelImg"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">{data.desc}</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <button onClick={handleClick}>Đặt lịch</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Booking
