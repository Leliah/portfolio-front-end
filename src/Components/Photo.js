import { Link } from "react-router-dom";


function Photo({ photo, index }) {
  return (
    <div className="grid-items">

            <Link to={`/homefeed/${index}`}><img src={photo.url} /></Link>
       
    </div>
  )
}

export default Photo