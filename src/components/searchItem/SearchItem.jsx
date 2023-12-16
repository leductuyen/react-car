import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.title}</h1>
                <span className="siDistance">Tên xe : {item.car}</span>

                <span className="siFeatures">{item.desc}</span>
            </div>
            <div className="siDetails">
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>

                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">Đặt lịch</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
