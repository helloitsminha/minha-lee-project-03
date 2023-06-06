import Item from './Item'

import axios from 'axios';
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect((getRecipes, number) => {
        axios({
            url: 'https://api.spoonacular.com/recipes/random',
            method: 'GET',
            dataResponse: 'json',
            params: {
                apiKey: 'b94e385054d044efa9b9bcc4f949a526',
                number: 5,
                limitLicense: true,
            },
        }).then((response) => {
            console.log(response)
            setRecipes(response.data.recipes)
        })
    }, []);

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
                <a className='refresh' href='.'>I want different options!</a>
            </div>{/* // end of .wrapper */}


        </section>
    )
};

export default Gallery;