import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const baseURL = "http://localhost:9090/adcore/api/data/";

const DetailDataComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);
  const extendedURL = baseURL + id;

  fetch(extendedURL)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));

  return (
    <div class="container">
      <h1 class="font-weight-light mt-4">
        <strong>Data: </strong>
        {data.name}
      </h1>
      <hr />

      <div class="row align-items-center">
        {/* <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src={`/images/${spacecraft.spacecraft_image}`}
            alt={spacecraft.spacecraft_name}
          />
        </div> */}

        <div className="col-lg-12" id="data">
          <p>
            <strong>Description: </strong>
            {data.description}
          </p>
          <p>
            <strong>Parent: </strong>
            {data.parent}
          </p>
          <p>
            <strong>Read Only: </strong>
            {data.read_only ? "Read Only Data" : "Confidential Data"}
          </p>
          <p>
            <strong>Created: </strong>
            {data.created}
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default DetailDataComponent;
