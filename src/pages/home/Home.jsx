import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'

import './home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="homeContainer">
                <FeaturedProperties />
            </div>
        </div>
    )
}

export default Home
