import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import Booking from './searchItem/Booking'
import useFetch from '../../hooks/useFetch'

const List = () => {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)

    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?car=${destination}&min=${min || 0}&max=${max || 999}`
    )
    console.log('carrrrrrrrrr', data)
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="container">
                <div className="row mt-5">
                    <div className="listResult col-sm-12">
                        {loading ? (
                            'loading'
                        ) : (
                            <>
                                {data.map((item) => (
                                    <Booking item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
