import React from 'react'
import "./list.scss";
import Filter from "../../component/filter/Filter";
import Card from "../../component/card/Card";
import Map from "../../component/map/Map"
import { useLoaderData } from "react-router-dom";

function List() {
  const { postResponse } = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {postResponse.data.map((post) => (
            <Card key={post.id} item={post} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={postResponse.data} />
      </div>
    </div>
  );
}


export default List
