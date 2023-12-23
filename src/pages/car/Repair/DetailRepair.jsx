import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/header/Header'
import MailList from '../../../components/mailList/MailList'
import Footer from '../../../components/footer/Footer'
import './DetailRepair.css'
const DetailRepair = () => {
    // Use the useLocation hook to access the location object
    const location = useLocation()

    // Access the state object containing the additional data
    const selectedItem = location.state?.selectedItem

    const sortedList = [...selectedItem.list_category].sort(
        (a, b) => a.price_category - b.price_category
    )
    return (
        <div>
            {/* <Navbar />
            <Header type="list" /> */}
            <div className="relative">
                <main className="overflow-hidden">
                    <div
                        className="mt-12 padding-x padding-y max-width"
                        id="discover"
                    >
                        {selectedItem ? (
                            <>
                                <h4>{selectedItem?.car}</h4>

                                <h6> {selectedItem?.title}</h6>

                                {selectedItem.photos && (
                                    <div>
                                        {selectedItem.photos.map(
                                            (photo, index) => (
                                                <img
                                                    key={index}
                                                    src={photo}
                                                    alt=""
                                                />
                                            )
                                        )}
                                    </div>
                                )}
                                <h6>
                                    {selectedItem.list_error.length} lỗi hay gặp
                                </h6>
                                <div className="err">
                                    {selectedItem.list_error?.map(
                                        (item, index) => (
                                            <div key={index}>
                                                <h3>
                                                    {index + 1}. {item.title_err}
                                                </h3>
                                                <p>{item.sub_err}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <h6>Các gói bảo dưỡng tham khảo</h6>
                                <div className="service_package">
                                    {sortedList?.map((item, index) => (
                                        <div key={index} className="service_item">
                                            <span className="bullet">
                                                &#8226;
                                            </span>

                                            <span>{item?.title_category}</span>
                                            <div style={{ marginTop: '10px' }}>
                                                - {item?.sub_category}
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: '10px',
                                                    color: 'red'
                                                }}
                                            >
                                                Giá tham khảo:
                                                {item?.price_category} USD
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* <h6>{selectedItem.category}</h6> */}
                                {/* <div className="category">
                                    {selectedItem.list_category?.map(
                                        (category, index) => (
                                            <div
                                                key={index}
                                                className="category_item"
                                            >
                                                <div className="strong">
                                                    <strong>
                                                        {category.title_category}
                                                    </strong>
                                                </div>
                                                <ul>
                                                    {category.sub_category.map(
                                                        (subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                - {subItem}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div> */}
                                <div className="footer-repair">
                                    Nếu các bạn đang cần tìm gara{' '}
                                    <strong>{selectedItem.title}</strong> ở Hà Nội
                                    uy tín, hãy ghé thăm{' '}
                                    <strong> Gara Phú Quang </strong> để trải
                                    nghiệm các gói dịch vụ bảo dưỡng, sửa chữa
                                    Camry chất lượng tại đây. Chúng tôi cam kết sẽ
                                    khiến các bạn hài lòng về tất cả, từ chất
                                    lượng, thời gian cho tới giá cả sửa chữa tại
                                    garage. Hãy liên hệ ngay với chúng tôi qua số
                                    điện thoại
                                    <strong> 0987654321 </strong> để được tư vấn
                                    và hỗ trợ miễn phí trước khi mang xe tới gara
                                    để sửa chữa. Hân hạnh được đón tiếp quý khách!
                                </div>
                            </>
                        ) : (
                            <div>No data available</div>
                        )}
                    </div>
                </main>
            </div>

            {/* <MailList />
            <Footer /> */}
        </div>
    )
}

export default DetailRepair
