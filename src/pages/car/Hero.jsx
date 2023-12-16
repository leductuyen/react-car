import React from 'react'
import CustomButton from '../../components/common/CustomButton'
import hero from '../../assets/img/hero.png'
import heroBg from '../../assets/img/hero-bg.png'
const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('discover')

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Chất lượng, uy tín và sự chăm sóc tận tâm - Phú Quang
                </h1>

                <p className="hero__subtitle">
                    Hãy đến với chúng tôi để trải nghiệm dịch vụ một cách tốt
                    nhất!!!
                </p>

                <CustomButton
                    title="Khám phá Gara"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <img
                        src={hero}
                        alt="hero"
                        className="object-contain"
                        style={{ marginTop: '100px' }}
                    />
                </div>

                <img src={heroBg} alt="" className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero
