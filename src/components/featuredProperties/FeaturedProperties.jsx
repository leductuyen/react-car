import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=4')

    return (
        <div className="fp">
            {loading ? (
                'Loading'
            ) : (
                <>
                    {data.map((item) => (
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
                    ))}
                </>
            )}
        </div>
    )
}

export default FeaturedProperties
