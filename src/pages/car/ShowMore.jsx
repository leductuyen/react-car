import CustomButton from '../../components/common/CustomButton'

const ShowMore = ({ pageNumber, isNext, setLimit }) => {
    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10

        setLimit(newLimit)
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    btnType="button"
                    title="Xem thêm"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore
