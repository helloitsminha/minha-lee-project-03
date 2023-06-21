import Item from './Item'


const Gallery = ({recipes} ) => {

    return (
        <section>
            <div className="wrapper">
                <ul className="recipeBox">
                    {
                        recipes.map((recipeObj) => {
                            return <Item
                                name={recipeObj.title}
                                key={recipeObj.id}
                                imageSource={recipeObj.image}
                                altText={`image of ${recipeObj.title}`}
                                link={recipeObj.sourceUrl}
                            />
                        })

                    }
                </ul> {/* end of .recipeBox */}
            </div> {/* // end of .wrapper */}


        </section>
    )
};

export default Gallery;