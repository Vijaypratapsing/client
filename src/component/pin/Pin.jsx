import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="popupContainer">
              <img src={item.images} alt="" />
              <div className="textContainer">
                <Link to={`/post/${item.id}`}>{item.title}</Link>
                <span>{item.bedrooms} bedroom</span>
                <b>$ {item.price}</b>
              </div>
            </div>
          </Popup>
        </Marker>
      );
    }
    
    export default Pin;