const Card = ({person}) => {
    const handleClick = () => {
        console.log("click");
    }
    return(
        <div className="card" onClick={handleClick}>
            <div className="card-image-container">
                <img src="https://www.rockandpop.cl/wp-content/uploads/2019/12/mandamientos-baby-yoda.jpg"/>
            </div>
            <div className="card-details-container">
                <h4>{person.name}</h4>
                <p>{"Birthday: "+person.birth_year}</p>
                <p>{"Gender: "+person.gender}</p>
            </div>
        </div>
    )
}

export default Card