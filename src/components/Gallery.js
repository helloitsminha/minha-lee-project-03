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
                apiKey: '6540b4ba6dce481f87d862fb58adc153',
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
            </div>{/* // end of .wrapper */}

            <a href=''>I want different options!</a>
        </section>
    )
};

export default Gallery;