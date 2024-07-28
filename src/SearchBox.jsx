import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d9ac93f50dfecb569ee32b0d420485de";

    let getWeatherInfo = async () => {
        await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
    }
    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" 
            variant="outlined" 
            required value={city}
            onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}