import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=6')

    return (
        <div className="container">
            {loading ? (
                'Loading'
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map((item) => (
                        <Col key={item._id} className="mb-4">
                            <Card className="fpItem">
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
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}

export default FeaturedProperties
