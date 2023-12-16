import { useState } from 'react'

import { calculateCarRent, generateCarImageUrl } from '../../utils/index'
import CustomButton from '../../components/common/CustomButton'
import CarDetails from './CarDetails'
import HeartOutline from '../../assets/img/public/heart-outline.svg'
import HeartFilled from '../../assets/img/public/heart-filled.svg'
import SteeringWheel from '../../assets/img/public/steering-wheel.svg'
import Tire from '../../assets/img/public/tire.svg'
import Gas from '../../assets/img/public/gas.svg'
import RightArrow from '../../assets/img/public/right-arrow.svg'
const CarCard = ({ car }) => {
    const [isLiked, setIsLiked] = useState(false)
    const { city_mpg, year, make, model, transmission, drive, price } = car

    const [isOpen, setIsOpen] = useState(false)

    const imaginApiKey = 'hrjavascript-mastery'

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>

                <img
                    src={!isLiked ? HeartOutline : HeartFilled}
                    width={24}
                    height={24}
                    alt="heart"
                    className="object-contain cursor-pointer mt-0.5"
                    onClick={() => setIsLiked(!isLiked)}
                />
            </div>

            <p className="car-card__price" style={{ marginTop: '1rem' }}>
                {price}
                <span className="car-card__price-dollar">$</span>
            </p>

            <div className="car-card__image">
                <img
                    src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${
                        model.split(' ')[0]
                    }&zoomType=fullscreen&modelYear=${year}`}
                    alt=""
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="car-card__icon-container">
                    <div className="car-card__icon">
                        <img
                            src={SteeringWheel}
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="car-card__icon-text">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <img src={Tire} width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <img src={Gas} width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title="Chi tiết"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon={RightArrow}
                        handleClick={openModal}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={closeModal} car={car} />
        </div>
    )
}

export default CarCard
