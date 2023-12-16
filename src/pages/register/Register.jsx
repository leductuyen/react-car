import axios from 'axios'
import './Register.css'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import CustomButton from '../../components/common/CustomButton'
const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('/auth/login', credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details })
            navigate('/')
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
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
                        />
                        <label>
                            Mật khẩu <span className="error">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Mật khẩu ..."
                            id="password"
                            className="lInput password"
                        />
                        <label>
                            Số điện thoại <span className="error">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Số điện thoại ..."
                            id="phone"
                            className="lInput password"
                        />
                        <label>
                            Địa chỉ <span className="error">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Địa chỉ ..."
                            id="address"
                            className="lInput password"
                        />
                        <CustomButton
                            title=" Đăng ký"
                            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
