import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=4')

    return (
        <div className="fp">
            {loading ? (
                'Loading'
            ) : (
                <>
                    {/* {data.map((item) => (
                        <div className="fpItem" key={item._id}>
                            <img src={item.photos[0]} alt="" className="fpImg" />
                            <span className="fpName">{item.title}</span>
                            <span className="fpCity">Xe {item.car}</span>
                            <span className="fpName">
                                Lịch bảo dưỡng : 22/11/2022 đến 23/11/2022
                            </span>

                            <span className="fpPrice">
                                Báo giá{' '}
                                <span
                                    style={{
                                        color: 'red',
                                        marginLeft: '10px',
                                        fontWeight: 700
                                    }}
                                >
                                    {item.cheapestPrice} -{' '}
                                    {item.cheapestPrice + 100}
                                </span>
                            </span>
                            {item.rating && (
                                <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            )}
                        </div>
                    ))} */}
                    {data.map((item) => (
                        <Card className="fpItem" key={item._id}>
                            <Card.Img
                                variant="top"
                                src={item.photos[0]}
                                alt=""
                                className="fpImg"
                            />
                            <Card.Body>
                                <Card.Title className="fpName">
                                    {item.title}
                                </Card.Title>
                                <Card.Text className="fpCity">
                                    Xe {item.car}
                                </Card.Text>

                                <Card.Text className="fpPrice">
                                    Báo giá{' '}
                                    <span
                                        style={{
                                            color: 'red',
                                            marginLeft: '10px',
                                            fontWeight: 700
                                        }}
                                    >
                                        {item.cheapestPrice} -{' '}
                                        {item.cheapestPrice + 100} USD
                                    </span>
                                </Card.Text>
                                {item.rating && (
                                    <div className="fpRating">
                                        <button>{item.rating}</button>
                                        <span>Excellent</span>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                </>
            )}
        </div>
    )
}

export default FeaturedProperties
