const CardSkeleton = () => {

    const handleClick = () => {
        console.log("click");
    }

    return(
        <div className="card" onClick={handleClick}>
            <div className="card-image-container skeleton">
                
            </div>
            <div className="card-details-container">
                <h4 className="skeleton"></h4>
                <p className="skeleton"></p>
                <p className="skeleton"></p>
            </div>
        </div>
    )
}

export default CardSkeleton