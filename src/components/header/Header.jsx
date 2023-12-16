import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range'
import { useContext, useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const Header = ({ type }) => {
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } })
        navigate('/hotels', { state: { destination, dates, options } })
    }

    return (
        <div className="header">
            <div
                className={
                    type === 'list'
                        ? 'headerContainer listMode'
                        : 'headerContainer'
                }
            >
                {type !== 'list' && (
                    <>
                        <h1 className="headerTitle">
                            Dịch vụ sửa chữa, bảo dưỡng tại Gara Phú Quang
                        </h1>
                        <p className="headerDesc">
                            Dịch vụ sửa chữa, bảo dưỡng tận tâm, chuyên nghiệp tại
                            Gara Phú Quang - Đồng hành đặc biệt cho đẳng cấp xe
                            của bạn!
                        </p>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="headerIcon"
                                />
                                <input
                                    type="text"
                                    placeholder="Sửa chữa, bảo dưỡng"
                                    className="headerSearchInput"
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="headerIcon"
                                />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(
                                    dates[0].startDate,
                                    'MM/dd/yyyy'
                                )} to ${format(
                                    dates[0].endDate,
                                    'MM/dd/yyyy'
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDates([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>

                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header