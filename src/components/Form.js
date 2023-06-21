import { useState } from "react";

const Form = ({onSubmit}) => {
    const [userChoice, setUserChoice] = useState(0);

    const unhide = () => {
        var x = document.getElementById('header2');
        if (x.style.visibility === "hidden") {
            x.style.visibility = 'visible'
        } else {
            x.style.visibility = 'visible'
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        unhide();
        onSubmit(userChoice);
    };
    
    const handleChange = (event) => {
        setUserChoice(parseInt(event.target.value,10));
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="noOfRecipes">How many options do we want?</label>
                <select
                    value={userChoice}
                    onChange={handleChange}
                    id="noOfRecipes"
                    name="noOfRecipes"
                >
                    <option value="0" disabled>Pick one:</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>{/* end of select */}
                <button>Show me what to make!</button>
                <h2 id='header2'>May I suggest you make...</h2>
            </form>
        </div>// end of .wrapper

    );
};

export default Form;