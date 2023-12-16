import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
import CustomButton from '../../components/common/CustomButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const [isToastComplete, setIsToastComplete] = useState(true)

    const { dispatch } = React.useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        setErrors((prev) => ({ ...prev, [e.target.id]: '' }))
    }

    const validateCredentials = () => {
        const newErrors = {}

        if (!credentials.username.trim()) {
            newErrors.username = 'Vui lòng nhập tên đăng nhập.'
        }

        if (!credentials.password.trim()) {
            newErrors.password = 'Vui lòng nhập mật khẩu.'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleLogin = async (e) => {
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
            const res = await axios.post('/auth/login', credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details })
            navigate('/')
        } catch (err) {
            const errorMessage =
                'Tài khoản hoặc mật khẩu không đúng' || 'Đã xảy ra lỗi.'
            toast.error(errorMessage)
        } finally {
            setIsToastComplete(true)
        }
    }

    return (
        <div className="login .bg-primary-blue">
            <div className="card">
                <div className="left">
                    <h1>Gara ô tô Phú Quang</h1>
                    <p>
                        Garo Ô tô Phú Quang - Địa chỉ uy tín cho mua bán xe ô tô
                        mới và đã qua sử dụng, cùng với dịch vụ sửa chữa chất
                        lượng.
                    </p>
                    <span>Bạn có muốn đăng ký tài khoản</span>
                    <Link to="/register">
                        <button>Đăng ký</button>
                    </Link>
                </div>
                <div className="right">
                    <form>
                        <label>
                            Tài khoản <span className="error">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tên đăng nhập ..."
                            id="username"
                            onChange={handleChange}
                            className={`lInput account ${
                                errors.username && 'error'
                            }`}
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
                            onChange={handleChange}
                            className={`lInput password ${
                                errors.password && 'error'
                            }`}
                        />
                        {errors.password && (
                            <span className="error-message">
                                {errors.password}
                            </span>
                        )}
                        <CustomButton
                            title=" Đăng nhập"
                            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                            handleClick={handleLogin}
                        />
                    </form>
                </div>
            </div>
            <ToastContainer autoClose={5000} />
        </div>
    )
}

export default Login
