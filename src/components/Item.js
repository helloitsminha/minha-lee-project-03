const Item = ({ name, imageSource, altText, link }) => {
    return (
        <li className="photo-container">
            <p>{name}</p>
            <img src={imageSource} alt={altText} />
            <p>Find it <a href={link}>here</a></p>
        </li>
    )
}

export default Item;