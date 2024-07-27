import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox() {
    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form>
            <TextField id="city" label="City Name" variant="outlined" required/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}