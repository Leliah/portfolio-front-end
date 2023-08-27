import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { searchQuery } = useParams();

    //WORKING ON
    useEffect(() => {
        const API = process.env.REACT_APP_API_URL;
        
        let url = `${API}/homefeed`;
        if (searchQuery) {
            url = `${API}/homefeed?search=${searchQuery}`;
        }

        axios.get(url)
            .then((response) => setPhotos(response.data))
            .catch((e) => console.error("catch", e));
    }, [searchQuery]);

    return (
        <div className="Photos" >
            <div className="grid-container">
                {photos.map((photo, index) => (
                    <Photo key={index} photo={photo} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Photos;
