import axios from 'axios'
import './Register.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CustomButton from '../../components/common/CustomButton'
import { toast } from 'react-toastify'
const Register = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        phone: '',
        email: '',
        address: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        phone: '',
        email: '',
        address: ''
    })

    const [isToastComplete, setIsToastComplete] = useState(true)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        setErrors((prev) => ({ ...prev, [e.target.id]: '' }))
    }
    const validateCredentials = () => {
        const newErrors = {}

        if (!credentials.username || !credentials.username.trim()) {
            newErrors.username = 'Vui lòng nhập tên đăng nhập!'
        }

        if (!credentials.password || !credentials.password.trim()) {
            newErrors.password = 'Vui lòng nhập mật khẩu!'
        }

        if (!credentials.phone || !/^(0\d{9})$/.test(credentials.phone.trim())) {
            newErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ!'
        }

        if (!credentials.address || !credentials.address.trim()) {
            newErrors.address = 'Vui lòng nhập địa chỉ!'
        }

        if (
            !credentials.email ||
            !/^\S+@\S+\.\S+$/.test(credentials.email.trim())
        ) {
            newErrors.email = 'Vui lòng nhập địa chỉ email hợp lệ.'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleClick = async (e) => {
        e.preventDefault()
        if (!validateCredentials()) {
            return
        }

        if (isToastComplete) {
            setIsToastComplete(false)

            toast.info('Đang xử lý...', {
                autoClose: 1000
            })
        }

        try {
            const res = await axios.post('/auth/register', credentials)
            if (res) {
                navigate('/')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="register">
            {/* {showLoadingModal && <ModalLoading status="success" />} */}
            <div className="card">
                <div className="left">
                    <h1>Gara ô tô Phú Quang</h1>
                    <p>
                        Garo Ô tô Phú Quang - Đối tác đáng tin cậy trong thế giới
                        xe ô tô tại Việt Nam. Chúng tôi cung cấp các loại xe mới
                        và đã qua sử dụng, dịch vụ sửa chữa chuyên nghiệp, và cam
                        kết chất lượng hàng đầu. Hãy để chúng tôi đồng hành cùng
                        bạn trên mọi hành trình ô tô.
                    </p>

                    <Link to="/login">
                        <button>Đăng nhập</button>
                    </Link>
                </div>
                <div className="right">
                    <form>
                        <label>
                            Tài khoản <span className="error">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tên đăng ký ..."
                            id="username"
                            className="lInput account"
                            onChange={handleChange}
                        />
                        {errors.username && (
                            <span className="error-message">
                                {errors.username}
                            </span>
                        )}
                        <label>
                            Mật khẩu <span className="error">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Mật khẩu ..."
                            id="password"
                            className="lInput password"
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <span className="error-message">
                                {errors.password}
                            </span>
                        )}
                        <label>
                            Số điện thoại <span className="error">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Số điện thoại ..."
                            id="phone"
                            className="lInput password"
                            onChange={handleChange}
                        />
                        {errors.phone && (
                            <span className="error-message">{errors.phone}</span>
                        )}
                        <label>
                            Email <span className="error">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email ..."
                            id="email"
                            className="lInput password"
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                        <label>
                            Địa chỉ <span className="error">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Địa chỉ ..."
                            id="address"
                            className="lInput password"
                            onChange={handleChange}
                        />
                        {errors.address && (
                            <span className="error-message">
                                {errors.address}
                            </span>
                        )}
                        <CustomButton
                            title=" Đăng ký"
                            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                            handleClick={handleClick}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
