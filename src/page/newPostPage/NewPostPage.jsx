import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import axiosRequest from "../../lib/axiosfile";
import UploadWidget from '../../component/uploadWidget/UploadWidget';
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [desc, setDesc] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
    bathroom: "",
    latitude: "",
    longitude: "",
    type: "rent",
    property: "apartment",
    utilities: "owner",
    pet: "allowed",
    income: "",
    size: "",
    school: "",
    bus: "",
    restaurant: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        utilities, pet, income, size, school, bus, restaurant,
        ...validPostData
      } = formData;
  
      const res = await axiosRequest.post("/add", {
        postData: {
          ...validPostData,
          price: parseInt(formData.price),
          bedroom: parseInt(formData.bedroom),
          bathroom: parseInt(formData.bathroom),
          images: images,
        },
        postDetail: {
          desc,
          utilities,
          pet,
          income,
          size: parseInt(size),
          school: parseInt(school),
          bus: parseInt(bus),
          restaurant: parseInt(restaurant),
        },
      });
       console.log(res.data.id)
      navigate(`/post/${res.data.id}`);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            {[
              ["title", "Title", "text"],
              ["price", "Price", "number"],
              ["address", "Address", "text"],
              ["city", "City", "text"],
              ["bedroom", "Bedroom Number", "number"],
              ["bathroom", "Bathroom Number", "number"],
              ["latitude", "Latitude", "text"],
              ["longitude", "Longitude", "text"],
              ["income", "Income Policy", "text"],
              ["size", "Total Size (sqft)", "number"],
              ["school", "School", "number"],
              ["bus", "Bus", "number"],
              ["restaurant", "Restaurant", "number"]
            ].map(([name, label, type]) => (
              <div className="item" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  min={type === "number" ? 0 : undefined}
                />
              </div>
            ))}

            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" value={desc} onChange={setDesc} />
            </div>

            <div className="item">
              <label>Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>

            <div className="item">
              <label>Property</label>
              <select name="property" value={formData.property} onChange={handleChange}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label>Utilities Policy</label>
              <select name="utilities" value={formData.utilities} onChange={handleChange}>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div className="item">
              <label>Pet Policy</label>
              <select name="pet" value={formData.pet} onChange={handleChange}>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>

            <button className="sendButton">Add</button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
      </div>

      <div className="sideContainer">
      {images.map((image, index) => (
          <img src={image} key={index} alt={`upload-${index}`} />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;