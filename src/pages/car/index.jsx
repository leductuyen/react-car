import { useState, useEffect } from 'react'

import Hero from './Hero'

import CarCard from './CarCard'
import { fetchCars } from '../../utils'
import SearchBar from './Searchbar'
import CustomFilter from './CustomFilter'
import { fuels, yearsOfProduction } from '../../constants'
import ShowMore from './ShowMore'
import Loader from '../../assets/img/public/loader.svg'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AboutUs from './AboutUs'
import Repair from './Repair'
import Booking from '../booking/Booking'
import { useNavigate } from 'react-router-dom'

const Car = () => {
    const [allCars, setAllCars] = useState([])

    const [loading, setLoading] = useState(false)

    // search states
    const [manufacturer, setManuFacturer] = useState('')
    const [model, setModel] = useState('')

    // filter state
    const [fuel, setFuel] = useState('')
    const [year, setYear] = useState(2022)

    // limit state
    const [limit, setLimit] = useState(10)
    const navigate = useNavigate()
    const handleBookingClick = () => {
        // Thực hiện các xử lý bạn muốn khi Tab "Đặt lịch" được nhấp
        // Ví dụ: chuyển hướng đến trang "/booking"
        navigate('/booking')
    }
    const getCars = async () => {
        setLoading(true)
        try {
            const result = await fetchCars({
                manufacturer: manufacturer.toLowerCase() || '',
                model: model.toLowerCase() || '',
                fuel: fuel.toLowerCase() || '',
                year: year || 2022,
                limit: limit || 10
            })

            const carsWithRandomPrice = result.map((car) => ({
                ...car,
                price: (Math.floor(Math.random() * 100) * 1000).toLocaleString(
                    'vi-VN'
                )
            }))

            setAllCars(carsWithRandomPrice)
        } catch {
            console.error()
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCars()
    }, [fuel, year, limit, manufacturer, model])

    return (
        <>
            <div className="relative">
                <main className="overflow-hidden">
                    <Hero />
                    <div
                        className="mt-12 padding-x padding-y max-width"
                        id="discover"
                    >
                        <Tabs
                            defaultActiveKey="car"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab
                                eventKey="car"
                                title={
                                    <h1 className="text-4xl font-extrabold cursor-pointer">
                                        Danh mục ô tô
                                    </h1>
                                }
                            >
                                <div className="home__filters">
                                    <SearchBar
                                        setManuFacturer={setManuFacturer}
                                        setModel={setModel}
                                    />

                                    <div className="home__filter-container">
                                        <CustomFilter
                                            options={fuels}
                                            setFilter={setFuel}
                                        />
                                        <CustomFilter
                                            options={yearsOfProduction}
                                            setFilter={setYear}
                                        />
                                    </div>
                                </div>
                                {allCars.length > 0 ? (
                                    <section>
                                        <div className="home__cars-wrapper">
                                            {allCars?.map((car, index) => (
                                                <CarCard
                                                    key={`car-${index}`}
                                                    car={car}
                                                />
                                            ))}
                                        </div>

                                        {loading && (
                                            <div className="mt-16 w-full flex-center">
                                                <img
                                                    src={Loader}
                                                    alt="loader"
                                                    width={50}
                                                    height={50}
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}

                                        <ShowMore
                                            pageNumber={limit / 10}
                                            isNext={limit > allCars.length}
                                            setLimit={setLimit}
                                        />
                                    </section>
                                ) : (
                                    !loading && (
                                        <div className="home__error-container">
                                            <h2 className="text-black text-xl font-bold">
                                                Oops, no results
                                            </h2>
                                            <p>{allCars?.message}</p>
                                        </div>
                                    )
                                )}
                            </Tab>
                            <Tab
                                eventKey="about"
                                title={
                                    <h1 className="text-4xl font-extrabold cursor-pointer">
                                        Về chúng tôi
                                    </h1>
                                }
                            >
                                <AboutUs />
                            </Tab>
                            <Tab
                                eventKey="blog"
                                title={
                                    <h1 className="text-4xl font-extrabold cursor-pointer">
                                        Chuyên sửa
                                    </h1>
                                }
                            >
                                <Repair />
                            </Tab>
                            <Tab
                                eventKey="booking"
                                title={
                                    <h1
                                        className="text-4xl font-extrabold cursor-pointer"
                                        onClick={handleBookingClick}
                                    >
                                        Đặt lịch
                                    </h1>
                                }
                            ></Tab>
                        </Tabs>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Car
