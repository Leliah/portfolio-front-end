import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PhotoNew() {
    let navigate = useNavigate();

    const [photo, setPhoto] = useState({
        name: "",
        url: "",
        category: "",
        is_saved: false,
      });
    
      const handleTextChange = (event) => {
        setPhoto({ ...photo, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setPhoto({ ...photo, is_saved: !photo.is_saved });
      };
    
      const addPin = () => {
        axios
          .post(`${API}/homefeed`, photo)
          .then(() => {
            navigate(`/homefeed`);
          })
          .catch((e) => console.error("catch", e));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        addPin();
      };

    return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={photo.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Photo"
              required
            />
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              type="text"
              pattern="http[s]*://.+"
              required
              value={photo.url}
              placeholder="http://"
              onChange={handleTextChange}
            />
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              name="category"
              value={photo.category}
              placeholder="fashion inspo, nails, ..."
              onChange={handleTextChange}
            />
            <label htmlFor="is_saved">Save Pin?</label>
            <input
              id="is_saved"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={photo.isFavorite}
            />
  
            <br />
    
            <input type="submit" />
          </form>
          <Link to={`/homefeed`}>
            <button>Nevermind!</button>
          </Link>
        </div>
      );
}

export default PhotoNew