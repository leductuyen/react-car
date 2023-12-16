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
import { useContext, useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify'

const Header = ({ type }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        if (
            destination.trim() === '' ||
            !dates[0].startDate ||
            !dates[0].endDate
        ) {
            toast.error('Vui lòng nhập đầy đủ thông tin ', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
            return
        }
        setShow(true)
    }
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [formattedStartDate, setFormattedStartDate] = useState('')
    const [formattedEndDate, setFormattedEndDate] = useState('')

    useEffect(() => {
        const startDate = format(dates[0].startDate, 'dd/MM/yyyy')
        const endDate = format(dates[0].endDate, 'dd/MM/yyyy')

        setFormattedStartDate(startDate)
        setFormattedEndDate(endDate)
    }, [dates])

    const navigate = useNavigate()

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        sessionStorage.setItem('formattedStartDate', formattedStartDate)
        sessionStorage.setItem('formattedEndDate', formattedEndDate)
        dispatch({ type: 'NEW_SEARCH', payload: { destination, dates } })
        navigate('/hotels', { state: { destination, dates } })
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
                                    onClick={handleShow}
                                >
                                    Đặt lịch
                                </button>
                            </div>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Xác nhận</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Bạn muốn đặt lịch sửa chữa xe{' '}
                                    <span className="destination">
                                        {destination}
                                    </span>
                                    <p>
                                        Từ ngày {formattedStartDate} đến ngày{' '}
                                        {formattedEndDate}{' '}
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Đóng
                                    </Button>
                                    <Button
                                        onClick={handleSearch}
                                        variant="primary"
                                    >
                                        Đồng ý
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </>
                )}
                <ToastContainer />
            </div>
        </div>
    )
}

export default Header
