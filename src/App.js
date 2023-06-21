import Header from './components/Header';
import Gallery from './components/Gallery';
import Form from './components/Form';
import Footer from './components/Footer';

import './App.css';

import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (noOfRecipes) => {
    const url = new URL('https://api.spoonacular.com/recipes/random');
    url.search = new URLSearchParams({
      apiKey: 'b94e385054d044efa9b9bcc4f949a526',
      number: noOfRecipes,
      limitLicense: true,
    });
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setRecipes(apiData.recipes);
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <main>
        <Header />
        <Form onSubmit={fetchRecipes} />
        <Gallery recipes={recipes}/>
        <Footer />
      </main>
    )
}

export default App;
