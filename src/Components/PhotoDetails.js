import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function PhotoDetails() {
        //TAKING THE VALUE OF THE INDEX PARAMETER FROM THE URL
        let { index } = useParams();
        let navigate = useNavigate();
        const [ photo, setPhoto ] = useState([]);
    
        useEffect(() => {
            axios
            .get(`${API}/homefeed/${index}`)
            .then((response) => setPhoto(response.data))
            .catch((e) => console.error("catch", e));
        }, [])
    
        const handleDelete = () => {
          axios
          .delete(`${API}/homefeed/${index}`)
          .then(() => {
            navigate(`/homefeed`);
          })
          .catch((e) => console.error("catch", e));
        };
        return (
            <article className="details">
            <h3>
              {photo.is_saved ? <span>❤️</span> : <span>♡</span>} {photo.name}
            </h3>
            <h5>
              <span>
                <a href={photo.url}></a>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={photo.url} />
            </h5>
            <h6><b>Category:</b> {photo.category}</h6>
            <p>{photo.description}</p>
            <div className="backEditDelete">
              <div>
                {" "}
                <Link to={`/homefeed`}>
                  <button className="btn btn-danger">Back</button>
                </Link>
              </div>
              <div>
                {" "}
                <Link to={`/homefeed/${index}/edit`}>
                  <button className="btn btn-danger">Edit</button>
                </Link>
              </div>
              <div>
                {" "}
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </article>
          );
}

export default PhotoDetails