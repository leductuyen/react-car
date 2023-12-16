import { Link, useNavigate } from 'react-router-dom'
import './searchItem.css'
import { Button, Card, Modal } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { SearchContext } from '../../../context/SearchContext'
import axios from 'axios'
import CustomButton from '../../../components/common/CustomButton'
import { ToastContainer, toast } from 'react-toastify'
const SearchItem = ({ item }) => {
    const [show, setShow] = useState(false)
    const { data, loading, error } = useFetch(`/hotels/find/${item._id}`)
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

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleBooking = async () => {
        if (user) {
            const newData = {
                ...data,
                startDate: formattedStartDate,
                endDate: formattedEndDate
            }

            await axios.put(`/hotels/${newData._id}`, newData)

            setShow(false)
            setTimeout(() => {
                toast.success('Đặt lịch thành công...', {
                    autoClose: 1000
                })
            }, 1000)

            navigate('/')
        } else {
            navigate('/login')
        }
    }
    const errorArray = item.list_error
    const storedFormattedStartDate = sessionStorage.getItem('formattedStartDate')
    const storedFormattedEndDate = sessionStorage.getItem('formattedEndDate')

    return (
        <div className="row">
            <div className="col-sm-8">
                <Card className="fpItem" key={item._id}>
                    <Card.Img
                        variant="top"
                        src={item.photos[0]}
                        alt=""
                        className="fpImg"
                    />
                    <Card.Body>
                        <Card.Title>
                            <span className="titleMain">Lỗi thường gặp</span>
                        </Card.Title>

                        <Card.Text className="fpPrice">
                            {errorArray.map((error, index) => (
                                <div key={index}>
                                    <div className="titleErr">
                                        <span>{index + 1}.</span>
                                        {error.title_err}
                                    </div>
                                    <div>{error.sub_err}</div>
                                </div>
                            ))}
                        </Card.Text>
                        {item.rating && (
                            <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-4">
                <Card className="fpItem" key={item._id}>
                    <Card.Body>
                        <Card.Title className="fpName">{item.title}</Card.Title>
                        <Card.Text className="fpCity">Xe {item.car}</Card.Text>
                        <Card.Text className="fpName">Đặt lịch</Card.Text>
                        <Card.Text className="fpName">
                            {storedFormattedStartDate} đến{' '}
                            {storedFormattedEndDate}
                        </Card.Text>

                        <Card.Text className="fpPrice">
                            Báo giá
                            <span
                                style={{
                                    color: 'red',
                                    marginLeft: '10px',
                                    fontWeight: 700
                                }}
                            >
                                {item.cheapestPrice} - {item.cheapestPrice + 100}{' '}
                                USD
                            </span>
                        </Card.Text>
                        {item.rating && (
                            <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>
                        )}

                        <CustomButton
                            title="Đặt lịch"
                            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                            handleClick={handleShow}
                        />
                    </Card.Body>
                </Card>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Xác nhận</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button onClick={handleBooking} variant="primary">
                            Đồng ý
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer autoClose={5000} />
            </div>
        </div>
    )
}

export default SearchItem
