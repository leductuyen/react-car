import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Camry from '../../../assets/img/camry.webp'
import Ford from '../../../assets/img/ford.jpg'
import Lexus from '../../../assets/img/lexus.jpg'
import Maybach from '../../../assets/img/maybach.jpg'
import Vinfat from '../../../assets/img/vinf.jpg'
import Bmv from '../../../assets/img/bmv.jpeg'
import Audi from '../../../assets/img/audi.webp'
import Por from '../../../assets/img/porche.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CustomButton from '../../../components/common/CustomButton'
import useFetch from '../../../hooks/useFetch'
import './Repair.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Repair = () => {
    // const data = [
    //     {
    //         id: 1,
    //         title: 'Dịch vụ sửa xe Camry',
    //         content:
    //             'Chuyên cung cấp dịch vụ sửa chữa xe Toyota Camry tại TP Hà Nội và các tỉnh lân cận như Hà Nội, Hải Phòng, Quảng Ninh. Đội ngũ kỹ thuật viên tận tâm và am hiểu sâu về các vấn đề kỹ thuật, đảm bảo sự hoạt động ổn định và hiệu suất cao cho chiếc xe của bạn.',
    //         img: Camry,
    //         error: 'I. 6 Lỗi thường gặp khi sửa chữa xe Camry',
    //         list_error: [
    //             {
    //                 title_err: '1. Lỗi vô lăng trên xe Camry',
    //                 sub_err:
    //                     'Dòng xe Camry thường xuyên mắc phải lỗi nặng tay lái vô lăng khi điều khiển xe. Thậm chí, rất khó để đánh lái khi mà vô lăng quá cứng, cần phải sử dụng một lực rất lớn để đánh lái. Đây là một lỗi ảnh hưởng rất nhiều tới tính an toàn khi điều khiển xe. Bởi nếu như khi bạn đang di chuyển trên những đoạn đường có nhiều xe cộ lưu thông cùng, hay những đoạn đường xấu, nhiều gõ ngách… khi xảy ra tình huống khẩn cấp khiến bạn phải đánh lái nhanh nhưng vô lăng lại quá năng khiến bạn không xử lý kịp.Vậy nên, nếu chiếc xe Camry của bạn đang gặp phải tình trạng nặng vô lăng đánh lái'
    //             },
    //             {
    //                 title_err: '2. Lỗi hệ thống túi khí trên xe Toyota Camry',
    //                 sub_err:
    //                     'Nếu như chiếc xe Camry của bạn đang di chuyển bình thường, trước đó không hề xảy ra va chạm gì mà bỗng nhiên bảng taplo hiển thị biểu tượng cảnh báo túi khí sáng, thì rất có thể hệ thống túi khí đang gặp sự cố. Khi xuất hiện tình trạng này, bạn nên sửa chữa xe Camry sớm nhất, bởi sẽ rất nguy hiểm nếu như túi khi xe Camry bất ngờ bật ra và bật sai vị trí. Đây được xem là một lỗi thường gặp trên xe Toyota Camry rất nguy hiểm và được hãng triệu hồi lại để kiểm tra và khắc phục.'
    //             },
    //             {
    //                 title_err: '3. Đèn báo lỗi liên tục nháy',
    //                 sub_err:
    //                     'Tương tự như lỗi bên trên, biểu tượng cảnh báo lỗi túi khí liên tục nháy có thể là lỗi xuất hiện ở hệ thống cảnh báo trên xe. Trong trường hợp này, bạn hãy reset lại hệ thống là vấn đề đã được giải quyết.'
    //             },
    //             {
    //                 title_err: '4. Lỗi hệ thống phun xăng xe Camry',
    //                 sub_err:
    //                     'Khi chiếc xe Camry của bạn gặp phải lỗi này, thì xe rất hay bị chết máy đột ngột và không thể khởi động lại được nữa. Nguyên nhân có thể là kim phun đã bị tắc trong quá trình hoạt động, dẫn tới không đủ nhiên liệu phun tới động cơ khiến xe chết máy.'
    //             },
    //             {
    //                 title_err: '5. Lỗi hệ thống điều hòa xe Camry',
    //                 sub_err:
    //                     'Dấu hiệu dễ nhận biết nhất khi hệ thống điều hòa xe Camry gặp vấn đề đó là khả năng làm mát không sau, thậm chí là chỉ có gió nóng được thổi ra chứ không có gió lạnh. Lỗi này đa phần là do lượng gas làm lạnh đã gần hết. Bạn có thể mang xe tới các gara sửa ô tô Camry uy tín để được nạp thêm gas. Ngoài ra, nguyên nhân cũng có thể là do dây curoa nối động cơ với máy nén bị chùng, từ đó thất thoát công, nên máy nén không thể nén chất làm lạnh tới áp suất tiêu chuẩn.'
    //             },
    //             {
    //                 title_err: '6. Lỗi hệ thống phanh xe Camry',
    //                 sub_err:
    //                     'Thông thường đối với xe ô tô Camry, người dùng nên tiến hành kiểm tra và bảo dưỡng hệ thống phanh sau 50.000 – 120.000 km sử dụng. Hệ thống phanh là bộ phận luôn hoạt động và chịu áp lực cao, nên tình trạng mòn phanh và các bộ phận khác liên quan rất dễ xảy ra. Khi chiếc xe của bạn gặp một trong số những dấu hiệu trên, hãy để các Kỹ Thuật Viên kiểm tra và đưa ra biện pháp sửa chữa xe Camry kịp thời. Tránh để lâu dẫn tới hư hỏng nặng, thiếu đi tính an toàn khi sử dụng xe.'
    //             }
    //         ],
    //         service_package:
    //             'II. Các gói dịch vụ sửa chữa xe Camry Gara Phú Quang',
    //         list_service_package: [
    //             { title: 'Sửa chữa – đại tu động cơ xe Camry' },
    //             { title: 'Sửa chữa – đại tu hộp số xe Camry' },

    //             { title: 'Sửa chữa hệ thống gầm ô tô Camry' },
    //             { title: 'Sửa chữa hệ thống điện – điện tử xe Camry' },
    //             { title: 'Sửa chữa điều hòa ô tô Camry' },
    //             { title: 'Đồng sơn ô tô Camry' },
    //             { title: ' Chăm sóc, làm đẹp và độ xe Camry' }
    //         ],
    //         category: 'III. Các hạng mục bảo dưỡng ô tô Camry',
    //         list_category: [
    //             {
    //                 title_category:
    //                     ' Các hạng mục bảo dưỡng ô tô Camry cấp I – 5.000 km',
    //                 sub_category: [
    //                     'Kiểm tra bổ sung nước rửa kính, nước làm mát',
    //                     'Thay dầu nhớt',
    //                     'Kiểm tra toàn bộ khung gầm'
    //                 ]
    //             },
    //             {
    //                 title_category:
    //                     'Các hạng mục bảo dưỡng Camry cấp II – 10.000 km',
    //                 sub_category: [
    //                     'Xiết lại gầm',
    //                     'Kiểm tra bổ sung dầu trợ lực',
    //                     'Kiểm tra lốp, bảo dưỡng hệ thống phanh',
    //                     'Vệ sinh hệ thống điều hòa, khoang máy'
    //                 ]
    //             },
    //             {
    //                 title_category:
    //                     'Các hạng muc bảo dưỡng xe Camry cấp III – 20.000-30.000 km',
    //                 sub_category: [
    //                     'Kiểm tra toàn bộ hệ thống treo, cao su giảm chấn, thanh cân bằng, rô tuyn…',
    //                     'Kiểm tra bổ sung dầu trợ lực',
    //                     'Thay dầu lọc nhớt động cơ, dầu động cơ, vệ sinh lọc gió điều hòa, lọc gió động cơ',
    //                     'Nảo dưỡng phanh, đảo lốp ...'
    //                 ]
    //             },
    //             {
    //                 title_category:
    //                     'Các hạng mục bảo dưỡng ô tô Camry cấp IV – 40.000 km',
    //                 sub_category: [
    //                     'Thay dầu côn, dầu trợ lực lái, dầu phanh',
    //                     'Thay nước làm mát và xúc rửa két nước làm mát nếu cần',
    //                     'Thay lọc dầu động cơ, lọc gió động cơ, lọc nhiên liệu, bugi',
    //                     'Bảo dưỡng kim phum, họng hút, xúc rửa cácte bằng dung dịch chuyên dụng',
    //                     'Kiểm tra hoặc thay thế nếu cần thiết hệ thống treo, thanh cần bằng, cao su giảm chấn, rô tuyn…',
    //                     'Cân bằng động bánh xe, độ chum, đảo lốp xe…'
    //                 ]
    //             }
    //         ],

    //         sub: 'Sửa chữa xe Camry chưa bao giờ là điều dễ dàng đối với nhiều gara ngày nay, bởi chúng luôn nằm trong danh sách những dòng xe sang được người tiêu dùng trên thế giới yêu thích nhất, với lối thối kế thời thượng, trang thiết bị an toàn và tiện nghi hiện đại.  Một điểm nữa ở các dòng xe Camry luôn được người dùng đặc biệt yếu thích đó chỉ là khả năng tiết kiệm nhiên liệu và động cơ siêu bền bỉ.Tuy nhiên, bền bỉ không có nghĩa là trường tồn không hư hỏng, theo thời gian, các bộ phận chi tiết trên xe Camry cũng dần bị xuống cấp nếu như không được chăm sóc và bảo dưỡng định kỳ.Khi xe ô tô Camry hư hỏng, việc đầu tiên mà các chủ xe nên làm đó chính là tìm kiếm cho mình một gara chuyên sửa xe Camry để có thể khắc phục được các pan bệnh mà chiếc xe mắc phải, để hạn chế những hư hỏng có thể phát sinh, tốn quá nhiều thời gian và chi phí trong quá trình xử lý lỗi.'
    //     },
    //     {
    //         id: 2,
    //         title: 'Dịch vụ sửa xe Ford',
    //         content:
    //             'Đến với chúng tôi, bạn sẽ trải nghiệm dịch vụ sửa chữa xe Ford chất lượng nhất tại TP Hà Nội và các tỉnh lân cận. Đội ngũ kỹ thuật viên chuyên nghiệp không chỉ sửa chữa mà còn tư vấn cách bảo quản và duy trì xe để gia tăng tuổi thọ và giảm thiểu sự cố.',
    //         img: Ford,
    //         error: 'I. Những lỗi thường gặp trên xe Ford mà chủ xe cần lưu ý',
    //         list_error: [
    //             {
    //                 title_err: '1 Lỗi hộp số Power Shift',
    //                 sub_err:
    //                     'Đây là lỗi đặc trưng trên các dòng Ford Fiesta, Focus, Ecosport'
    //             },
    //             {
    //                 title_err: '2. Lỗi rò rỉ dầu động cơ, lỗi Turbo',
    //                 sub_err:
    //                     'Ford Ranger và Everest sử dụng động cơ 2.0L là 2 mẫu xe thường xuyên gặp phải lỗi này nhất'
    //             },
    //             {
    //                 title_err:
    //                     '3. Tấm cách âm ở khoang máy bị lão hóa gây mùi khó chịu',
    //                 sub_err: ''
    //             },
    //             {
    //                 title_err: '4. Lỗi tắc két nước tản nhiệt',
    //                 sub_err: ' Lỗi này thường gặp trên xe Ecosport'
    //             }
    //         ],
    //         service_package: 'II .Các gói dịch vụ bảo dưỡng và sửa chữa xe Ford',
    //         list_service_package: [
    //             { title: 'Bảo dưỡng các cấp định kỳ xe Ford' },
    //             { title: 'Phục hồi/sửa chữa/đại tu động cơ, hộp số' },

    //             { title: 'Sửa chữa điện – máy – gầm' },
    //             { title: 'Sửa chữa hệ thống điện – điện điều khiển' },
    //             { title: 'Sửa chữa hệ thống điều hòa…' },
    //             {
    //                 title: 'Phục hồi xe sau tai nạn, đánh bóng, đồng sơn, làm đẹp nội/ngoại thất'
    //             },
    //             {
    //                 title: 'Phục hồi xe sau tai nạn, đánh bóng, đồng sơn, làm đẹp nội/ngoại thất'
    //             }
    //         ],
    //         category: '',
    //         list_category: [],
    //         sub: 'Bạn đang ở Hà Nội hoặc các khu vực lân cận và đang muốn tìm một gara chuyên sửa xe Ford. Bạn đang đắn đo không biết chất lượng dịch vụ và giá cả tại nơi mình muốn ghé thăm sửa chữa có tốt hay không? Vậy bạn có thể ghé thăm Gara Phú Quang để trải nghiệm các gói dịch vụ sửa chữa xe Ford tại đây với những điểm nổi bật mà ít gara khác nào có được ngay sau đây!'
    //     },
    //     {
    //         id: 3,
    //         title: 'Dịch vụ sửa xe Vinfat',
    //         content:
    //             'Với đội ngũ kỹ thuật viên giàu kinh nghiệm, chúng tôi tự hào là địa chỉ tin cậy cho dịch vụ sửa xe Vinfat tại TP Hà Nội và các tỉnh lân cận. Cơ sở vật chất hiện đại và phương pháp làm việc chuyên nghiệp đảm bảo sự hài lòng cho mọi khách hàng.',
    //         img: Vinfat,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: 'Tương tự như các dòng xe Đức khác, để sửa xe VinFast cần phải có được nhiều kinh nghiệm và đầy đủ các máy móc hỗ trợ. Và tất nhiên, việc sửa chữa ô tô VinFast cũng gặp nhiều vấn đề khó khăn hơn, bởi đây là một dòng xe mới. Các thợ sửa chữa có thể sẽ chưa hiểu hết được cấu tạo cũng như nguyên lý hoạt động của dòng xe này'
    //     },
    //     {
    //         id: 4,
    //         title: 'Dịch vụ sửa xe Maybach',
    //         content:
    //             'Chiếc xe Maybach của bạn xứng đáng được chăm sóc đặc biệt. Chúng tôi cam kết mang đến dịch vụ sửa xe Maybach tốt nhất, với đội ngũ kỹ thuật viên có tay nghề cao và sự tận tâm đặc biệt đối với dòng xe sang trọng này.',
    //         img: Maybach,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: ''
    //     },
    //     {
    //         id: 5,
    //         title: 'Dịch vụ sửa xe Lexus',
    //         content:
    //             'Lexus - biểu tượng của sự sang trọng và hiệu suất. Chúng tôi hiểu rằng sự chính xác và tận tâm là quan trọng nhất khi sửa chữa xe Lexus. Đến với chúng tôi, bạn có thể tin tưởng vào chất lượng dịch vụ và sự chuyên nghiệp.',
    //         img: Lexus,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: ''
    //     },
    //     {
    //         id: 6,
    //         title: 'Dịch vụ sửa xe BMW',
    //         content:
    //             'BMW - biểu tượng của sức mạnh và đẳng cấp. Đội ngũ kỹ thuật viên chuyên nghiệp của chúng tôi có kiến thức sâu rộng về các mô hình BMW, mang lại dịch vụ sửa chữa chất lượng và đảm bảo sự an tâm cho khách hàng.',
    //         img: Bmv,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: ''
    //     },
    //     {
    //         id: 7,
    //         title: 'Dịch vụ sửa xe Audi',
    //         content:
    //             'Audi - sự kết hợp hoàn hảo giữa thiết kế và hiệu suất. Chúng tôi cung cấp dịch vụ sửa xe Audi với đội ngũ kỹ thuật viên chuyên nghiệp và cơ sở vật chất hiện đại, để đảm bảo chiếc xe của bạn luôn hoạt động ổn định và tốt nhất.',
    //         img: Audi,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: ''
    //     },
    //     {
    //         id: 8,
    //         title: 'Dịch vụ sửa xe Porsche',
    //         content:
    //             'Porsche - sự kết hợp hoàn hảo giữa thiết kế và hiệu suất. Chúng tôi cung cấp dịch vụ sửa xe Audi với đội ngũ kỹ thuật viên chuyên nghiệp và cơ sở vật chất hiện đại, để đảm bảo chiếc xe của bạn luôn hoạt động ổn định và tốt nhất.',
    //         img: Por,
    //         error: '',
    //         list_error: [],
    //         service_package: '',
    //         list_service_package: [],
    //         category: '',
    //         list_category: [],
    //         sub: ''
    //     }
    // ]
    const [list, setList] = useState([])
    console.log(list)
    const { data, loading, error } = useFetch('/hotels')

    useEffect(() => {
        setList(data)
    }, [data])

    const navigate = useNavigate()
    const handleShowMore = (id) => {
        const selectedItem = data.find((item) => item._id === id)
        console.log(selectedItem)
        // Navigate to the DetailRepair page with the ID and additional data
        navigate(`/repair/${id}`, { state: { selectedItem } })
    }

    return (
        <>
            <div className="title">
                <h4>GARA PHÚ QUANG SỬA CHỮA LOẠI XE</h4>
                <p>
                    Quý khách đang đến với các dịch vụ bảo dưỡng và sửa chữa ô tô
                    đời mới chuyên sâu của GARA PHÚ QUANG{' '}
                </p>
            </div>
            <div className="repair">
                {/* <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx} style={{ cursor: 'pointer' }}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={data[idx].img}
                                    style={{
                                        objectFit: 'cover',
                                        height: '300px'
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{data[idx].title}</Card.Title>
                                    <Card.Text style={{ lineHeight: 2 }}>
                                        {data[idx].content}
                                    </Card.Text>
                                    <CustomButton
                                        title="Chi tiết"
                                        containerStyles="w-50 py-[16px] rounded-full bg-primary-blue"
                                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                                        handleClick={() =>
                                            handleShowMore(data[idx].id)
                                        }
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> */}
                <Row xs={1} md={3} className="g-4">
                    {list.map((item, idx) => (
                        <Col key={idx} style={{ cursor: 'pointer' }}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={item.photos[0]} // Đổi từ list[0].photos thành item.photos[0]
                                    style={{
                                        objectFit: 'cover',
                                        height: '300px'
                                    }}
                                />
                            </Card>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        marginTop: '20px',
                                        marginBottom: '20px'
                                    }}
                                >
                                    {item.title}
                                </Card.Title>

                                <CustomButton
                                    title="Chi tiết"
                                    containerStyles="w-50 py-[0px] rounded-full bg-primary-blue"
                                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                                    handleClick={() => handleShowMore(item._id)}
                                />
                            </Card.Body>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Repair
