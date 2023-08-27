import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar() {
    const [searchedPins, setSearchedPins] = useState('');

    let navigate = useNavigate();
    // const { searchQuery } = useParams();

    // useEffect(() => {
    //     const API = process.env.REACT_APP_API_URL;
        
    //     let url = `${API}/homefeed`;
    //     if (searchQuery) {
    //         url = `${API}/homefeed?search=${searchQuery}`;
    //     }

    //     axios
    //     .get(`${API}/homefeed`)
    //     .then((response) => setPhotos(response.data))
    //     .catch((e) => console.error("catch", e));
    // }, [searchQuery])

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchedPins(searchValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/homefeed/${searchedPins}`);
    }

  return (
    <nav>
        <h1><Link to='/homefeed'> Pinterest</Link></h1>
        
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="search for KEYWORDS trending on Pinterest"
        className="searchBar"
        value={searchedPins}
         onChange={handleSearch}
         />
        </form>

        <button className="btn btn-info">
            <Link to='/homefeed/new'>Create </Link>
        </button>
    </nav>
  )
}

export default Navbar