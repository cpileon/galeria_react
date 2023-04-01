const Card = ({url, altText = "Imagen de galería", titulo, descripcion }) =>{
    return (
        <div className="cardContainer">
            <img src= {url} alt={altText} className="itemImage"/>
            <h3 className="titleImage">{titulo}</h3>
            <p className="descImage">{descripcion}</p>
        </div>
    );
};

export default Card;