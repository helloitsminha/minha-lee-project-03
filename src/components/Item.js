const Item = ({ name, imageSource, altText, link }) => {
    return (
        <li className="dish">
            <div className="dishContainer">
                <h3>{name}</h3>
                <img src={imageSource} alt={altText} />
                <p>Find it <a href={link}>here</a></p>
            </div> {/* end of .dishContainer */}
        </li>
    )
}

export default Item;